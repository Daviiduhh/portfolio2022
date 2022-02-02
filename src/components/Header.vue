<template>
  <header class="header container--largo">
    <div class="header__logo">
      <router-link class="header__logo__title link" to="/"> daviiduhh </router-link>
    </div>
    <div class="header__nav">
      <!-- Nav desktop -->
      <nav class="header__nav__nav">
        <router-link to="/" class="header__nav__nav__link link">
          Home
        </router-link>
        <router-link to="/portfolio" class="header__nav__nav__link link">
          Portfolio
        </router-link>
        <router-link to="/about" class="header__nav__nav__link link">
          About
        </router-link>
        <router-link to="/contact" class="header__nav__nav__link link">
          Contact
        </router-link>
      </nav>
      <!-- Nav desktop fin -->

      <!-- Burger menu btn -->
      <button class="header__nav__btn" @click="showMenu">
        <fa class="header__nav__btn__icon" icon="bars" v-show="!menu" />
      </button>
      <!-- Burger menu btn fin -->
    </div>
  </header>

  <div class="menu" v-show="menu">
    <header class="menu__header container--largo">
      <button class="menu__header__x link" @click="showMenu">
        <fa class="menu__header__x__icon" icon="x" />
      </button>
    </header>
    <div class="menu__nav container--largo">
      <router-link to="/" class="menu__nav__link link" @click="showMenu">
        Home
      </router-link>
      <router-link to="/portfolio" class="menu__nav__link link" @click="showMenu">
        Portfolio
      </router-link>
      <router-link to="/about" class="menu__nav__link link" @click="showMenu">
        About
      </router-link>
      <router-link to="/contact" class="menu__nav__link link" @click="showMenu">
        Contact
      </router-link>
      <a
        href="https://www.linkedin.com/in/daviiduhh/"
        class="menu__nav__social link"
        target="_blank"
        rel="noopener noreferrer"
        >LinkedIn</a
      >
      <a
        href="mailto: daviiduhhs@gmail.com"
        class="menu__nav__social link"
        target="_blank"
        rel="noopener noreferrer"
        >Email</a
      >
      <a
        href="https://github.com/Daviiduhh"
        class="menu__nav__social link"
        target="_blank"
        rel="noopener noreferrer"
        >Github</a
      >
      <a
        href="https://gitlab.com/Daviiduhh"
        class="menu__nav__social link"
        target="_blank"
        rel="noopener noreferrer"
        >Gitlab</a
      >
      <a
        href="https://twitter.com/Daviiduhh"
        class="menu__nav__social link"
        target="_blank"
        rel="noopener noreferrer"
        >Twitter</a
      >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menu: false,
    };
  },
  methods: {
    showMenu: function () {
      if (this.menu === true) {
        this.menu = false;
      } else if (this.menu === false) {
        this.menu = true;
      }
    },
  },
};
</script>

<style lang="scss">
.header {
  width: 100% -20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  padding: 15px;

  background-color: #211d1c;

  &__logo {
    &__title {
      color: #ffffff;
      font-weight: bold;
      font-size: 24px;
      text-decoration: none;
      cursor: pointer;
      transition: color 0.5s;

      &::before {
        content: "<";
        color: #04aa6d;
      }
      &::after {
        content: "/>";
        color: #04aa6d;
      }
    }
  }

  &__nav {
    &__nav {
      display: none;

      &__link {
        color: #fff;
        text-decoration: none;
        font-weight: 600;
        font-size: 18px;
      }
    }

    &__btn {
      background-color: transparent;
      color: #ffffff;
      border: none;
      cursor: pointer;
      transition: color 0.5s;

      &:active {
        transform: scale(0.9);
      }

      &__icon {
        font-size: 22px;
      }
    }
  }
}

.menu {
  position: absolute;
  width: 100%;
  height: 150%;
  top: 0;
  left: 0;
  background: rgba(255, 255, 255, 0.5);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);

  &__header {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-bottom: 30px;
    padding: 10px;
    z-index: 100;

    &__x {
      background-color: transparent;
      color: #211d1c;
      border: none;
      cursor: pointer;

      &:active {
        transform: scale(0.9);
      }

      &__icon {
        font-size: 22px;
      }
    }
  }

  &__nav {
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: flex-start;
    gap: 20px;
    margin: 0 auto;
    height: 60vh;

    &__link,
    &__social {
      color: #211d1c;
      font-weight: 600;
      font-size: 20px;
      text-decoration: none;
      text-align: right;
      transition: color 0.5s;
      margin-right: 15px;

      &:hover {
        color: #04aa6d;
        //Animation
        // transform: translate(-15px);
        // -webkit-transition: 0.5s ease-in-out;
        // -moz-transition: 0.5s ease-in-out;
        // -o-transition: 0.5s ease-in-out;
        // transition: 0.5s ease-in-out;
      }
    }

    &__social {
      font-weight: 300;
      font-size: 16px;
      color: #211d1c;
    }
  }
}

@media (min-width: 768px) {
  .header {
    &__nav {

      &__nav {
        display: flex;
        gap: 30px;
      }

      &__btn {
        display: none;
      }
    }
  }
}
</style>