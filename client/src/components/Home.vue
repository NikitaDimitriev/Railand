<template>
  <div class="home">
    <Menu></Menu>
    <div class="home-title">

    </div>
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
.home-title{
  
}
</style>
