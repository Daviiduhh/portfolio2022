<template>
  <div class="container">
    <Title :title="pageContent.title" :subtitle="pageContent.subtitle" />
  </div>
  <div class="portfolio container">
    <CardProject v-for="{
      id,
      name,
      technologies,
      website,
      repository,
      image,
      description,
      type,
      category,
    } in projects" :key="id" :name="name" :technologies="technologies" :website="website" :repository="repository"
      :image="image" :description="description" :type="type" :category="category" />
    <div class="portfolio__cta">
      <a href="https://github.com/Daviiduhh" class="portfolio__cta__see btn--secondary" target="_blank"
        rel="noopener noreferrer">
        <font-awesome-icon class="portfolio__cta__see__icon" :icon="['fab', 'github']" />
        See more
      </a>
      <router-link class="portfolio__cta__contact btn" to="/contact">
        Contact me
      </router-link>
    </div>
  </div>
</template>

<script setup>
import CardProject from "../components/CardProject.vue";
import Title from "../components/Title.vue";

import { ref, onMounted } from "vue";

import { useSupabaseStore } from "../stores/supabase";

const projects = ref([]),
  pageContent = ref({});

const supabaseStore = useSupabaseStore();

const getProjects = async () => {
  const { data, error } = await supabaseStore.supabase
    .from("projects")
    .select();

  projects.value = data;
}
const getPageContent = async () => {
  const { data: pages, error } = await supabaseStore.supabase
    .from("pages")
    .select()
    .eq("id", "portfolio");

  pageContent.value = pages.at(0);
}

onMounted(() => {
  getProjects();
  getPageContent()
});
</script>

<style lang="scss">
.portfolio {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 30px;

  &__cta {
    margin-top: 10px;
    margin-bottom: 60px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 20px;

    &__contact,
    &__see {
      width: 100%;
    }
  }
}

@media (min-width: 1024px) {
  .portfolio {
    grid-template-columns: repeat(2, 1fr);

    &__cta {
      grid-column: 1 / 3;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      gap: 30px;

      &__contact,
      &__see {
        width: 50%;
      }
    }
  }
}
</style>
