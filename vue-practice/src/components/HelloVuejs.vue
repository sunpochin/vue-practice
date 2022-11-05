<template>
  <div class="hello">
    <h3>修改內容來觀察 Vue 實體的生命週期</h3>
    <hr>

    <div class="wrap">
      <div v-if="isActive" class="demo">
        <DemoApp @update="pushMsg" />
      </div>

      <div class="inspector">
        <div class="inspector-msg" v-for="(m, idx) in msg" :class="{ 'highlight' : m.isHighlight }" :key="m.msg + idx">
          {{ m.msg }}</div>
      </div>
    </div>

    <hr>
    <button @click="toggle">{{ (!isActive) ? 'Active' : 'Destroy' }} the Vue instance</button>
    <button @click="empty">Empty the inspector</button>
  </div>
</template>

<script>
import DemoApp from './DemoApp.vue'

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
