<template>
  <base-container title="Vuex">
    <TheCounter />
    <FavoriteValue />
    <favorite-value-vue></favorite-value-vue>
    <button @click="addOne">Add 2</button>
    <change-counter></change-counter>
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import TheCounter from './components/TheCounter.vue';
import ChangeCounter from './components/ChangeCounter.vue';
import FavoriteValueVue from './components/FavoriteValue.vue';
import FavoriteValue from './components/FavoriteValue.vue';

export default {
  components: {
    BaseContainer,
    TheCounter,
    ChangeCounter,
    FavoriteValueVue,
    FavoriteValue,
  },
  methods: {
    addOne() {
      // this.$store.state.counter++;
      // this.$store.commit('increment');
      this.$store.dispatch({
        type: 'increment',
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