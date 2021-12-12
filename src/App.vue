<template>
  <Header></Header>
  <router-view />
  <Footer></Footer>
</template>

<script>
//import { ElButton } from 'element-plus'
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    Footer,
    //ElButton
  },
};
</script>

<style lang="scss">

body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #353535;
}

</style>
