<template>
  <div class="about container">
    <Title title="About" subtitle="A little about me" />
    <div class="about__me">
      <p class="about__me__text">
        Hi, I'm David Madrid Nápoles, front end web developer, with experience
        developing front end solutions like SPA and PWA, with technologies like
        VueJs, JavaScript, CSS, SASS, and HTML. I have learned to do this on my
        own, with courses, references, guides and documentation. The university
        helped me a little bit with oop.
      </p>
      <p class="about__me__text">
        I decided to study web development because is the easiest way to reach
        the people, you just need a web browser to explore the entire web. The
        web industry is growing so fast, and with the arrived of the PWA, web3
        and the most powerful JavaScript frameworks the possibilities are going
        to be bigger and bigger .
      </p>
      <p class="about__me__text">
        I spend my free time taking pictures, reading, playing the drums and
        developing new things to explore technologies I'm interested in.
      </p>
    </div>
    <div class="about__skills">
      <h2 class="about__skills__title">Technologies I use to work</h2>
      <div class="about__skills__skill vue">
        <fa class="about__skills__skill__icon" :icon="['fab', 'vuejs']" />
        <p class="about__skills__skill__name">Vue</p>
      </div>
      <div class="about__skills__skill js">
        <fa class="about__skills__skill__icon" :icon="['fab', 'js']" />
        <p class="about__skills__skill__name">JavaScript</p>
      </div>
      <div class="about__skills__skill git">
        <fa class="about__skills__skill__icon" :icon="['fab', 'git-alt']" />
        <p class="about__skills__skill__name">Git</p>
      </div>
      <div class="about__skills__skill html">
        <fa class="about__skills__skill__icon" :icon="['fab', 'html5']" />
        <p class="about__skills__skill__name">HTML</p>
      </div>
      <div class="about__skills__skill css">
        <fa class="about__skills__skill__icon" :icon="['fab', 'css3']" />
        <p class="about__skills__skill__name">CSS</p>
      </div>
      <div class="about__skills__skill bootstrap">
        <fa class="about__skills__skill__icon" :icon="['fab', 'bootstrap']" />
        <p class="about__skills__skill__name">Bootstrap</p>
      </div>
      <div class="about__skills__skill npm">
        <fa class="about__skills__skill__icon" :icon="['fab', 'npm']" />
        <p class="about__skills__skill__name">npm</p>
      </div>
      <div class="about__skills__skill sass">
        <fa class="about__skills__skill__icon" :icon="['fab', 'sass']" />
        <p class="about__skills__skill__name">SASS</p>
      </div>
      <div class="about__skills__skill gulp">
        <fa class="about__skills__skill__icon" :icon="['fab', 'gulp']" />
        <p class="about__skills__skill__name">Gulp</p>
      </div>
      <div class="about__skills__skill terminal">
        <fa class="about__skills__skill__icon" icon="terminal" />
        <p class="about__skills__skill__name">Terminal</p>
      </div>
    </div>
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
.about {
  display: grid;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;

  &__me {
    width: 90%;

    &__text {
      margin-top: 0;
      margin-bottom: 20px;
      text-align: left;
      font-size: 16px;
    }
  }

  &__skills {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;

    &__title {
      grid-column: 1 / 5;
      text-align: center;
      margin: 0;
      margin-bottom: 40px;
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
    color: #f1481c;
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
</style>