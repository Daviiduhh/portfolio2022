<template>
  <div class="container">
    <Title :title="pageContent.title" :subtitle="pageContent.subtitle" />
  </div>
  <div class="about container">
    <div class="about__me">
      <p class="about__me__text" v-html="pageContent.content">
      </p>
    </div>
    <div class="about__skills">
      <h2 class="about__skills__title">Technologies I use to work</h2>
      <div class="about__skills__skill vue">
        <font-awesome-icon class="about__skills__skill__icon" :icon="['fab', 'vuejs']" />
        <p class="about__skills__skill__name">Vue</p>
      </div>
      <div class="about__skills__skill js">
        <font-awesome-icon class="about__skills__skill__icon" :icon="['fab', 'js']" />
        <p class="about__skills__skill__name">JavaScript</p>
      </div>
      <div class="about__skills__skill git">
        <font-awesome-icon class="about__skills__skill__icon" :icon="['fab', 'git-alt']" />
        <p class="about__skills__skill__name">Git</p>
      </div>
      <div class="about__skills__skill html">
        <font-awesome-icon class="about__skills__skill__icon" :icon="['fab', 'html5']" />
        <p class="about__skills__skill__name">HTML</p>
      </div>
      <div class="about__skills__skill css">
        <font-awesome-icon class="about__skills__skill__icon" :icon="['fab', 'css3']" />
        <p class="about__skills__skill__name">CSS</p>
      </div>
      <div class="about__skills__skill bootstrap">
        <font-awesome-icon class="about__skills__skill__icon" :icon="['fab', 'bootstrap']" />
        <p class="about__skills__skill__name">Bootstrap</p>
      </div>
      <div class="about__skills__skill npm">
        <font-awesome-icon class="about__skills__skill__icon" :icon="['fab', 'npm']" />
        <p class="about__skills__skill__name">npm</p>
      </div>
      <div class="about__skills__skill sass">
        <font-awesome-icon class="about__skills__skill__icon" :icon="['fab', 'sass']" />
        <p class="about__skills__skill__name">SASS</p>
      </div>
      <div class="about__skills__skill gulp">
        <font-awesome-icon class="about__skills__skill__icon" :icon="['fab', 'gulp']" />
        <p class="about__skills__skill__name">Gulp</p>
      </div>
      <div class="about__skills__skill terminal">
        <font-awesome-icon class="about__skills__skill__icon" icon="terminal" />
        <p class="about__skills__skill__name">Terminal</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import Title from "../components/Title.vue";

import { ref, onMounted } from "vue";

import { useSupabaseStore } from "../stores/supabase";

const supabaseStore = useSupabaseStore();

const pageContent = ref({});

const getPageContent = async () => {
  const { data: pages, error } = await supabaseStore.supabase
    .from("pages")
    .select()
    .eq("id", "about");

  pageContent.value = pages.at(0);

  pageContent.value.content = pageContent.value.content.replaceAll("\r\n\r\n", "<br><br>")
}

onMounted(() => {
  getPageContent()
});
</script>

<style lang="scss">
.about {
  display: flex;
  flex-direction: column;
  row-gap: 4rem;

  &__me {

    &__text {
      max-width: 60ch;
      margin-top: 0;
      margin-bottom: 20px;
      text-align: left;
      font-size: 1.6rem;
    }
  }

  &__skills {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;

    &__title {
      grid-column: 1 / 5;
      text-align: center;
      margin: 0;
      margin-bottom: 40px;
    }

    &__skill {
      text-align: center;
      color: #211d1c;
      transition: color 0.3s;
      cursor: pointer;

      &:active {
        transform: scale(0.9);
      }

      &__icon {
        font-size: 5rem;
      }
    }
  }
}

@media (min-width: 1024px) {
  .about {
    flex-direction: row;
    justify-content: space-between;
    column-gap: 1rem;
  }
}

.vue {
  &:hover {
    color: #3fb984;
  }
}

.js {
  &:hover {
    color: #fcdc00;
  }
}

.git {
  &:hover {
    color: #f1481c;
  }
}

.html {
  &:hover {
    color: #e34c26;
  }
}

.css {
  &:hover {
    color: #00ace4;
  }
}

.bootstrap {
  &:hover {
    color: #7111f5;
  }
}

.npm {
  &:hover {
    color: #cc3534;
  }
}

.sass {
  &:hover {
    color: #c56394;
  }
}

.gulp {
  &:hover {
    color: #eb4a4b;
  }
}

.terminal {
  &:hover {
    color: #04aa6d;
  }
}
</style>