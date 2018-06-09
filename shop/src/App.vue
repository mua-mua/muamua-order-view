<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>MUAMUA</h1>
    <router-link to="/hello">To Hello</router-link>
    <br>
    <router-link to="/muamua">To Muamua</router-link>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
