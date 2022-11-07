<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p><a href="/lifecycle">life cycle</a></p>
    <p><a href="/vifvshow">v-if v-show</a></p>

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

