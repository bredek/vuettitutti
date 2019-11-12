<template>
  <v-app-bar app color="indigo" dark>
    <v-app-bar-nav-icon @click.stop="toggleMenu" />
    <v-toolbar-title>Vuetitutti</v-toolbar-title>
  </v-app-bar>
</template>

<script>
export default {
  name: "app-header",
  props: ["toggleMenu"]
};
</script>