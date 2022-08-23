<template>
  <h1>the Counter</h1>
  <h3>counter: {{ counter }}</h3>
  <h3>finalCounter: {{ finalCounter }}</h3>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  computed: {
    ...mapGetters('numbers', ['finalCounter']),
    counter() {
      return this.$store.getters['numbers/finalCounter'];
    },
  },
};
</script>