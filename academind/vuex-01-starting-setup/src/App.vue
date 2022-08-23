<template>
  <base-container title="Vuex">
    <the-counter />
    <favorite-value></favorite-value>
    <button @click="addOne">Add 2</button>
    <change-counter></change-counter>
  </base-container>
  <base-container title="auth">
    <UserAuth />
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import TheCounter from './components/TheCounter.vue';
import ChangeCounter from './components/ChangeCounter.vue';
import FavoriteValue from './components/FavoriteValue.vue';
import UserAuth from './components/UserAuth.vue';

export default {
  components: {
    BaseContainer,
    TheCounter,
    ChangeCounter,
    FavoriteValue,
    UserAuth,
  },
  methods: {
    addOne() {
      // this.$store.state.counter++;
      // this.$store.commit('increment');
      this.$store.dispatch({
        type: 'numbers/increment',
        value: 1,
        haha: 1,
      });
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>