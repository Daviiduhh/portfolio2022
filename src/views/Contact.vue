<template>
  <div class="container">
    <Title title="Contact" subtitle="I'd love to work with you" />
  </div>
  <div class="contact container">
    <a
      class="contact__link"
      href="https://www.linkedin.com/in/daviiduhh/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <fa class="contact__link__icon" :icon="['fab', 'linkedin']" />
      <h4 class="contact__link__name">LinkedIn</h4>
    </a>
    <a
      class="contact__link"
      href="mailto: daviiduhhs@gmail.com"
      target="_blank"
      rel="noopener noreferrer"
    >
      <fa class="contact__link__icon" icon="envelope" />
      <h4 class="contact__link__name">Email</h4>
    </a>
    <a
      class="contact__link"
      href="https://github.com/Daviiduhh"
      target="_blank"
      rel="noopener noreferrer"
    >
      <fa class="contact__link__icon" :icon="['fab', 'github']" />
      <h4 class="contact__link__name">Github</h4>
    </a>
    <a
      class="contact__link"
      href="https://gitlab.com/Daviiduhh"
      target="_blank"
      rel="noopener noreferrer"
    >
      <fa class="contact__link__icon" :icon="['fab', 'gitlab']" />
      <h4 class="contact__link__name">Gitlab</h4>
    </a>
    <a
      class="contact__link"
      href="https://twitter.com/Daviiduhh"
      target="_blank"
      rel="noopener noreferrer"
    >
      <fa class="contact__link__icon" :icon="['fab', 'twitter']" />
      <h4 class="contact__link__name">Twitter</h4>
    </a>
  </div>
</template>

<script>
import Title from "../components/Title.vue";

export default {
  components: {
    Title,
  },
};
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
      font-size: 2rem;
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