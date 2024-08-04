import { defineStore } from "pinia";
import { createClient } from "@supabase/supabase-js";

export const useSupabaseStore = defineStore("supabase", {
  state: () => ({
    supabase: null,
  }),
  actions: {
    startSupabaseClient() {
      const supabaseUrl = import.meta.env.VITE_SUPABASE_URL,
        supabaseKey = import.meta.env.VITE_SUPABASE_KEY;

      this.supabase = createClient(supabaseUrl, supabaseKey);
    },
  },
});
