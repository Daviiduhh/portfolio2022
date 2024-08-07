<template>
    <div class="container">
        <Title :title="pageContent.title" :subtitle="pageContent.subtitle" />
    </div>
    <div class="container tables">
        <TableListItem v-for="{ id, name, selector } in tables" :key="id" :selector="selector" :name="name"
            @click="loadTable(selector)" />
    </div>
    <div class="container">
        <v-data-table :headers="headers" :items="tableData" item-key="id" :loading="loading"
            class="elevation-15"></v-data-table>
    </div>
</template>
  
<script setup>
import Title from "../components/Title.vue";
import TableListItem from "../components/TableListItem.vue";

import { ref, computed, onMounted } from "vue";

import { useSupabaseStore } from "../stores/supabase";

const supabaseStore = useSupabaseStore();

const pageContent = ref({}),
    tables = ref([]),
    tableData = ref([]),
    tableFields = ref([]),
    loading = ref(false);

const headers = computed(() => {
    return tableFields.value.map(({ name, field }) => {
        return {
            title: name,
            align: "start",
            sortable: true,
            key: field
        }
    })
})

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

const loadTable = async (table) => {
    getTableData(table)
    getTableFields(table)

    loading.value = true
}

const getTableData = async (table) => {
    const { data, error } = await supabaseStore.supabase
        .from(table)
        .select();

    tableData.value = data;

    loading.value = false
}

const getTableFields = async (table) => {
    const { data, error } = await supabaseStore.supabase
        .from("tablesFields")
        .select()
        .eq('table', table)
        .eq('active', true)
        .order('index', { ascending: true });

    tableFields.value = data;
}

onMounted(() => {
    getPageContent()
    getTables()
});
</script>
  
<style lang="scss">
.tables {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

@media (min-width: 1024px) {}
</style>
  