<template>
  <div class="hello">

    <p>
      messages: {{ messages }}
    </p>
    <p>
      scrollHeight: {{ scrollHeight }} <br>
      DOM 實際的 scrollHeight: {{ realScrollHeight }}
    </p>
    <div class="messages">
      <div v-for="item, index in messages" :key="index">{{ item }}</div>
    </div>
    <input type="text" placeholder="輸入任意文字後按下 enter 鍵" v-model.trim="msg" @keydown.enter="addToMessages">
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      msg: '',
      scrollHeight: 0,
      realScrollHeight: 0,
      messages: ['Hello', 'Vue.js', '好棒棒']
    }
  },
  methods: {
    addToMessages() {
      this.messages.push(this.msg);
      this.msg = '';

      const el = document.querySelector('.messages');
      this.scrollHeight = el.scrollHeight;
      el.scrollTop = el.scrollHeight;

      this.$nextTick(() => {
        this.realScrollHeight = el.scrollHeight;
      });
    }
  },
  mounted() {
    const el = document.querySelector('.messages');
    this.realScrollHeight = el.scrollHeight;
    this.scrollHeight = el.scrollHeight;
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
