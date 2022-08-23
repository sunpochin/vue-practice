<template>
  <button @click="login">Login</button>
  <button @click="logout">Logout</button>

  <h3>{{ isLoggedIn }}</h3>
  <h3>{{ finalCounter }}</h3>

  <div v-show="isLoggedIn">isLoggedIn</div>
  <div id="app">
    <div v-if="isLoggedIn">條正成立</div>
    <div v-else>條件不成立</div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
  methods: {
    ...mapActions(['login', 'logout']),
  },
  computed: {
    ...mapGetters(['isLoggedIn', 'finalCounter']),
  },
};
</script>