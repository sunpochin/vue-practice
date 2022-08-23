<template>
  <h1>Favorite Value</h1>
  <h3>normalizedCounter: {{ normalizedCounter }}</h3>
  <h3>counter: {{ counter }}</h3>
  <p>We do more...</p>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters('numbers', ['normalizedCounter']),
    counter() {
      // return this.$store.state.counter;
      // return this.$store.getters.normalizedCounter;
      return this.$store.getters['numbers/normalizedCounter'];
    },
  },
};
</script>
