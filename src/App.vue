<template>
  <Header></Header>
  <router-view />
  <Footer></Footer>
</template>

<script setup>
import { onMounted } from "vue";

import { useSupabaseStore } from './stores/supabase'

import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

const supabaseStore = useSupabaseStore()

onMounted(() => {
  supabaseStore.startSupabaseClient()
});

supabaseStore.startSupabaseClient()
</script>

<style lang="scss">
html {
  /* 1rem = 10px */
  font-size: 62.5%;
}

body {
  font-size: 1.6rem;
  font-family: "Open Sans", "Helvetica Neue", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #211d1c;
  background-color: #ffffff;

  margin: 0;
}

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.container {
  margin: 0 10px 30px 10px;
  max-width: 1300px;
}
.container--largo {
  padding-left: 10px;
  padding-right: 10px;
}

@media (min-width: 768px) {
  .container {
    margin: 0 60px 30px 60px;
  }
  .container--largo {
    padding-left: 40px;
    padding-right: 40px;
  }
}
@media (min-width: 1024px) {
  .container {
    margin: 0 80px 30px 80px;
  }
  .container--largo {
    padding-left: 60px;
    padding-right: 60px;
  }
}
@media (min-width: 1365px) {
  .container {
    margin: 0 200px 30px 200px;
  }
  .container--largo {
    padding-left: 100px;
    padding-right: 100px;
  }
}
@media (min-width: 1920px) {
  .container {
    width: 80%;
    margin: 0 auto 30px auto;
  }
  .container--largo {
    padding-left: 100px;
    padding-right: 100px;
  }
}

.btn, 
.btn--secondary {
  font-family: "Open Sans", "Helvetica Neue", sans-serif;
  font-weight: 600;
  font-size: 1.5em;
  text-align: center;
  border-radius: 5px;
  padding: 8px 0;
  margin: 0;
  cursor: pointer;
  text-decoration: none;
  display: block;
  width: 100%;

  &:active {
    transform: scale(0.9);
  }
}

.btn {
  background-color: #04aa6d;
  color: #ffffff;
  border: 2px solid #04aa6d;
  
  transition: background-color 0.5s, border 0.5s;

  &:hover {
    background-color: #211d1c;
    border: 2px solid #211d1c;
  }
}

.btn--secondary {
  background-color: transparent;
  color: #04aa6d;
  border: 2px solid #04aa6d;

  transition: border 0.5s, color 0.5s;

  &:hover {
    color: #211d1c;
    border: 2px solid #211d1c;
  }
}

.link {
  cursor: pointer;
  transition: border 0.5s, color 0.5s;

  &:hover {
    color: #04aa6d;
  }
}
</style>
