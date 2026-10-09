import { BulkQuoteLead, BulkQuoteRequest } from "@/types";
import { supabase } from "@/lib/supabase/client";

const QUOTES_STORAGE_KEY = "instant_live_quotes";
const QUOTES_EVENT_KEY = "instant_quotes_updated";

const INITIAL_QUOTES: BulkQuoteLead[] = [
  {
    id: "lead-101",
    companyName: "St. Xavier's Senior Secondary School",
    contactPerson: "Fr. Thomas Mathew",
    phone: "+91 9425512093",
    email: "admin@stxaviersraipur.edu.in",
    gstNumber: "22AAAAA0000A1Z5",
    businessType: "school",
    productList: "1500x Mayank Jumbo Registers, 500x Kangaro Staplers, 200x Whiteboard Marker Sets",
    deliveryDate: "2026-11-01",
    deliveryLocation: "Avanti Vihar, Raipur - 492006",
    specialRequirements: "School logo custom packaging.",
    paymentPreference: "30-Day Purchase Order Billing",
    status: "quoted",
    estimatedValue: 145000,
    internalNotes: "Sample physical paper proof sent. Awaiting purchase order sign-off.",
    createdAt: new Date(Date.now() - 3600 * 1000 * 36).toISOString(),
  },
  {
    id: "lead-102",
    companyName: "Hira Ferro Alloys Ltd (Corporate HQ)",
    contactPerson: "Sunil Agrawal (Procurement Head)",
    phone: "+91 9826194820",
    email: "s.agrawal@hiragroup.com",
    gstNumber: "22AAACH1298P1ZX",
    businessType: "corporate",
    productList: "250x Copier Paper Cartons, 500x Luxor CD Markers, 100x Tape Dispensers",
    deliveryDate: "2026-11-15",
    deliveryLocation: "Urla Industrial Area, Raipur - 493221",
    specialRequirements: "Bulk carton packaging for quarterly store audit.",
    paymentPreference: "Direct RTGS Advance",
    status: "received",
    estimatedValue: 285000,
    internalNotes: "Urgent quote requested. Prepare corporate catalog discount structure.",
    createdAt: new Date(Date.now() - 3600 * 1000 * 8).toISOString(),
  },
];

let supabaseQuotesInitialized = false;

function sanitizeForDb<T>(obj: T): T {
  return JSON.parse(
    JSON.stringify(obj, (k, v) => (v === undefined ? null : v))
  );
}

