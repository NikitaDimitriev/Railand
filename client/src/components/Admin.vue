<template>
    <div class="admin">
        <div class="header_admin">
            Admin panel
        </div>
        <div class="sidebar_admin">
            <div class="nav-item">Objects</div>
            <div class="nav-item">Articles</div>
            <div class="nav-item">Users</div>
        </div>
    </div>
</template>
<script>
export default {

};
</script>
<style>
.admin{

}
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
    height: calc(100% - 5vh); /* Full-height: remove this if you want "auto" height */
    width: 200px; /* Set the width of the sidebar */
    position: fixed; /* Fixed Sidebar (stay in place on scroll) */
    z-index: 1; /* Stay on top */
    top: 5vh; /* Stay at the top */
    left: 0;
    background-color: #fff; /* Black */
    overflow-x: hidden;
    border-right: 1px solid #9400D3;
}
.nav-item{
    padding: 15px;
    font-size: 25px;
    color: #9400D3;
}
.nav-item:hover{
    cursor: pointer;
    padding: 15px;
    font-size: 25px;
    color: #fff;
    background-color: #9400D3;
}
</style>
