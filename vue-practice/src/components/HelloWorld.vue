<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <!-- <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <h3>Installed CLI Plugins</h3>
    <ul>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">babel</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener">eslint</a></li>
    </ul>
    <h3>Essential Links</h3>
    <ul>
      <li><a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a></li>
      <li><a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a></li>
    </ul>
    <h3>Ecosystem</h3>
    <ul>
      <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>
      <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>
      <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">vue-devtools</a></li>
      <li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>
    </ul> -->
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  // 1.初始化顯示階段
  beforeCreate() {
    console.log('1. beforeCreate');
  },
  created() {
    console.log('2. created');
  },
  beforeMount() {
    console.log('3. beforeMount');
  },
  // 初始化後的顯示，所以放在mounted(只用一次)
  mounted() {
    console.log('4. mounted');
    // 定時器，每一秒改變一次
    this.intervalId = setInterval(() => {
      console.log('+++++++++');
      this.isShow = !this.isShow;
    }, 1000);
  },
  // 2.更新狀態顯示階段
  beforeUpdate() {
    console.log('5. beforeUpdate');
  },
  updated() {
    console.log('6. updated');
  },
  // 3.死亡、銷毀 Vue 實例階段 / 銷毀之前調用（只用一次）
  beforeDestroy() {
    // 清除定時器
    clearInterval(this.intervalId);
    console.log('7. beforeDestroy');
  },
  destroyed() {
    console.log('8. destroyed');
  },
  methods: {
    // 毀掉vm
    destroyVm() {
      this.$destroy();
    },
  },


  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
