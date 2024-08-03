import { defineStore } from "pinia";
import { createClient } from "@supabase/supabase-js";

// You can name the return value of `defineStore()` anything you want,
// but it's best to use the name of the store and surround it with `use`
// and `Store` (e.g. `useUserStore`, `useCartStore`, `useProductStore`)
// the first argument is a unique id of the store across your application
export const useLinksStore = defineStore("links", {
  state: () => ({
    links: [],
  }),
  getters: {
    activeLinks: (state) =>
      state.links.filter((link) => link.active).sort((a, b) => a.id - b.id),
  },
  actions: {
    async fetch() {
      const supabaseUrl = "https://prxtxtkhwnyfszvjugew.supabase.co",
        supabaseKey =
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InByeHR4dGtod255ZnN6dmp1Z2V3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDk5NjE4NDQsImV4cCI6MjAyNTUzNzg0NH0.9lXmeZZSAjtH4Z9Y5IMy2pi6vBFD6Kw9MX5Aej5bFHI",
        supabase = createClient(supabaseUrl, supabaseKey);

      const { data, error } = await supabase.from("links").select();

      this.links = data;
    },
  },
});
