<template>
  <!-- <div class="hello">
      <h1>{{ msg }}23234</h1>
    </div> -->
  <div class="register">
    <div class="item">
      <span>用户名:</span>
      <input type="text" name="name">
    </div>
    <div class="item">
      <span>面膜:</span>
      <input type="text" name="name">
    </div>
    <div class="item">
      <span>用户名:</span>
      <input type="text" name="name">
    </div>
    <div class="item">
      <span>用户名:</span>
      <input type="text" name="name">
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Suck',
    data() {
      return {
        msg: 'Suckkkkkkkk'
      }
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .register {
    color: #000;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
  }

</style>
