import Vue from 'vue'
import Vuex from 'vuex'
import firebase from "firebase";
import { vuexfireMutations, firebaseAction } from 'vuexfire'
// router
import router from '../router';
// db
import { db } from '../db/realtime'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null,
    userDetails: null,
    loading: false,
    wallet: null
  },
  getters: {
    appLoading: state => state.loading,
    user: state => state.user,
    userId: state => state.user && state.user.uid,
    documents: state => state.documents,
    userDetails: state => state.userDetails,
    userWallet: state => state.wallet,
  },
  mutations: {
    ...vuexfireMutations,
    setUser: (state, user) => {
      state.user = user;
    },
    setLoading: (state, loading) => {
      state.loading = loading;
    }
  },
  actions: {
    init: ({ commit, dispatch }) => {
      commit('setLoading', true);
      // Check user
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          // Set user
          commit('setUser', user);
          // Init DB bindings
          Promise.all([
            dispatch('bindWallet'),
            dispatch('bindUsers'),
          ]).then(() => {
            commit('setLoading', false);
          });
          // TODO: Apply error handling
        } else {
          // Redirect to sign in
          router.push({ name: "signup" });
        }
      })
    },
    signUp: ({ commit }, payload) => {
      // Set loading state
      commit("setLoading", true);
      // Try to sign up
      firebase
        .auth()
        .createUserWithEmailAndPassword(payload.email, payload.password)
        .then(response => {
          commit("setUser", response.user);
          router.push({ name: "home" });
          commit("setLoading", false);
        })
        .catch(error => {
          window.console.log(error);
          // set error handling here
        });
    },
    logIn: ({ commit }, payload) => {
      // Set loading state
      commit("setLoading", true);
      // Try to sign up
      firebase
        .auth()
        .signInWithEmailAndPassword(payload.email, payload.password)
        .then(response => {
          commit("setUser", response.user);
          router.push({ name: "home" });
          commit("setLoading", false);
        })
        .catch(error => {
          window.console.log(error);
          // set error handling here
        });
    },
    // firebase
    bindWallet: firebaseAction(({ state, bindFirebaseRef }) => {
      // return the promise returned by `bindFirebaseRef`
      return bindFirebaseRef('wallet', db.ref(`wallets/${state.user.uid}`));
    }),
    bindUsers: firebaseAction(({ state, bindFirebaseRef }) => {
      // return the promise returned by `bindFirebaseRef`
      return bindFirebaseRef('userDetails', db.ref(`users/${state.user.uid}`))
    }),
    updateWallet: firebaseAction(({ state }, payload ) => {
      // we first create a copy that excludes `.key`
      // this exclusion is automatic because `.key` is non-enumerable
      const wallet = { ...state.wallet }
      wallet.capacity = payload.newCapacity;
      // return the promise so we can await this action
      return db
        .ref(`wallets/${state.user.uid}`)
        .set(wallet)
        .then(() => {
          window.console.log('wallet updated!')
        })
    })
  },
  modules: {
  }
})
