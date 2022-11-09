<template>
  <div id="app">
    <!-- https://ithelp.ithome.com.tw/articles/10220233 -->
    <div id="cond1">
      <div>
        <h1> v-if v-show</h1>
        <hr>
        <h2 v-if="cond1">v-if Yes</h2>
        <h2 v-else>No</h2>
        <h2 v-show="cond1">v-show Yes</h2>
        <hr>
      </div>

      <div>
        <h1>isSuccess</h1>
        <div class="alert alert-success" v-if="isSuccess">成功！</div>
        <div class="alert alert-danger">失敗...</div>
      </div>
    </div>
    <hr>


    <h1>v-if v-show demo:</h1>
    <h2>{{ active }}</h2>
    <button @click="acitve(1)">顯示文章一</button>
    <button @click="acitve(2)">顯示文章二</button>
    <p v-if="step === 1 || active.includes(1)" v-show="step === 1">內容一</p>
    <p v-if="step === 2 || active.includes(2)" v-show="step === 2">內容二</p>

    <p> {{ this.active }}</p>
  </div>
</template>

<script>
// https://guahsu.io/2018/08/vue-if-with-vue-show-singleton/

export default {
  data: () => {
    return {
      cond1: true,
      isSuccess: false,
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

