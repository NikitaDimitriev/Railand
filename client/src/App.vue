<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "App",
  mounted() {
    this.getUser();
  },
  methods:{
    getUser(){
      console.log('asdsad');
      if(localStorage.getItem('auth') === true){
        let data = {
          id: localStorage.getItem('id')
        }
        this.$axios.get('http://localhost:3000/api/get-currentuser', data).then(response=>{
          console.log(response);
        })
      }
    }
  }
};
</script>

<style>
@import "./assets/style/app.css";
#app {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}
</style>
