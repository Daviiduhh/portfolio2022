<template>
  <div class="home container">
    <div class="home__about">
      <h1 class="home__about__title" v-text="pageContent.title"></h1>
      <h2 class="home__about__subtitle" v-text="pageContent.subtitle"></h2>
      <h4 class="home__about__desc" v-text="pageContent.content"></h4>
      <div class="home__about__btns">
        <router-link
          class="home__btns__btn btn"
          to="/portfolio"
          title="Go to portfolio"
        >
          Portfolio
        </router-link>
        <a
          :href="pageContent.buttonLink"
          download="DavidMadrid_Frontend_CV"
          class="home__btns__btn--secondary btn--secondary"
          title="Download CV"
          target="_blank"
        >
          Download CV
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { createClient } from "@supabase/supabase-js";
import { ref, onMounted } from "vue";

const supabaseUrl = "https://prxtxtkhwnyfszvjugew.supabase.co",
  supabaseKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InByeHR4dGtod255ZnN6dmp1Z2V3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDk5NjE4NDQsImV4cCI6MjAyNTUzNzg0NH0.9lXmeZZSAjtH4Z9Y5IMy2pi6vBFD6Kw9MX5Aej5bFHI",
  supabase = createClient(supabaseUrl, supabaseKey);

const pageContent = ref({});

const getCvUrl = async () => {
  const { data: pages, error } = await supabase
    .from("pages")
    .select()
    .eq("id", "home");

  pageContent.value = pages.at(0);
};

onMounted(() => {
  getCvUrl();
});
</script>

<style lang="scss">
.home {
  text-align: left;
  padding: 150px 0;

  &__about {
    &__title {
      margin: 0;
      color: #211d1c;
      font-size: 30px;
      font-weight: 900;

      width: 17ch;
      animation: typing 2.5s steps(17), blink 0.5s step-end infinite alternate;
      white-space: nowrap;
      overflow: hidden;
      border-right: 3px solid #04aa6d;
    }

    &__subtitle {
      margin: 0;
      margin-bottom: 20px;
      font-weight: 300;
    }

    &__desc {
      margin: 0;
      font-weight: 300;
      font-size: 18px;
      margin-bottom: 30px;

      width: 90%;
    }

    &__btns {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      gap: 15px;
    }
  }
}

@keyframes typing {
  from {
    width: 0;
  }
}

@keyframes blink {
  50% {
    border-color: transparent;
  }
}

@media (min-width: 450px) {
  .home__about__title {
    font-size: 35px;
  }
}
@media (min-width: 768px) {
  .home__about {
    &__title {
      font-size: 40px;
    }

    &__btns {
      width: 60%;
      flex-direction: row;
    }
  }
}
@media (min-width: 900px) {
  .home__about__btns {
    width: 50%;
    flex-direction: row;
  }
}
@media (min-width: 1200px) {
  .home__about__btns {
    width: 40%;
    flex-direction: row;
  }
}
</style>
