<template>
  <button @click="addOne">Add 10</button>
</template>

<script>
export default {
  methods: {
    addOne() {
      // this.$store.state.counter++;
      // this.$store.commit('increment');
      // this.$store.commit('increase', { value: 4 });
      // this.$store.commit({
      //   type:'increase',
      //   value: 10,
      //   haha: 3,
      //   });
      this.$store.dispatch({
        type: 'increase',
        value: 10,
        haha: 10,
      });
      // this.$store.dispatch('increment');
    },
  },
};
</script>