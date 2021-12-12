<template>
  <div class="header">
    <div class="header__logo">
      <a class="header__logo__title" href="#"> daviiduhh </a>
    </div>
    <div class="header__social">
      <a class="header__social__link" href="">
        <fa class="header__social__link__icon" :icon="['fab', 'github']" />
      </a>
      <a class="header__social__link" href="">
        <fa class="header__social__link__icon" :icon="['fab', 'gitlab']" />
      </a>
      <a class="header__social__link" href="">
        <fa class="header__social__link__icon" :icon="['fab', 'linkedin']" />
      </a>
      <a class="header__social__link" href="">
        <fa class="header__social__link__icon" :icon="['fab', 'twitter']" />
      </a>
    </div>
  </div>
</template>

<style lang="scss">
.header {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &__logo {
    &__title {
      color: #2c3e50;
      font-weight: bold;
      font-size: 20px;
      text-decoration: none;
      cursor: pointer;

      &:hover {
        color: #3C6E71;
      }

      &::before {
        content: "<";
      }
      &::after {
        content: "/>";
      }
    }
  }

  &__social {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    &__link {
        color: #353535;

        &__icon {
            font-size: 2rem;
        }
    }
  }
}
</style>