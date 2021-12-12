<template>
  <div class="home">
    <CardProject 
      v-for="(p, index) in projects" 
      :key="index"
      :title="p.title"
      :technologies="p.technologies"
      :web="p.web"
      :repository="p.repository"
      :img="p.img"
    />
  </div>
</template>

<script>
import CardProject from '../components/CardProject.vue'

export default {
  name: "Home",
  components: {
    CardProject
  },
  data() {
    return {
      projects: {
        p0: {
          title: "Mercado de monedas",
          img: "project0.png",
          technologies: "Vue, Bootstrap, CSS",
          repository: "https://github.com/Daviiduhh/mercado-de-monedas",
          web: "https://mercadodemonedas.netlify.app/",
        },
        p1: {
          title: "dogAPI",
          img: "project1.png",
          technologies: "Vue, Bootstrap, CSS",
          repository: "https://github.com/Daviiduhh/dogapi-vue",
          web: "https://perritos-vue.netlify.app/",
        },
        p2: {
          title: "Astronomy img of the day",
          img: "project2.png",
          technologies: "Vue, Bootstrap, CSS",
          repository:
            "https://github.com/Daviiduhh/astronomy-img-of-the-day.git",
          web: "https://astronomyimgoftheday.netlify.app/",
        },
        p3: {
          title: "Hair Salon",
          img: "project3.png",
          technologies: "SASS, JavaScript, HTML",
          repository: "https://github.com/Daviiduhh/appBarberia",
          web: "https://appbarberiadaviiduhh.netlify.app/",
        },
        p4: {
          title: "Festival",
          img: "project4.png",
          technologies: "SASS, JavaScript, HTML",
          repository: "https://github.com/Daviiduhh/rockEdmFestival",
          web: "https://daviiduhhfestival.netlify.app/",
        },
        p5: {
          title: "Blog el buen café",
          img: "project5.png",
          technologies: "CSS, HTML, JavaScript",
          repository: "https://github.com/Daviiduhh/blogElBuenCafe",
          web: "https://blogelbuencafe.netlify.app/",
        },
      },
    };
  },
};
</script>

<style lang="scss">
  .home {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 20px;
  }
</style>
