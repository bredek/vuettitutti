<template>
  <v-app id="inspire">
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar color="primary" dark flat>
                <v-toolbar-title>Sign up form</v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field
                    v-model="email"
                    name="email"
                    type="email"
                    label="E-mail"
                    required
                    :rules="emailRules"
                  ></v-text-field>
                  <v-text-field
                    label="Password"
                    name="password"
                    type="password"
                    v-model="password"
                    required
                    :count="10"
                    :rules="passwordRules"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  class="ma-2"
                  color="primary"
                  :disabled="loading"
                  :loading="loading"
                  @click="signUp"
                >Sign up</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
      <!-- <v-snackbar
        v-model="showAlert"
        :top="true"
        :color="isSuccessSignUp ? 'success' : 'error'"
      >{{ isSuccessSignUp ? successText : errorText }}</v-snackbar> -->
    </v-content>
  </v-app>
</template>

<script>
export default {
  data: function() {
    return {
      loading: false,
      email: "",
      password: "",
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+/.test(v) || "E-mail must be valid"
      ],
      passwordRules: [
        v => !!v || "Password is required",
        v => v.length >= 6 || "Password must be at least 6 characters"
      ]
    };
  },
  methods: {
    signUp() {
      this.$store.dispatch('signUp', {
        email: this.email, 
        password: this.password
      });
    }
  }
};
</script>