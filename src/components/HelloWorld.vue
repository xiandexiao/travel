<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>{{ version }}</p>
  </div>
</template>

<script>
import Vue from 'vue'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data () {
    return { version: Vue.version }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
