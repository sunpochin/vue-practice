<template>
  <div id="app">
    <h1>v-if v-show</h1>
    <h2>{{ active }}</h2>
    <button @click="acitve(1)">顯示文章一</button>
    <button @click="acitve(2)">顯示文章二</button>
    <p v-if="step === 1 || active.includes(1)" v-show="step === 1">內容一</p>
    <p v-if="step === 2 || active.includes(2)" v-show="step === 2">內容二</p>
  </div>
</template>

<script>
export default {
  // data: () => {
  //   return {
  //     msg: '',
  //     scrollHeight: 0,
  //     realScrollHeight: 0,
  //     messages: ['Hello', 'Vue.js', '好棒棒']
  //   }
  // },


  data: () => {
    return {
      step: null,
      active: []
    }
  },
  methods: {
    acitve(index) {
      this.step = index
      !this.active.includes(index) && this.active.push(index)
    }    
  },
}
</script>



