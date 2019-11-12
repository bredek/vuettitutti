<template>
  <v-footer color="indigo" app>
    <span class="white--text">{{ year }}</span>
  </v-footer>
</template>

<script>
export default {
  computed: {
    year() {
      return `Ⓒ ${new Date().getFullYear()}`;
    }
  }
};
</script>