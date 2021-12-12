<template>
  <div class="card-project" :style="{background: 'url(' + getImgUrl(img) + ') no-repeat center'}">
    <div class="card-project__details">
        <h3 class="card-project__details__title" v-text="title"></h3>
        <p class="card-project__details__technologies" v-text="technologies"></p>
        <a class="card-project__details__web" :href="web">Repository</a>
        <a class="card-project__details__repository" :href="repository">Demo</a>
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
  height: 500px;
  background-size: cover  !important;
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;

    &__details {
        background-color: #D9D9D9;
        width: 100%;
        border-radius: 0 0 9px 9px;
    }
}
</style>