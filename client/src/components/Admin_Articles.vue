<template>
    <div class="admin_articles">
        <Navigation/>
        <div class="work_area">
            <el-input placeholder="Name of Article" v-model="nameOfArticle" clearable class="input_articles"></el-input>
            <el-input placeholder="Comment of Article" v-model="commentOfArticle" clearable class="input_articles"></el-input>
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
                nameOfArticle: '',
                commentOfArticle: ''
            }
        },
        methods:{
            create(){
                let data = {
                    name: this.nameOfArticle,
                    comment: this.commentOfArticle
                }
                console.log(data);
                this.$axios.post('http://localhost:3000/api/create-article', data).then(response=>{
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
