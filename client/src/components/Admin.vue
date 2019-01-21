<template>
    <div class="admin">
        <Navigation/>
        <div class="work_area">
            <el-input placeholder="Type password" v-model="password" type="password">
            </el-input>
            <el-button @click="checkPass">Checkpass</el-button>
        </div>
    </div>
</template>
<script>
import Navigation from './shared/Nav_Admin'
export default {
    data(){
        return{
            password:""
        }
    },
components:{
    Navigation
},
methods:{
    checkPass(){
        if(this.password === "123456555"){
            localStorage.setItem("auth", "true");
            this.$router.push({ path: "/admin/objects"});
        }
    }
}
};
</script>
<style>
.admin{

}
</style>