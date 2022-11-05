<template>
  <div>
    <h3>{{ msg }}</h3>
    <input v-model="msg">
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: 'Hello Vue.js!'
    }
  },
  beforeCreate() {
    this.$emit('update', '=== beforeCreate! === ');
    this.$emit('update', `this.msg: ${this.msg}`);
    this.$emit('update', `this.$el: ${this.$el}`);
  },
  created() {
    this.$emit('update', '=== created! === ');
    this.$emit('update', `this.msg: ${this.msg}`);
    this.$emit('update', `this.$el: ${this.$el}`);
  },
  beforeMount() {
    this.$emit('update', '=== beforeMount! === ');
    this.$emit('update', `this.msg: ${this.msg}`);
    this.$emit('update', `this.$el: ${this.$el}`);
  },
  mounted() {
    this.$emit('update', '=== mounted! === ');
    this.$emit('update', `this.msg: ${this.msg}`);
    this.$emit('update', `this.$el: ${this.$el}`);
  },
  beforeUpdate() {
    this.$emit('update', '=== beforeUpdate! === ');
    this.$emit('update', `msg in view: ${this.$el.querySelector('h3').innerText}`);
    this.$emit('update', `this.msg: ${this.msg}`);
  },
  updated() {
    this.$emit('update', '=== updated! === ');
    this.$emit('update', `msg in view: ${this.$el.querySelector('h3').innerText}`);
    this.$emit('update', `this.msg: ${this.msg}`);
  },
  beforeUnmount() {
    this.$emit('update', `=== beforeUnmount! === `);
  },
  unmounted() {
    this.$emit('update', `=== unmount! === `);
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#app {
  display: block;
  padding: 1rem;
  font-size: 1rem;
}

p {
  margin: 1rem 0;
}

.messages {
  padding: 6px 10px;
  width: 92%;
  height: 4.5rem;
  margin-bottom: 1rem;
  overflow-y: scroll;
  border: 1px solid #ccc;
}

input[type="text"] {
  width: 93%;
  height: 1.2rem;
  padding: 3px;
}
</style>
