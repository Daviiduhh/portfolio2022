import { defineStore } from "pinia";

import router from "../router";

import { useSupabaseStore } from "./supabase";

const supabaseStore = useSupabaseStore();

export const useUserStore = defineStore("user", {
  state: () => ({
    user: {},
    errorDescription: "",
    accessToken: "",
    tokenType: "",
  }),
  getters: {
    activeLinks: (state) =>
      state.links.filter((link) => link.active).sort((a, b) => a.id - b.id),
  },
  actions: {
    async signInWithEmail(e, email, password) {
      e.preventDefault();

      const { data, error } = await supabaseStore.supabase.auth.signInWithPassword({
        email: email,
        password: password,
      });

      if (data) {
        this.errorDescription = "";

        const { access_token: accessToken, token_type: tokenType, user } = data;

        this.user = user;
        this.accessToken = accessToken;
        this.tokenType = tokenType;

        router.push({ path: "/cms" });
      }

      if (error) {
        this.errorDescription = error.message;
      }
    },
  },
});
