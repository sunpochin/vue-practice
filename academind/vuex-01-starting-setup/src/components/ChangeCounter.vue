<template>
  <!-- <button @click="addOne">Add 10</button> -->
  <button @click="inc">increment 2</button>
  <button @click="increase({ value: 11 })">increase 11</button>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  methods: {
    ...mapActions('numbers', {
      inc: 'increment',
      increase: 'increase'
    }),
    // ...mapActions(['increment', 'increase']),

    // addOne() {
    //   // this.$store.state.counter++;
    //   // this.$store.commit('increment');
    //   // this.$store.commit('increase', { value: 4 });
    //   // this.$store.commit({
    //   //   type:'increase',
    //   //   value: 10,
    //   //   haha: 3,
    //   //   });
    //   this.$store.dispatch({
    //     type: 'increase',
    //     value: 10,
    //     haha: 10,
    //   });
    //   // this.$store.dispatch('increment');
    // },
  },
};
</script>