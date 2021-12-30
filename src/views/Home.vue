<template>
  <div class="home container">
    <div class="home__about">
      <h1 class="home__about__title">Hi, I'm David <br/> Madrid Nápoles</h1>
      <h2 class="home__about__subtitle">Frontend web developer</h2>
      <h4 class="home__about__desc">
        I have experience crafting solid and scalable frontend products with great user experience.
      </h4>
      <div class="home__about__btns">
        <router-link class="home__btns__btn btn" to="/portfolio">
          Portfolio
        </router-link>
        <button
          class="home__btns__btn--secondary btn--secondary"
        >
          Download CV
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.home {
  text-align: left;
  padding: 150px 0;

  &__about {
    &__title {
      margin: 0;
      color: #211d1c;
      font-size: 40px;
      font-weight: 900;
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

</style>