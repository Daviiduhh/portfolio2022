<template>
    <div class="container">
        <Title :title="pageContent.title" :subtitle="pageContent.subtitle" />
    </div>
    <div class="container tables">
        <p v-for="{ id, name, selector } in tables" :key="id" :id="selector" v-text="name"></p>
    </div>
</template>
  
<script setup>
import Title from "../components/Title.vue";

import { ref, onMounted } from "vue";

import { useSupabaseStore } from "../stores/supabase";

const supabaseStore = useSupabaseStore();

const pageContent = ref({}),
    tables = ref([]);

const getPageContent = async () => {
    const { data: pages, error } = await supabaseStore.supabase
        .from("pages")
        .select()
        .eq("id", "cms");

    pageContent.value = pages.at(0);
}

const getTables = async () => {
    const { data, error } = await supabaseStore.supabase
        .from("tables")
        .select();

    tables.value = data;
}

onMounted(() => {
    getPageContent()
    getTables()
});
</script>
  
<style lang="scss">
.tables {
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
    }
}

@media (min-width: 1024px) {}
</style>
  