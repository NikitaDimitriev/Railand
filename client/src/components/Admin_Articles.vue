<template>
    <div class="admin_articles">
        <Navigation/>
        <div class="work_area">
            <el-input placeholder="Name" v-model="nameOfArticle" clearable class="input_articles"></el-input>
            <el-input placeholder="Author" v-model="author" clearable class="input_articles"></el-input>
            <el-button type="primary" @click="create()">Create</el-button>
        </div>
    </div>
</template>
<script>
    import Navigation from './shared/Nav_Admin'
    export default {
        components:{
            Navigation
        },
        data(){
            return{
                name: '',
                author:''
            }
        },
        methods:{
            create(){
                let data = {
                    name: this.nameOfArticle,
                    comment: this.commentOfArticle
                }
                console.log(data);
                this.$axios.post('http://rl-property.com/api/create-article', data).then(response=>{
                    console.log(response);
                })
            }
        }
    }
</script>
<style>
.admin_articles{
    display: block;
}
.work_area{
    width: calc(100% - 200px);
    float: right;
}
.input_articles{
    width: 30%;
}
</style>
