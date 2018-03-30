<template>
  <div id="app">
    <header>
      <img src="./assets/images/logo.png" alt="">
    </header>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
  background-color: #282E2C;
  height: 100%;
  display: flex;
  flex-direction: column;
}
header img {
  width: 10%;
}
* {
  margin: 0;
}
</style>