export const quoteService = {
  getQuotes(): BulkQuoteLead[] {
    if (typeof window === "undefined") {
      return INITIAL_QUOTES;
    }
    try {
      const stored = localStorage.getItem(QUOTES_STORAGE_KEY) || localStorage.getItem("gupta_live_quotes");
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      }
    } catch (e) {
      console.error("Failed to load quotes from storage:", e);
    }
    if (typeof window !== "undefined") {
      try {
        localStorage.setItem(QUOTES_STORAGE_KEY, JSON.stringify(INITIAL_QUOTES));
      } catch (e) {
        console.error("Failed to seed quotes:", e);
      }
    }
    return INITIAL_QUOTES;
  },

  saveQuotes(quotes: BulkQuoteLead[]): void {
    if (typeof window === "undefined") return;
    try {
      localStorage.setItem(QUOTES_STORAGE_KEY, JSON.stringify(quotes));
      window.dispatchEvent(new CustomEvent(QUOTES_EVENT_KEY, { detail: { quotes } }));
    } catch (e) {
      console.error("Failed to save quotes:", e);
    }
  },

  async syncWithSupabase(): Promise<void> {
    if (typeof window === "undefined" || !supabase || supabaseQuotesInitialized) return;
    supabaseQuotesInitialized = true;

    try {
      const { data, error } = await supabase
        .from("quotes")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        console.warn("Supabase quotes fetch note (using local cache):", error.message);
      } else if (data && data.length > 0) {
        const loadedQuotes: BulkQuoteLead[] = data.map((item: any) => {
          if (item.data && typeof item.data === "object") {
            return { ...item.data, id: item.id };
          }
          return item as BulkQuoteLead;
        });
        this.saveQuotes(loadedQuotes);
      } else {
        const currentQuotes = this.getQuotes();
        for (const q of currentQuotes) {
          try {
            await supabase.from("quotes").upsert({
              id: q.id,
              company_name: q.companyName,
              contact_person: q.contactPerson,
              phone: q.phone,
              email: q.email,
              status: q.status,
              estimated_value: q.estimatedValue,
              data: sanitizeForDb(q),
            });
          } catch (seedErr) {
            console.warn("Supabase quote seed notice:", q.id, seedErr);
          }
        }
      }

      // Realtime listener
      supabase
        .channel("public:quotes")
        .on(
          "postgres_changes",
          { event: "*", schema: "public", table: "quotes" },
          (payload: any) => {
            const current = this.getQuotes();
            if (payload.eventType === "INSERT") {
              const newQuote = (payload.new.data || payload.new) as BulkQuoteLead;
              if (!current.some((q) => q.id === newQuote.id)) {
                this.saveQuotes([newQuote, ...current]);
              }
            } else if (payload.eventType === "UPDATE") {
              const updatedQuote = (payload.new.data || payload.new) as BulkQuoteLead;
              const idx = current.findIndex((q) => q.id === updatedQuote.id);
              if (idx > -1) {
                current[idx] = { ...current[idx], ...updatedQuote };
                this.saveQuotes([...current]);
              }
            } else if (payload.eventType === "DELETE") {
              const deletedId = payload.old.id;
              this.saveQuotes(current.filter((q) => q.id !== deletedId));
            }
          }
        )
        .subscribe();
    } catch (e) {
      console.warn("Supabase quotes sync note:", e);
    }
  },

  async syncWithFirestore(): Promise<void> {
    return this.syncWithSupabase();
  },

  createQuoteFromRequest(req: BulkQuoteRequest): BulkQuoteLead {
    const quotes = this.getQuotes();
    const newQuote: BulkQuoteLead = {
      ...req,
      id: `lead-${Date.now()}`,
      status: "received",
      createdAt: new Date().toISOString(),
    };
    const updated = [newQuote, ...quotes];
    this.saveQuotes(updated);

    if (typeof window !== "undefined" && supabase) {
      supabase
        .from("quotes")
        .upsert({
          id: newQuote.id,
          company_name: newQuote.companyName,
          contact_person: newQuote.contactPerson,
          phone: newQuote.phone,
          email: newQuote.email,
          status: newQuote.status,
          data: sanitizeForDb(newQuote),
        })
        .then(({ error }: { error: any }) => {
          if (error) console.warn("Supabase quote create warning:", error.message);
        });
    }

    return newQuote;
  },

  updateQuoteStatus(
    id: string,
    status: BulkQuoteLead["status"],
    estimatedValue?: number,
    internalNotes?: string
  ): BulkQuoteLead | undefined {
    const quotes = this.getQuotes();
    const idx = quotes.findIndex((q) => q.id === id);
    if (idx === -1) return undefined;

    const updated: BulkQuoteLead = {
      ...quotes[idx],
      status,
      ...(estimatedValue !== undefined && { estimatedValue }),
      ...(internalNotes !== undefined && { internalNotes }),
    };

    quotes[idx] = updated;
    this.saveQuotes([...quotes]);

    if (typeof window !== "undefined" && supabase) {
      supabase
        .from("quotes")
        .update({
          status,
          ...(estimatedValue !== undefined && { estimated_value: estimatedValue }),
          data: sanitizeForDb(updated),
        })
        .eq("id", id)
        .then(({ error }: { error: any }) => {
          if (error) console.warn("Supabase quote update warning:", error.message);
        });
    }

    return updated;
  },
};
