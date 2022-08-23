import { createApp } from 'vue';
import { createStore } from 'vuex';

import App from './App.vue';

const store = createStore({
  state() {
    return {
      counter: 0,
      loggedIn: false,
    };
  },
  mutations: {
    increment(state) {
      state.counter = state.counter + 1;
    },

    increase(state, payload) {
      state.counter = state.counter + payload.value;
    },
    login(state) {
      console.log('login: ', state);
      state.loggedIn = true;
    },
    logout(state) {
      console.log('logout: ', state);
      state.loggedIn = false;
    },
  },
  actions: {
    login(context) {
      context.commit('login');
    },
    logout(context) {
      context.commit('logout');
    },
    increment(context) {
      setTimeout(function () {
        context.commit('increment');
      }, 500);
    },

    increase(context, payload) {
      console.log(context);
      context.commit('increase', payload);
    },
  },
  getters: {
    isLoggedIn(state) {
      console.log('state: ', state);
      return state.loggedIn;
    },
    finalCounter(state) {
      return state.counter * 2;
    },
    normalizedCounter(_, getters) {
      const finalCounter = getters.finalCounter;
      if (finalCounter < 0) {
        return 0;
      }
      if (finalCounter > 100) {
        return 100;
      }
      return finalCounter;
    },
  },
});
const app = createApp(App);

app.use(store);
app.mount('#app');
