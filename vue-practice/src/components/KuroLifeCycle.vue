<template>
  <div id="app">

    <h3>修改內容來觀察 Vue 實體的生命週期</h3>
    <hr>

    <div class="wrap">
      <div class="demo">
        <DemoApp @update="pushMsg" />
        <!-- <demo-app v-if="isActive" @update="pushMsg" /> -->
      </div>

      <div class="inspector">
        <div class="inspector-msg" v-for="(m, idx) in msg" :class="{ 'highlight': m.isHighlight }" :key="m.msg + idx">
          {{ m.msg }}</div>
      </div>
    </div>

    <hr>
    <button @click="toggle">{{ (!isActive) ? 'Active' : 'Destroy' }} the Vue instance</button>
    <button @click="empty">Empty the inspector</button>

  </div>
</template>

<script>

import DemoApp from '../components/DemoApp.vue';

export default {
  components: {
    DemoApp
  },
  data() {
    return {
      msg: [],
      isActive: false
    }
  },
  methods: {
    toggle() {
      if (!this.isActive) {
        this.empty();
      }
      this.isActive = !this.isActive;
    },
    empty() {
      this.msg = [];
    },
    pushMsg(msg) {
      this.msg.push({
        isHighlight: (msg.includes('===')),
        msg: msg
      });

      this.$nextTick(() => {
        const inspector = document.querySelector('.inspector');
        inspector.scrollTop = inspector.scrollHeight;
      });
    },
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#app {
  display: block;
  padding: 1rem;
  font-size: 1.2rem;
}

.wrap {
  overflow: hidden;
  margin-bottom: 1rem;

  /* >div {
    display: block;
    float: left;
    height: 10rem;
  } */
}

.wrap >div {
  display: block;
  float: left;
  height: 10rem;
}

.demo {
  width: 35%;
}

.inspector {
  font-family: Consolas, Monaco, Andale Mono, Ubuntu Mono, monospace;
  width: 90%;
  max-width: 400px;
  overflow-y: scroll;
  border: 1px solid #ccc;
}

.inspector-msg {
  padding-left: 1rem;
  font-size: 1rem;
  line-height: 2.5;
  border-bottom: 1px solid #ececec;

  /* &.highlight {
    background-color: lightcyan;
  } */
}

button {
  margin-right: 1rem;
  margin-bottom: 1rem;
  font-size: 1.2rem;
}
</style>
