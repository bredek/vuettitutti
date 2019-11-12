<template>
    <v-navigation-drawer v-model="drawer" app>
      <Avatar />
      <v-divider></v-divider>
      <v-list dense>
        <v-list-item link exact to="/">
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link to="/about">
          <v-list-item-action>
            <v-icon>mdi-contact-mail</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Personal info</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
</template>

<script>
import Avatar from "./Avatar";

export default {
  name: "app-menu",
  components: {
    Avatar
  },
  props: ["drawer"]
};
</script>