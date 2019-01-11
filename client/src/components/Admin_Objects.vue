<template>
  <div class="admin_objects">
    <Navigation/>
    <div class="work_area">
      <el-tabs value="first" class="create_tab">
        <el-tab-pane label="Create" name="first">
          <el-input
            placeholder="Название объекта"
            v-model="nameOfObject"
            clearable
            class="input_articles"
          ></el-input>
          <el-input placeholder="Этажей" v-model="floor" clearable class="input_articles"></el-input>
          <el-input placeholder="Комнат" v-model="rooms" clearable class="input_articles"></el-input>
          <el-input placeholder="Цена" v-model="price" clearable class="input_articles"></el-input>
          <el-input placeholder="Badroom" v-model="badroom" clearable class="input_articles"></el-input>
          <el-input placeholder="Bathroom" v-model="bathroom" clearable class="input_articles"></el-input>
          <el-input
            placeholder="Distanсe to bitch"
            v-model="distanсeToBitch"
            clearable
            class="input_articles"
          ></el-input>
          <el-input
            placeholder="Distance to airoport"
            v-model="distanсeToAiroport"
            clearable
            class="input_articles"
          ></el-input>
          <el-input placeholder="Area" v-model="area" clearable class="input_articles"></el-input>
          <el-input placeholder="Land area" v-model="landArea" clearable class="input_articles"></el-input>
          <el-input placeholder="Life area" v-model="lifeArea" clearable class="input_articles"></el-input>
          <el-input
            placeholder="Area of pool"
            v-model="areaOfPool"
            clearable
            class="input_articles"
          ></el-input>

          <br>
          <label for="mainImage">Main Image:</label>
          <input type="file" @change="onFileChanged" name="mainImage">
          <el-button type="primary" @click="create()">Create</el-button>
          <el-carousel height="300px" :autoplay="false" trigger="click" indicator-position="outside" arrow="always">
            <el-carousel-item v-for="item in 4" :key="item">
              <h3>{{ item }}</h3>
            </el-carousel-item>
          </el-carousel>
        </el-tab-pane>
        <el-tab-pane label="Update" name="second"></el-tab-pane>
        <el-tab-pane label="Delete" name="third"></el-tab-pane>
      </el-tabs>
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
      nameOfObject: "",
      floor: "",
      badroom: "",
      bathroom: "",
      distanсeToBitch: "",
      distanсeToAiroport: "",
      area: "",
      landArea: "",
      lifeArea: "",
      areaOfPool: "",
      price: "",
      rooms: "",
      selectedFile: null
    };
  },
  methods: {
    onFileChanged(event) {
      this.selectedFile = event.target.files[0];
    },
    create() {
      let data = {
        title: this.nameOfObject,
        floor: this.floor,
        badroom: this.badroom,
        bathroom: this.bathroom,
        distanсeToBitch: this.distanсeToBitch,
        distanсeToAiroport: this.distanceToAiroport,
        area: this.area,
        landArea: this.landArea,
        lifeArea: this.lifeArea,
        areaOfPool: this.areaOfPool,
        price: this.price
      };
      this.$axios
        .post("http://localhost:8080/api/create-object", data)
        .then(response => {
          console.log(response);
        });
    }
  }
};
</script>
<style>
.work_area {
  padding: 15px;
  width: calc(100% - 200px);
  float: right;
}
.input_articles {
  display: inline-block;
  width: 30%;
}
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
