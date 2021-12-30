<template>
  <h1 class="portfolio__title">Portfolio</h1>
  <div class="portfolio container">
    <CardProject
      v-for="(p, index) in projects"
      :key="index"
      :title="p.title"
      :technologies="p.technologies"
      :web="p.web"
      :repository="p.repository"
      :img="p.img"
    />
    <div class="portfolio__cta">
      <router-link class="portfolio__cta__contact btn" to="/contact">
        Contact me
      </router-link>
      <a
        href="https://github.com/Daviiduhh"
        class="portfolio__cta__see btn--secondary"
        target="_blank"
        rel="noopener noreferrer"
      >
        <fa class="portfolio__cta__see__icon" :icon="['fab', 'github']" />
        See more
      </a>
    </div>
  </div>
</template>

<script>
import CardProject from "../components/CardProject.vue";

export default {
  name: "Home",
  components: {
    CardProject,
  },
  data() {
    return {
      projects: {
        p0: {
          title: "Coin Market",
          img: "project0.png",
          technologies: "Vue, Bootstrap, CSS",
          description: "Coin Market list the criptocurrency market cap, it shows 20 cryptos with the logo, name, short-name, value and value change. The data es from the GekoCoin API",
          repository: "https://github.com/Daviiduhh/mercado-de-monedas",
          web: "https://mercadodemonedas.netlify.app/",
        },
        p1: {
          title: "dogAPI",
          img: "project1.png",
          technologies: "Vue, Bootstrap, CSS",
          description: "",
          repository: "https://github.com/Daviiduhh/dogapi-vue",
          web: "https://perritos-vue.netlify.app/",
        },
        p2: {
          title: "APOTD",
          img: "project2.png",
          technologies: "Vue, Bootstrap, CSS",
          description: "",
          repository:
            "https://github.com/Daviiduhh/astronomy-img-of-the-day.git",
          web: "https://astronomyimgoftheday.netlify.app/",
        },
        p3: {
          title: "Hair Salon",
          img: "project3.png",
          technologies: "SASS, JavaScript, HTML",
          description: "",
          repository: "https://github.com/Daviiduhh/appBarberia",
          web: "https://appbarberiadaviiduhh.netlify.app/",
        },
        p4: {
          title: "Festival",
          img: "project4.png",
          technologies: "SASS, JavaScript, HTML",
          description: "",
          repository: "https://github.com/Daviiduhh/rockEdmFestival",
          web: "https://daviiduhhfestival.netlify.app/",
        },
        p5: {
          title: "Blog el buen café",
          img: "project5.png",
          technologies: "CSS, HTML, JavaScript",
          description: "",
          repository: "https://github.com/Daviiduhh/blogElBuenCafe",
          web: "https://blogelbuencafe.netlify.app/",
        },
      },
    };
  },
};
</script>

<style lang="scss">
.portfolio {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 20px;

  &__cta {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
  }
}

@media (min-width: 1024px) {
  .portfolio {
    padding: 20px 50px;
    &__cta {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      gap: 20px;

      &__contact,
      &__see {
        width: 50%;
      }
    }
  }
}
</style>
