<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
@font-face {
  font-family: ClearSans;
  src: url(/assets/fonts/WOFF/ClearSans-Regular.woff) format('woff'),
       url(/assets/fonts/TTF/ClearSans-Regular.ttf) format('ttf')
}
#app input{
  border: none;
}
#app{
  font-family: ClearSans, sans-serif;
}
</style>
