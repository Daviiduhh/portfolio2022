<template>
  <div class="card-project">
    <div class="card-project__header">
      <div class="card-project__header__info">
        <h2 class="card-project__header__info__title" v-text="title"></h2>
        <p
          class="card-project__header__info__technologies"
          v-text="technologies"
        ></p>
      </div>
      <div class="card-project__header__links">
        <a class="card-project__header__links__link" :href="web" target="_blank" rel="noopener noreferrer">
          <fa class="card-project__header__links__link__icon" icon="eye" />
        </a>
        <a class="card-project__header__links__link" :href="repository" target="_blank" rel="noopener noreferrer">
          <fa
            class="card-project__header__links__link__icon"
            :icon="['fab', 'github']"
          />
        </a>
      </div>
    </div>
    <a
      class="card-project__img"
      :href="web"
      target="_blank" rel="noopener noreferrer"
      :style="'background: url(' + getImgUrl(img) + ');'"
    >
    </a>
    <div class="card-project__details">
      <p class="card-project__details__text" v-text="description"></p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    img: String,
    technologies: String,
    repository: String,
    web: String,
    description: String
  },
  data() {
    return {};
  },
  methods: {
    getImgUrl(image) {
      var images = require.context("../assets/projects_imgs", false, /\.png$/);
      return images("./" + image);
    },
  },
};
</script>

<style lang="scss">
.card-project {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: #ffffff;
  border-radius: 10px;
  padding: 20px 0;

  box-shadow: 1px 2px 16px 1px rgba(#211D1C, 0.54);
  -webkit-box-shadow: 1px 2px 16px 1px rgba(#211D1C, 0.54);
  -moz-box-shadow: 1px 2px 16px 1px rgba(#211D1C, 0.54);

  &__header {
    width: 90%;
    margin: 5px auto 15px auto;
    display: flex;
    justify-content: space-between;

    &__info {
      text-align: left;

      &__title {
        margin: 0;
      }

      &__technologies {
        margin: 0;
        margin-top: 1px;
        font-size: 14px;
        font-weight: 300;
      }
    }

    &__links {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 15px;

      &__link {
        color: #211D1C;
        transition: color 0.5s;

        &:hover {
          color: #04aa6d;
        }

        &:active {
          transform: scale(0.9);
        }

        &__icon {
          font-size: 30px;
        }
      }
    }
  }

  &__img {
    width: 90%;
    aspect-ratio: 16 / 9;
    border-radius: 5px;
    margin: 10px auto 15px auto;

    background-repeat: no-repeat !important;
    background-size: cover !important;
    background-position: center center !important;
  }

  &__details {
    width: 90%;
    margin: 10px auto 15px auto;

    &__text {
      font-weight: 300;
      font-size: 14px;
      text-align: left;
      margin: 0;
    }
  }

  &__seemore {
    width: 90%;
    margin: 10px auto 0 auto;

    &__button {
      cursor: pointer;
      width: 100%;
      padding: 10px 0;
      border-radius: 10px;
      border: none;
      background-color: #211D1C;
      color: #ffffff;

      font-family: Avenir, Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      font-weight: 600;
      text-align: center;
    }
  }
}
</style>