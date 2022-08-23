import { createStore } from 'vuex';
import rootMutations from './mutations';
import rootActions from './actions';
import counterModule from './counter/index.js'
import rootGetters from './getters';

const store = createStore({
  modules: {
    numbers: counterModule,
  },
  state() {
    return {
      loggedIn: false,
    };
  },
  mutations: rootMutations,
  actions: rootActions,
  getters: rootGetters,
});

// https://stackoverflow.com/questions/34645731/export-more-than-one-variable-in-es6
export { store };