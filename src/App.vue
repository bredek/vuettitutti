<template>
  <v-app id="inspire">
    <app-header :toggleMenu="toggleMenu" />
    <app-menu :drawer="drawer" />
    <router-view></router-view>
    <app-footer />
  </v-app>
</template>

<script>
// @ is an alias to /src
import Menu from "./components/Common/Menu";
import Header from "./components/Common/Header";
import Footer from "./components/Common/Footer";

export default {
  name: "App",
  components: { 
    'app-menu': Menu, 
    'app-header': Header,
    'app-footer': Footer
  },
  data: () => ({
    drawer: false
  }),
  methods: {
    toggleMenu() {
      this.drawer = !this.drawer;
    }
  }
};
</script>
