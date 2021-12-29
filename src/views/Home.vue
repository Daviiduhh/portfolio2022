<template>
  <div class="home container">
    <div class="home__about">
      <h1 class="home__about__title">Hi, I'm David Madrid Nápoles</h1>
      <h4 class="home__about__desc">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum minima
        neque alias magnam architecto quis id corrupti quod reprehenderit
        suscipit!
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
    <div class="home__skills">
      <h2 class="home__skills__title">Technologies I use to work</h2>
      <div class="home__skills__skill vue">
        <fa class="home__skills__skill__icon" :icon="['fab', 'vuejs']" />
        <p class="home__skills__skill__name">Vue</p>
      </div>
      <div class="home__skills__skill js">
        <fa class="home__skills__skill__icon" :icon="['fab', 'js']" />
        <p class="home__skills__skill__name">JavaScript</p>
      </div>
      <div class="home__skills__skill git">
        <fa class="home__skills__skill__icon" :icon="['fab', 'git-alt']" />
        <p class="home__skills__skill__name">Git</p>
      </div>
      <div class="home__skills__skill html">
        <fa class="home__skills__skill__icon" :icon="['fab', 'html5']" />
        <p class="home__skills__skill__name">HTML</p>
      </div>
      <div class="home__skills__skill css">
        <fa class="home__skills__skill__icon" :icon="['fab', 'css3']" />
        <p class="home__skills__skill__name">CSS</p>
      </div>
      <div class="home__skills__skill bootstrap">
        <fa class="home__skills__skill__icon" :icon="['fab', 'bootstrap']" />
        <p class="home__skills__skill__name">Bootstrap</p>
      </div>
      <div class="home__skills__skill npm">
        <fa class="home__skills__skill__icon" :icon="['fab', 'npm']" />
        <p class="home__skills__skill__name">npm</p>
      </div>
      <div class="home__skills__skill sass">
        <fa class="home__skills__skill__icon" :icon="['fab', 'sass']" />
        <p class="home__skills__skill__name">SASS</p>
      </div>
      <div class="home__skills__skill gulp">
        <fa class="home__skills__skill__icon" :icon="['fab', 'gulp']" />
        <p class="home__skills__skill__name">Gulp</p>
      </div>
      <div class="home__skills__skill terminal">
        <fa class="home__skills__skill__icon" icon="terminal" />
        <p class="home__skills__skill__name">Terminal</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.home {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  text-align: left;

  &__about {
    &__title {
      margin: 0;
      color: #211d1c;
      margin-bottom: 20px;
    }

    &__desc {
      margin: 0;
      font-weight: 300;
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

  &__skills {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;

    &__title {
      grid-column: 1 / 4;
      text-align: center;
      margin: 0;
    }

    &__skill {
      text-align: center;
      color: #211d1c;
      transition: color 0.3s;
      cursor: pointer;

      &:active {
        transform: scale(0.9);
      }

      &__icon {
        font-size: 3rem;
      }
    }
  }
}

// .vue, .html, .css, .js, .npm, .git, .bootstrap, .terminal, .gulp, .sass {
// }

.vue {
  &:hover {
    color: #3fb984;
  }
}
.js {
  &:hover {
    color: #fcdc00;
  }
}
.git {
  &:hover {
    color: #f64d27;
  }
}
.html {
  &:hover {
    color: #e34c26;
  }
}
.css {
  &:hover {
    color: #00ace4;
  }
}
.bootstrap {
  &:hover {
    color: #7111f5;
  }
}
.npm {
  &:hover {
    color: #cc3534;
  }
}
.sass {
  &:hover {
    color: #c56394;
  }
}
.gulp {
  &:hover {
    color: #eb4a4b;
  }
}
.terminal {
  &:hover {
    color: #04aa6d;
  }
}

@media (min-width: 768px) {
  .home {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>