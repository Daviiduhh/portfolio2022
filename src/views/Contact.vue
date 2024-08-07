<template>
  <div class="container">
    <Title title="Contact" subtitle="I'd love to work with you" />
  </div>
  <div class="contact container">
    <a v-for="link in linksStore.activeLinks" class="contact__link" :href="link.link" target="_blank"
      rel="noopener noreferrer" :key="link.id">
      <font-awesome-icon class="contact__link__icon" :icon="link.icon.split('-')" />
      <h4 v-text="link.name" class="contact__link__name"></h4>
    </a>
  </div>
</template>

<script setup>
import { onMounted } from "vue";

import Title from "../components/Title.vue";
import { useLinksStore } from '../stores/links'

const linksStore = useLinksStore()

onMounted(() => {
  linksStore.fetch()
});
</script>

<style lang="scss">
.contact {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: 2rem;
  padding: 20px 0;

  &__link {
    color: #211d1c;
    text-decoration: none;
    transition: color 0.5s;
    margin-left: 20px;

    &:hover {
      color: #04aa6d;
    }

    &__icon {
      font-size: 4rem;
    }

    &__name {
      display: inline-block;
      margin: 0;
      margin-left: 20px;
    }
  }
}

@media (min-width: 1024px) {
  .contact {
    padding: 150px;
    flex-direction: row;

    &__link {
      display: flex;
      flex-direction: column;
      gap: 10px;
      margin-left: 0;

      &__name {
        margin: 0;
      }

      &:active {
        transform: scale(0.9);
      }
    }
  }
}
</style>