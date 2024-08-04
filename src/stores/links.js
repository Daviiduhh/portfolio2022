import { defineStore } from "pinia";
import { createClient } from "@supabase/supabase-js";

import { useSupabaseStore } from "./supabase";

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
      const supabaseStore = useSupabaseStore();

      const { data, error } = await supabaseStore.supabase
        .from("links")
        .select();

      this.links = data;
    },
  },
});
