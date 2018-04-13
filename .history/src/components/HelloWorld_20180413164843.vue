<template>
  <div class="login">
    <div class="panel">
        <div class="item">
          账号：<input type="text" name="account">
        </div>
        <div class="item">
            密码：<input type="text" name="password">
          </div>
          <div class="btns">
            <button type="button" >
              登录
            </button>
            <button type="button" @click='register'>
              注册
            </button>
          </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome'
    }
  },
  methods: {
    register: function () {
      this.$router.push({ path: '/suck' })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .login {
    display: flex;
    flex:1;
    background: url(../assets/images/bg.png) no-repeat;
    background-size:100% 100%;
    justify-content: center;
    align-items: flex-end;
    flex-direction: column;
  }
  .login .panel {
    background:rgba(255, 255, 255, 0.2);
    height: 30%;
    margin-right:10%;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    font-size: 14px;
  }
  .login .panel .item {
    padding: 0 10px;
    color: #000;
    padding-top:10px;
  }
  .login .panel .item input {
    width: 120px;
    border-radius: 10px;
    border: none;
    height: 20px;
    line-height: 20px;
    outline: none;
    padding-left:10px;
  }
  .login .panel .btns {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  .login .panel .btns button {
  margin-left: 15px;
  border: none;
  background: rgba(61, 61, 61, 0.2);
  color:#000;
  border-radius: 12px;
  padding:5px 15px;
  cursor: pointer;
  outline: none;
}
h1, h2 {
  font-weight: normal;
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
