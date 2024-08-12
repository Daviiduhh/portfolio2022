<template>
  <div class="card-project">
    <div class="card-project__header">
      <div class="card-project__header__info">
        <h2 class="card-project__header__info__name" v-text="name"></h2>
        <div class="card-project__header__info__technologies">
          <v-chip v-for="tech in technologies" color="#04aa6d" density="compact">
            {{ tech }}
          </v-chip>
        </div>
      </div>
      <div class="card-project__header__links">
        <a class="card-project__header__links__link" :href="website" target="_blank" rel="noopener noreferrer"
          name="View websitesite">
          <font-awesome-icon class="card-project__header__links__link__icon" icon="globe-americas" />
        </a>
        <a class="card-project__header__links__link" :href="repository" target="_blank" rel="noopener noreferrer"
          name="View repository">
          <font-awesome-icon class="card-project__header__links__link__icon" :icon="['fab', 'github']" />
        </a>
      </div>
    </div>
    <a class="card-project__image" :href="website" target="_blank" rel="noopener noreferrer"
      :style="'background: url(' + image + ');'" name="View websitesite">
    </a>
    <div class="card-project__desc">
      <p class="card-project__desc__text" v-text="description"></p>
    </div>
    <div class="card-project__details">
      <div class="card-project__details__group">
        <h3 class="card-project__details__group__name">Type</h3>
        <p class="card-project__details__group__text" v-text="type"></p>
      </div>
      <div class="card-project__details__group">
        <h3 class="card-project__details__group__name">Category</h3>
        <p class="card-project__details__group__text" v-text="category"></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    image: String,
    technologies: Array,
    repository: String,
    website: String,
    description: String,
    type: String,
    category: String,
  },
  data() {
    return {};
  },
  methods: {},
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
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.25);
  -websitekit-box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.25);
  -moz-box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.25);

  &__header {
    width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;

    &__info {
      text-align: left;

      &__name {
        margin: 0;
        font-size: 2.5rem;
      }

      &__technologies {
        display: flex;
        column-gap: 0.5rem;
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

  &__image {
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
      font-size: 1.6rem;
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
      gap: 5px;

      &__name,
      &__text {
        margin: 0;
      }

      &__name {
        font-weight: 600;
        font-size: 1.3rem;
      }

      &__text {
        font-weight: 300;
        font-size: 1.2rem;
        color: #646464;
      }
    }
  }
}

@media (min-width: 1024px) {
  .card-project {
    &__header {
      &__info {
        &__name {
          font-size: 2.7rem;
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
        font-size: 1.8rem;
      }
    }

    &__details {
    &__group {

      &__name {
        font-size: 1.5rem;
      }

      &__text {
        font-size: 1.4rem;
      }
    }
  }
  }
}
</style>
