<template>
  <div class="hello">
    <h1>lifecycle</h1>
  </div>
</template>

<script>
export default {
  mounted() {
    console.log('mounted!')
  },
  updated() {
    console.log('updated!')
  },
}
</script>
