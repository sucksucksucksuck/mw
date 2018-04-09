<template>
  <div id="app">
    <header>
      <img src="./assets/images/logo.png" alt="">
      <div class="btn">
        <button type="button">About Us</button>
        <button type="button">Help</button>
      </div>
    </header>
    <div class="wrap">
        <router-view/>
    </div>
    <footer>
      hi
    </footer>
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
  flex: 1;
  width: 100%;
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
}
header {
  background: #282E2C;
  height: 15%;
  justify-content: space-between;
  align-items: center;
  display: flex;
}
header .btn {
  margin-right: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-self: flex-end;
}
header .btn button {
  margin-left: 15px;
  border: none;
  background: rgba(225, 255, 255, 0.2);
  color:#fff;
  border-top-left-radius: 17px;
  border-top-right-radius: 17px;
  padding: 8px 20px 4px 20px;
  cursor: pointer;
  outline: none;
  font-weight: 600;
}

.wrap {
  flex:1;
  display: flex;
  background: #fff;
}
header img {
  height: 40%;
  margin-left: 30px;
}
* {
  margin: 0;
}
footer {
  background: #282E2C;
  height: 15%;
  justify-content: center;
}
</style>
