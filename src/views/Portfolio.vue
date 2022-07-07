<template>
  <div class="container">
    <Title title="Portfolio" subtitle="Here you can see my projects" />
  </div>
  <div class="portfolio container">
    <CardProject v-for="(p, index) in projects" :key="index" :title="p.title" :technologies="p.technologies"
      :web="p.web" :repository="p.repository" :img="p.img" :description="p.description" :type="p.type"
      :category="p.category" />
    <div class="portfolio__cta">
      <a href="https://github.com/Daviiduhh" class="portfolio__cta__see btn--secondary" target="_blank"
        rel="noopener noreferrer">
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
import axios from "axios"

import CardProject from "../components/CardProject.vue";
import Title from "../components/Title.vue";

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
    this.getProjects()
  },
  methods: {
    getProjects() {
      axios.get("/projects.json")
        .then(response => {
          this.projects = response.data.projects
        })
        .catch((e) => console.log(e));
    }
  }
};
</script>

<style lang="scss">
.portfolio {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 30px;

  &__cta {
    margin-top: 10px;
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
