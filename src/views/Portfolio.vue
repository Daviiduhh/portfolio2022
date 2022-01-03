<template>
  <div class="portfolio container">
    <Title title="Portfolio" subtitle="Here you can see my projects" />
    <CardProject
      v-for="(p, index) in projects"
      :key="index"
      :title="p.title"
      :technologies="p.technologies"
      :web="p.web"
      :repository="p.repository"
      :img="p.img"
      :description="p.description"
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
      projects: {
        p0: {
          title: "Coin Market",
          img: "project0.png",
          technologies: "Vue, Bootstrap, CSS",
          description:
            "Coin Market list the criptocurrency market cap, it shows 20 cryptos with the logo, name, short-name, value and value change. The data is obtained from the GekoCoin API. The styles are made with bootstrap and CSS.",
          repository: "https://github.com/Daviiduhh/mercado-de-monedas",
          web: "https://mercadodemonedas.netlify.app/",
        },
        p1: {
          title: "dogAPI",
          img: "project1.png",
          technologies: "Vue, Bootstrap, CSS",
          description: "This page shows you dogs images served from the internet's biggest collection of open source dog pictures: dogAPI. The page also shows you how many dogs you have seen.",
          repository: "https://github.com/Daviiduhh/dogapi-vue",
          web: "https://perritos-vue.netlify.app/",
        },
        p2: {
          title: "APOTD",
          img: "project2.png",
          technologies: "Vue, Bootstrap, CSS",
          description: "This page use a NASA API that shows an astronomical image everyday, the image comes with a description and the date.",
          repository:
            "https://github.com/Daviiduhh/astronomy-img-of-the-day.git",
          web: "https://astronomyimgoftheday.netlify.app/",
        },
        p3: {
          title: "Hair Salon",
          img: "project3.png",
          technologies: "SASS, JavaScript, HTML",
          description: "Frontend page to book a session on a hair salon. You can choose different services, a date and an hour. Then the page will show you a resume of your order",
          repository: "https://github.com/Daviiduhh/appBarberia",
          web: "https://appbarberiadaviiduhh.netlify.app/",
        },
        p4: {
          title: "Festival",
          img: "project4.png",
          technologies: "SASS, JavaScript, HTML",
          description: "This is a page about a Rock & EDM festival! You can see the line up, a little gallery with zoom clicking on the images, and the prices of the tickets",
          repository: "https://github.com/Daviiduhh/rockEdmFestival",
          web: "https://daviiduhhfestival.netlify.app/",
        },
        p5: {
          title: "Blog el buen café",
          img: "project5.png",
          technologies: "CSS, HTML, JavaScript",
          description: "This page is a blog about coffee, where you can find articles, workshops, articles, a contact page and a about page.",
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
    padding: 20px 50px;
    &__cta {
      display: flex;
      flex-direction: row;
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
