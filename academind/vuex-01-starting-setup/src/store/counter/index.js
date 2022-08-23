
import counterMutations from './mutations'
// const counterModule = {
export default {
  namespaced: true,
  state() {
    return {
      counter: 0,
    };
  },
  mutations: counterMutations,
  actions: {
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
};

// export default counterModule;