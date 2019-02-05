<template>
    <div class="navigation_admin">
        <div class="header_admin">
            Admin panel
        </div>
        <div class="sidebar_admin" v-if="checkAuth()">
            <router-link to="/admin/objects"><div class="nav-item"><i class="fa fa-home"></i> Objects </div></router-link>
            <router-link to="/admin/complex"><div class="nav-item"><i class="fa fa-city"></i> Complex </div></router-link>
            <router-link to="/admin/articles"><div class="nav-item"><i class="fa fa-book"></i> Articles</div></router-link>
            <router-link to="/admin/users"><div class="nav-item"><i class="fa fa-user"></i> Users</div></router-link>
            <router-link to="/admin/reviews"><div class="nav-item"><i class="fa fa-comment"></i> Reviews</div></router-link>
        </div>
    </div>
</template>
<script>
export default {
    name: "Navigation",
    methods:{
        checkAuth(){
            if(localStorage.getItem('auth')){
                return true
            }else{
                return false
            }
        }
    }
}
</script>
<style>
.header_admin{
    display: flex;
    align-items: center;
    height: 5vh;
    background-color: #9400D3;
    font-size: 4.8vh;
    color: #fff;
    padding: 10px;
}
.sidebar_admin{
    height: calc(100% - 5vh);
    width: 200px;
    position: fixed;
    z-index: 1;
    top: 5vh;
    left: 0;
    background-color: #fff;
    overflow-x: hidden;
    border-right: 1px solid #9400D3;
}
.nav-item{
    padding: 15px;
    font-size: 14px;
    color: #9400D3;
}
.nav-item:hover{
    cursor: pointer;
    padding: 15px;
    font-size: 14px;
    color: #fff;
    background-color: #9400D3;
}
</style>
