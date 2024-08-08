<template>
    <div class="container">
        <Title :title="pageContent.title" :subtitle="pageContent.subtitle" />
    </div>
    <div class="container login">
        <form class="login__form">
            <div class="login__form__item">
                <label for="email" class="login__form__label">Email</label>
                <input v-model="email" type="email" class="login__form__input">
            </div>
            <div class="login__form__item">
                <label for="password" class="login__form__label">Password</label>
                <input v-model="password" type="password" class="login__form__input">
            </div>
            <div class="login__form__item">
                <button @click="(e) => userStore.signInWithEmail(e, email, password)" class="btn">
                    Login
                </button>
            </div>
        </form>

        <p v-text="userStore.errorDescription"></p>
    </div>
</template>
  
<script setup>
import Title from "../components/Title.vue";

import { ref, onMounted } from "vue";

import { useSupabaseStore } from "../stores/supabase";
import { useUserStore } from "../stores/user";

const supabaseStore = useSupabaseStore();
const userStore = useUserStore();

const email = ref(""),
    password = ref(""),
    pageContent = ref({});

const getPageContent = async () => {
    const { data: pages, error } = await supabaseStore.supabase
        .from("pages")
        .select()
        .eq("id", "login");

    pageContent.value = pages.at(0);
}

onMounted(() => {
    getPageContent()
});
</script>
  
<style lang="scss">
.login {
    display: grid;
    grid-template-columns: repeat(3, 1fr);

    &__form {
        display: flex;
        flex-direction: column;
        gap: 1rem;

        &__item {
            display: flex;
            flex-direction: column;
            align-items: start;
            justify-content: center;
            gap: 0.5rem;
        }

        &__input {
            padding: 1rem 0.5rem;
            background-color: transparent;
            border-radius: 5px;
            border: 1px solid #211d1c;
            width: 100%;
            
            &:focus-visible {
                outline: 2px solid #04aa6d;
            }
        }
    }
}

@media (min-width: 1024px) {}
</style>
  