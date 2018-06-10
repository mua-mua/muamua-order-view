<template>
  <div class="muamua">
    <h1>Hello MuaMua</h1>
    <h2>Comments</h2>
    <button v-on:click="hoge">POST</button>
  </div>
</template>

<script lang="js">
export default {
  methods: {
    hoge: function(event) {
      console.log("hoge");
    }
  }
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
