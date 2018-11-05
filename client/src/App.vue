<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "App"
}
</script>

<style>
@import "./assets/style/app.css";
#app {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}
</style>
