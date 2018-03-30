<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>zhuc</h2>
    <button>
      傻逼
    </button>
    <button @click='sb'>
      二百五
    </button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App2升水'
    }
  },
  methods: {
    sb: function () {
      this.$router.push({ path: '/suck' })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
