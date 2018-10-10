<template>
  <div class="home">
    <Menu></Menu>
    <p>asd</p>
    <p>{{msg}}</p>
  </div>
</template>

<script>
import Menu from './shared/Menu';
export default {
  name: 'Home',
  components:{
    Menu
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
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
