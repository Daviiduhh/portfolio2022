<template>
  <div class="home container">
    <div class="home__about">
      <h1 class="home__about__title">Hi, I'm David Madrid</h1>
      <h2 class="home__about__subtitle">Frontend web developer</h2>
      <h4 class="home__about__desc">
        I have experience crafting solid and scalable frontend products with
        great user experience.
      </h4>
      <div class="home__about__btns">
        <router-link class="home__btns__btn btn" to="/portfolio">
          Portfolio
        </router-link>
        <a
          :href="`${publicPath}DavidMadrid_Frontend_CV.pdf`"
          download="DavidMadrid_Frontend_CV"
          class="home__btns__btn--secondary btn--secondary"
        >
          Download CV
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      publicPath: process.env.BASE_URL,
    };
  },
};
</script>

<style lang="scss">
.home {
  text-align: left;
  padding: 150px 0;

  &__about {
    &__title {
      margin: 0;
      color: #211d1c;
      font-size: 35px;
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
      justify-content: flex-start;
      align-items: center;
      gap: 15px;
      margin-bottom: 50px;
    }
  }
}

@keyframes typing {
  from {
    width: 0
  }
}
    
@keyframes blink {
  50% {
    border-color: transparent
  }
}
</style>