<template>
  <div class="hello">
    <nav class="nav">
      <div class="logo">
        <!-- <img src="./" alt="logo" /> -->
      </div>
      <!-- 598px以下才顯示 -->
      <ul class="side-bar">
        <i class="fa-solid fa-xmark side-bar-close"></i>
        <li><a href="">關卡任務</a></li>
        <li><a href="">競賽說明</a></li>
      </ul>
      <ul class="nav-bar">
        <li><a href="">關卡任務</a></li>
        <li><a href="">競賽說明</a></li>
        <li><a href="" class="sign-up">立即報名</a></li>
      </ul>
    </nav>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
} */

li {
  display: inline-block;
  margin: 0 10px;
}

/* a {
  color: #42b983;
} */

.nav .side-bar {
  display: none;
}
</style>
