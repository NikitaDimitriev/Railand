<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "App",
  data(){
    return{
      currentUserId: localStorage.getItem("id") || null,
      user: {}
    }
  },
  mounted() {
    this.$axios.get('http://localhost:3000/api/get-current-user', {id: this.currentUserId}).then(response=>{
      this.user = response.data;
    })
  },
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
