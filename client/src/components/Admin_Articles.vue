<template>
  <div class="admin_articles">
    <Navigation/>
    <div class="work_area">
        <div class="content-articles-area">
      <el-input placeholder="Name" v-model="name" clearable class="input_articles"></el-input>
      <el-input placeholder="Author" v-model="author" clearable class="input_articles"></el-input>
      <div v-if="!image" style="font-size: 18px; margin-top: 45px">
        <label for="image" class="fileInput">Add main photo</label>
        <input type="file" @change="onFileChange" id="image" style="visibility: hidden">
      </div>
      <div v-else>
        <h3>Main photo</h3>
        <img :src="image" class="preloadImage">
        <button @click="removeImage">Remove image</button>
      </div>
      <el-input type="textarea" v-model="text[0]" placeholder="paragraf 1"></el-input>
      <el-input type="textarea" v-model="text[1]" placeholder="paragraf 2"></el-input>
      <el-input type="textarea" v-model="text[2]" placeholder="paragraf 3"></el-input>
      <el-input type="textarea" v-model="text[3]" placeholder="paragraf 4"></el-input>
      <div v-if="!photo.length">
        <label for="newFile" class="fileInput">Add photo</label>
        <input type="file" multiple @change="onPhotoChange" id="newFile" style="visibility: hidden">
      </div>
      <div v-if="photo">
        <div v-for="(photo, index) in photo" :key="index" class="imageContent">
          <img :src="photo" @click="removePhoto(index)" class="preloadPhoto">
        </div>

        <el-button
          v-if="photo.length"
          type="primary"
          @click="removePhotos"
          class="input_articles"
        >Remove photo</el-button>
      </div>
      <el-button type="primary" @click="create()" style="width:300px">Create</el-button>
      </div>
    </div>
  </div>
</template>
<script>
import Navigation from "./shared/Nav_Admin";
export default {
  components: {
    Navigation
  },
  data() {
    return {
      name: "",
      author: "",
      image: "",
      text: [],
      photo: []
    };
  },
  methods: {
    onFileChange(e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      this.createImage(files[0]);
      console.log(files);
    },
    onPhotoChange(e) {
      this.photo = [];
      console.log(e.target.files);
      for (let i = 0; i < e.target.files.length; i++) {
        this.createPhoto(e.target.files[i]);
        console.log(this.photo);
      }
    },
    createPhoto(file) {
      var photoImage = new Image();
      var reader = new FileReader();
      var vm = this;

      reader.onload = e => {
        vm.photoImage = e.target.result;
        this.photo.push(vm.photoImage);
      };
      reader.readAsDataURL(file);
    },
    createImage(file) {
      var image = new Image();
      var reader = new FileReader();
      var vm = this;

      reader.onload = e => {
        vm.image = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    removePhotos() {
      this.photo = [];
    },
    removeImage() {
      this.image = "";
    },

    create() {
      let data = {
        name: this.name,
        image: this.image,
        photo: this.photo,
        author: this.author,
        text: this.text
      };
      console.log(data);
      this.$axios
        .post("http://localhost:8080/api/create-article", data)
        .then(response => {
          console.log(response);
          (this.name = ""),
            (this.author = ""),
            (this.image = ""),
            (this.text = []),
            (this.photo = []);
        });
    }
  }
};
</script>
<style>
.content-articles-area{
    display: flex;
    flex-direction: column;
    height: 80vh;
    justify-content: space-between;
}
.admin_articles {
  display: block;
}
.work_area {
  width: calc(100% - 200px);
  float: right;
}
.input_articles {
  width: 30%;
}
.fileInput {
  text-align: center;
  background: #333;
  color: #fff;
  border: none;
  cursor: pointer;
  padding: 10px;
  margin-top: 45px;
}
.imageContent {
  display: inline-flex;
  justify-content: flex-start;
}
.imageContent img {
  display: inline;
}
.preloadImage {
  width: 300px;
  height: 150px;
}
.preloadPhoto{
    width: 500px;
    height: 300px;
}
</style>
