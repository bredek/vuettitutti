<template>
  <v-overlay v-if="appLoading" :value="appLoading">
    <v-progress-circular indeterminate size="64"></v-progress-circular>
  </v-overlay>
  <v-content v-else>
    <v-container class="fill-height" fluid>
      <v-row align="center" justify="center">
        <v-col>
          <v-card v-if="userWallet" class="mx-auto" max-width="344" outlined>
            <v-list-item three-line>
              <v-list-item-content>
                <!-- <div class="overline mb-4">{{ userWallet.currency }}</div> -->
                <v-list-item-title class="headline mb-1">{{ userWallet.name }}</v-list-item-title>
                <v-list-item-subtitle>
                  <span>{{ userWallet.capacity }}</span>
                  <span class="caption">({{ userWallet.currency }})</span>
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-card-actions>
              <v-btn depressed @click="dialog = true">Add some cash</v-btn>
            </v-card-actions>
          </v-card>
          <!-- <v-hover>
            <template v-slot:default="{ hover }">
              <v-card class="mx-auto" max-width="344">
                <v-img src="https://cdn.vuetifyjs.com/images/cards/forest-art.jpg"></v-img>
                <v-card-text>
                  <h2 class="title primary--text">Magento Forests</h2>Travel to the best outdoor experience on planet Earth. A vacation you will never forget!
                </v-card-text>

                <v-card-title>
                  <v-rating
                    :value="4"
                    dense
                    color="orange"
                    background-color="orange"
                    hover
                    class="mr-2"
                  ></v-rating>
                  <span class="primary--text subtitle-2">64 Reviews</span>
                </v-card-title>

                <v-fade-transition>
                  <v-overlay v-if="hover" absolute color="#036358">
                    <v-btn>See more info</v-btn>
                  </v-overlay>
                </v-fade-transition>
              </v-card>
            </template>
          </v-hover>-->
        </v-col>
        <v-dialog v-model="dialog" persistent max-width="600px">
          <v-card>
            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12">
                    <v-radio-group v-model="transaction.type" row>
                      <v-radio label="Income" value="income"></v-radio>
                      <v-radio label="Expense" value="expense"></v-radio>
                    </v-radio-group>
                  </v-col>
                  <v-col cols="12" sm="6">
                    <v-select v-model="transaction.category" :items="['Car', 'Food', 'Pet']" label="Category*" required></v-select>
                  </v-col>
                  <!-- <v-col cols="12" sm="6">
                    <v-menu
                      v-model="menu2"
                      :close-on-content-click="false"
                      :nudge-right="40"
                      transition="scale-transition"
                      offset-y
                      min-width="290px"
                    >
                      <template v-slot:activator="{ on }">
                        <v-text-field v-model="date" label="Date" readonly v-on="on"></v-text-field>
                      </template>
                      <v-date-picker v-model="date" @input="menu2 = false"></v-date-picker>
                    </v-menu>
                  </v-col> -->
                  <v-col cols="12" sm="6">
                    <v-text-field v-model="amount" label="Amount" hint="example of helper text only on focus"></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-textarea auto-grow label="Note" hint="example of helper text only on focus"></v-textarea>
                  </v-col>
                </v-row>
              </v-container>
              <small>*indicates required field</small>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
              <v-btn color="blue darken-1" text @click="updateWalletCapacity">Save</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["appLoading", "userDetails", "userWallet"])
  },
  data: () => ({
    row: "radio-1",
    amount: '',
    drawer: null,
    dialog: false,
    date: null,
    menu: false,
    modal: false,
    transaction: {
      category: '',
      type: ''
    }
  }),
  methods: {
    updateWalletCapacity() {
      this.$store.dispatch('updateWallet', { newCapacity: this.amount });
    }
  }
};
</script>