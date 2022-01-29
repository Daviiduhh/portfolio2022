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
        <a
          class="card-project__header__links__link"
          :href="web"
          target="_blank"
          rel="noopener noreferrer"
          title="View website"
        >
          <fa
            class="card-project__header__links__link__icon"
            icon="globe-americas"
          />
        </a>
        <a
          class="card-project__header__links__link"
          :href="repository"
          target="_blank"
          rel="noopener noreferrer"
          title="View repository"
        >
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
      target="_blank"
      rel="noopener noreferrer"
      :style="'background: url(' + getImgUrl(img) + ');'"
      title="View website"
    >
    </a>
    <div class="card-project__desc">
      <p class="card-project__desc__text" v-text="description"></p>
    </div>
    <div class="card-project__details">
      <div class="card-project__details__group">
        <h3 class="card-project__details__group__title">Type</h3>
        <p class="card-project__details__group__text" v-text="type"></p>
      </div>
      <div class="card-project__details__group">
        <h3 class="card-project__details__group__title">Category</h3>
        <p class="card-project__details__group__text" v-text="category"></p>
      </div>
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
    description: String,
    type: String,
    category: String
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
  gap: 25px;

  //Shadow
  box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.25);
-webkit-box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.25);
-moz-box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.25);

  &__header {
    width: 90%;
    margin: 0 auto;
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
        font-size: 16px;
        font-weight: 300;
      }
    }

    &__links {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 15px;

      &__link {
        color: #211d1c;
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
    margin: 0 auto;

    background-repeat: no-repeat !important;
    background-size: cover !important;
    background-position: center center !important;
  }

  &__desc {
    width: 90%;
    margin: 0 auto;

    &__text {
      font-weight: 300;
      font-size: 16px;
      text-align: left;
      margin: 0;
    }
  }

  &__details {
    width: 90%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    text-align: left;
    gap: 30px;

    &__group {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-start;
      gap: 10px;

      &__title,
      &__text {
        margin: 0;
      }

      &__title {
        font-weight: 500;
      }

      &__text {
        font-weight: 300;
      }
    }
  }
}

@media (min-width: 1024px) {
  .card-project {
    &__header {
      &__info {
        &__title {
          font-size: 26px;
        }
        &__technologies {
          font-size: 20px;
        }
      }

      &__links {
        &__link {
          &__icon {
            font-size: 40px;
          }
        }
      }
    }

    &__desc {
      &__text {
        font-size: 18px;
      }
    }
  }
}
</style>