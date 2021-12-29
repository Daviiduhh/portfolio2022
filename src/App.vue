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
  font-family: "Open Sans", "Helvetica Neue", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #211d1c;
  background-color: #ffffff;

  margin: 0;
}

.container {
  margin: 0 10px;
}
@media (min-width: 768px) {
  .container {
    margin: 0 60px;
  }
}
@media (min-width: 1024px) {
  .container {
    margin: 0 150px;
  }
}
@media (min-width: 1365px) {
  .container {
    margin: 0 200px;
  }
}

.container--largo {
  padding-left: 10px;
  padding-right: 10px;
}
@media (min-width: 768px) {
  .container--largo {
    padding-left: 40px;
    padding-right: 40px;
  }
}
@media (min-width: 1024px) {
  .container--largo {
    padding-left: 80px;
    padding-right: 80px;
  }
}
@media (min-width: 1365px) {
  .container--largo {
    padding-left: 100px;
    padding-right: 100px;
  }
}

.btn, 
.btn--secondary {
  font-family: "Open Sans", "Helvetica Neue", sans-serif;
  font-weight: 600;
  font-size: 18px;
  text-align: center;
  border-radius: 15px;
  padding: 10px 0;
  margin: 0;
  cursor: pointer;
  text-decoration: none;
  display: block;
  width: 150px;

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
</style>
