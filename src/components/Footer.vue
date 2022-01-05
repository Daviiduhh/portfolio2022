<template>
  <footer class="footer container--largo">
    <div class="footer__daviiduhh">
      <router-link class="footer__daviiduhh__title" to="/">
        daviiduhh
      </router-link>
      <h4 class="footer__daviiduhh__subtitle">Front end web developer</h4>
      <p class="footer__daviiduhh__made">Made with <strong>VueJs</strong></p>
    </div>
    <div class="footer__nav">
      <router-link to="/" class="footer__nav__link"> Home </router-link>
      <router-link to="/portfolio" class="footer__nav__link">
        Portfolio
      </router-link>
      <router-link to="/about" class="footer__nav__link">
        About
      </router-link>
      <router-link to="/contact" class="footer__nav__link">
        Contact
      </router-link>
    </div>
    <div class="footer__social">
      <a class="footer__social__link" href="https://www.linkedin.com/in/daviiduhh/"  target="_blank" rel="noopener noreferrer">
        <fa class="footer__social__link__icon" :icon="['fab', 'linkedin']" />
      </a>
      <a class="footer__social__link" href="mailto: daviiduhhs@gmail.com" target="_blank" rel="noopener noreferrer">
        <fa class="footer__social__link__icon" icon="envelope" />
      </a>
      <a class="footer__social__link" href="https://github.com/Daviiduhh" target="_blank" rel="noopener noreferrer">
        <fa class="footer__social__link__icon" :icon="['fab', 'github']" />
      </a>
      <a class="footer__social__link" href="https://gitlab.com/Daviiduhh" target="_blank" rel="noopener noreferrer">
        <fa class="footer__social__link__icon" :icon="['fab', 'gitlab']" />
      </a>
      <a class="footer__social__link" href="https://twitter.com/Daviiduhh" target="_blank" rel="noopener noreferrer">
        <fa class="footer__social__link__icon" :icon="['fab', 'twitter']" />
      </a>
    </div>
  </footer>
</template>

<style lang="scss">
.footer {
  padding: 40px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin: 30px auto 0 auto;
  background-color: #211d1c;
  color: #ffffff;
  text-align: left;

  &__daviiduhh {
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 20px;
    margin-bottom: 20px;

    &__title {
      color: #ffffff;
      font-weight: bold;
      font-size: 20px;
      text-decoration: none;
      cursor: pointer;
      transition: color 0.5s;

      &:hover {
        color: #04aa6d;
      }

      &::before {
        content: "<";
        color: #04aa6d;
      }
      &::after {
        content: "/>";
        color: #04aa6d;
      }
    }

    &__subtitle, 
    &__made {
      margin: 0;
    }
  }

  &__nav {
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: flex-start;
    gap: 20px;
    margin-bottom: 20px;

    &__link {
      color: #ffffff;
      text-decoration: none;
      text-align: left;
      transition: color 0.5s;

      &:hover {
        color: #04aa6d;
      }
    }
  }
  &__social {
    width: 90%;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 2rem;

    &__link {
      color: #ffffff;
      text-decoration: none;
      transition: color 0.5s;

      &:hover {
        color: #04aa6d;
      }

      &__icon {
        font-size: 2rem;
      }
    }
  }
}

@media (min-width: 1024px) {
  .footer {
    height: 200px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0;

    &__daviiduhh {
      width: auto;
    }
    &__nav {
      width: auto;
    }
    &__social {
      width: auto;
    }
  }
}
</style>