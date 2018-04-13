<template>
  <!-- <div class="hello">
      <h1>{{ msg }}23234</h1>
    </div> -->
  <div class="register">
    <div class="item">
      <div>用户名:</div>
      <input type="text" name="name">
    </div>
    <div class="item">
      <div>密码:</div>
      <input type="text" name="name">
    </div>
    <div class="item">
      <div>学校官网账号:</div>
      <input type="text" name="name">
    </div>
    <div class="item">
      <div>对应密码:</div>
      <input type="text" name="name">
    </div>
    <div class="item">
      <div>验证码:</div>
      <input type="text" name="name">
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Register'
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
    flex-direction: column;
  }

  .item {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 30%;
    margin-top: 15px;
  }

  .item div {
    align-self: flex-end;
  }

  input {
    align-self: flex-end;
    outline: none;
    border-radius: 4px;
    border: 1px solid #4D5856;
    padding-left: 5px;
    line-height: 20px;
    height:20px;
  }

</style>
