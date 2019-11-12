<template>
  <v-list-item>
    <v-list-item-avatar>
      <v-avatar color="indigo" size="48">
        <img v-if="userDetails && userDetails.avatar" :src="userDetails.avatar" alt="Avatar" />
        <v-icon v-else dark>mdi-account-circle</v-icon>
      </v-avatar>
    </v-list-item-avatar>
    <v-list-item-content v-if="userDetails && userDetails.name">
      <v-list-item-title>{{ userDetails && userDetails.name }}</v-list-item-title>
    </v-list-item-content>
  </v-list-item>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "avatar",
  computed: {
    ...mapGetters(["userDetails"])
  }
};
</script>