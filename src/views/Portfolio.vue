<template>
  <div class="container">
    <Title title="Portfolio" subtitle="Here you can see my projects" />
  </div>
  <div class="portfolio container">
    <CardProject
      v-for="{
        id,
        name,
        technologies,
        website,
        repository,
        image,
        description,
        type,
        category,
      } in projects"
      :key="id"
      :name="name"
      :technologies="technologies"
      :website="website"
      :repository="repository"
      :image="image"
      :description="description"
      :type="type"
      :category="category"
    />
    <div class="portfolio__cta">
      <a
        href="https://github.com/Daviiduhh"
        class="portfolio__cta__see btn--secondary"
        target="_blank"
        rel="noopener noreferrer"
      >
        <fa class="portfolio__cta__see__icon" :icon="['fab', 'github']" />
        See more
      </a>
      <router-link class="portfolio__cta__contact btn" to="/contact">
        Contact me
      </router-link>
    </div>
  </div>
</template>

<script>
import axios from "axios";

import CardProject from "../components/CardProject.vue";
import Title from "../components/Title.vue";

import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://prxtxtkhwnyfszvjugew.supabase.co",
  supabaseKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InByeHR4dGtod255ZnN6dmp1Z2V3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDk5NjE4NDQsImV4cCI6MjAyNTUzNzg0NH0.9lXmeZZSAjtH4Z9Y5IMy2pi6vBFD6Kw9MX5Aej5bFHI",
  supabase = createClient(supabaseUrl, supabaseKey);

export default {
  name: "Home",
  components: {
    CardProject,
    Title,
  },
  data() {
    return {
      projects: [],
    };
  },
  mounted() {
    this.getProjects();
  },
  methods: {
    async getProjects() {
      const { data: projects, error } = await supabase
        .from("projects")
        .select();

      this.projects = projects;
    },
  },
};
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
