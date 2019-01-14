<template>
  <div class="admin_objects">
    <Navigation/>
    <div class="work_area">
      <el-tabs value="first" class="create_tab">
        <el-tab-pane label="Create" name="first">
          <el-carousel
            height="600px"
            :autoplay="false"
            trigger="click"
            indicator-position="outside"
            arrow="always"
          >
            <el-carousel-item>
              <div class="content">
                <h3>Главная информация</h3>
                <el-input
                  placeholder="Название объекта RU"
                  v-model="newObj.nameOfObjectRU"
                  clearable
                  class="input_articles"
                ></el-input>
                <el-input
                  placeholder="Название объекта EN"
                  v-model="newObj.nameOfObjectEN"
                  clearable
                  class="input_articles"
                ></el-input>
                <el-input
                  placeholder="Цена ฿"
                  v-model="newObj.price"
                  clearable
                  class="input_articles"
                ></el-input>
                <el-select
                  v-model="newObj.typeOfObject"
                  placeholder="Тип объекта"
                  class="input_articles"
                >
                  <el-option
                    v-for="item in optionsType"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
                <el-select v-model="newObj.location" placeholder="Локация" class="input_articles">
                  <el-option
                    v-for="item in optionsLocation"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
                <div v-if="!image">
                  <input type="file" @change="onFileChange">
                </div>
                <div v-else>
                  <img :src="image" class="preloadImage">
                  <button @click="removeImage">Remove image</button>
                </div>
              </div>
            </el-carousel-item>
            <el-carousel-item>
              <div class="content">
                <h3>Описание</h3>
                <el-input
                  type="textarea"
                  :rows="2"
                  placeholder="Описание RU"
                  v-model="newObj.descriptionRU"
                ></el-input>
                <el-input
                  type="textarea"
                  :rows="2"
                  placeholder="Описание EN"
                  v-model="newObj.descriptionEN"
                ></el-input>
                <el-input
                  placeholder="Расположение"
                  v-model="newObj.address"
                  clearable
                  class="input_articles"
                ></el-input>
                <el-select
                  v-model="newObj.stage"
                  placeholder="Стадия готовности"
                  class="input_articles"
                >
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
                <el-input
                  placeholder="Расположение на карте х"
                  v-model="newObj.coordinat.x"
                  clearable
                  class="input_articles"
                  type="number"
                ></el-input>
                <el-input
                  placeholder="Расположение на карте у"
                  v-model="newObj.coordinat.y"
                  clearable
                  class="input_articles"
                  type="number"
                ></el-input>
              </div>
            </el-carousel-item>
            <el-carousel-item>
              <div class="content">
                <h3>Информация об объекте</h3>
                <el-input
                  placeholder="Этажей"
                  v-model="newObj.floor"
                  clearable
                  class="input_articles"
                ></el-input>
                <el-input
                  placeholder="Комнат"
                  v-model="newObj.rooms"
                  clearable
                  class="input_articles"
                ></el-input>
                <el-input
                  placeholder="Количество спален"
                  v-model="newObj.badroom"
                  clearable
                  class="input_articles"
                ></el-input>
                <el-input
                  placeholder="Количество ванных комнат"
                  v-model="newObj.bathroom"
                  clearable
                  class="input_articles"
                ></el-input>
                <el-input
                  placeholder="Растояние до пляжа"
                  v-model="newObj.distanсeToBitch"
                  clearable
                  class="input_articles"
                ></el-input>
                <el-input
                  placeholder="Растояние до аэропорта"
                  v-model="newObj.distanсeToAiroport"
                  clearable
                  class="input_articles"
                ></el-input>
                <el-input
                  placeholder="Общая площадь"
                  v-model="newObj.area"
                  clearable
                  class="input_articles"
                ></el-input>
                <el-input
                  placeholder="Площать земельного участка"
                  v-model="newObj.landArea"
                  clearable
                  class="input_articles"
                ></el-input>
                <el-input
                  placeholder="Жилая площадь"
                  v-model="newObj.lifeArea"
                  clearable
                  class="input_articles"
                ></el-input>
                <el-input
                  placeholder="Размеры басейна"
                  v-model="newObj.areaOfPool"
                  clearable
                  class="input_articles"
                ></el-input>
              </div>
            </el-carousel-item>
            <el-carousel-item>
              <div class="content">
                <h3>Фото</h3>
                <input type="file" multiple @change="onPhotoChange">
                <el-button type="primary" @click="create()" class="input_articles">Create</el-button>
              </div>
            </el-carousel-item>
          </el-carousel>
        </el-tab-pane>
        <el-tab-pane label="Update" name="second">
          <ul
            class="cards__list cards__list-tab js-content is-active"
            data-tab="0"
            v-if="!updatePanel"
          >
            <li class="cards__item" v-for="(object, index) of objects" :key="index">
              <div class="card">
                <div class="card__top">
                  <div class="card__slider">
                    <div class="card__slider-item">
                      <img :src="'http://rl-property.com/'+object.mainPhoto" alt="аппартамены">
                    </div>
                  </div>
                </div>
                <div class="card__content">
                  <div class="card__body">
                    <h3 class="card__title">{{object.titleRu}}</h3>
                    <ul class="card__l">
                      <li>Жилая площадь: {{object.lifeArea}}</li>
                      <li>Спален: {{object.badroom}}</li>
                      <li>До пляжа: {{object.distanceToBitch}}</li>
                    </ul>
                  </div>
                  <div class="card__footer">
                    <button
                      type="button"
                      class="card__btn btn btn_primary"
                      @click="update(object._id)"
                    >Обновить</button>
                  </div>
                </div>
              </div>
            </li>
          </ul>
          <div v-if="updatePanel">
            <el-carousel
              height="600px"
              :autoplay="false"
              trigger="click"
              indicator-position="outside"
              arrow="always"
            >
              <el-carousel-item>
                <div class="content">
                  <h3>
                    <i class="fa fa-arrow-left" @click="updatePanel = false"></i> Главная информация
                  </h3>
                  <el-input
                    placeholder="Название объекта RU"
                    v-model="updatedObject.titleRu"
                    clearable
                    class="input_articles"
                  ></el-input>
                  <el-input
                    placeholder="Название объекта EN"
                    v-model="updatedObject.titleEn"
                    clearable
                    class="input_articles"
                  ></el-input>
                  <el-input
                    placeholder="Цена ฿"
                    v-model="updatedObject.price.priceSales"
                    clearable
                    class="input_articles"
                    v-if="updatedObject.typeOfObject !== 'rent'"
                    type="number"
                  ></el-input>
                  <el-select
                    v-model="updatedObject.typeOfObject"
                    placeholder="Тип объекта"
                    class="input_articles"
                  >
                    <el-option
                      v-for="item in optionsType"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    ></el-option>
                  </el-select>
                  <el-select
                    v-model="updatedObject.location"
                    placeholder="Локация"
                    class="input_articles"
                  >
                    <el-option
                      v-for="item in optionsLocation"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    ></el-option>
                  </el-select>
                  <div v-if="!image">
                    <input type="file" @change="onFileChange">
                  </div>
                  <div v-else>
                    <img :src="image" class="preloadImage">
                    <button @click="removeImage">Remove image</button>
                  </div>
                </div>
              </el-carousel-item>
              <el-carousel-item>
                <div class="content">
                  <h3>Описание</h3>
                  <el-input
                    type="textarea"
                    :rows="2"
                    placeholder="Описание RU"
                    v-model="updatedObject.descriptionRu"
                  ></el-input>
                  <el-input
                    type="textarea"
                    :rows="2"
                    placeholder="Описание EN"
                    v-model="updatedObject.descriptionEn"
                  ></el-input>
                  <el-input
                    placeholder="Расположение"
                    v-model="updatedObject.address"
                    clearable
                    class="input_articles"
                  ></el-input>
                  <el-select
                    v-model="updatedObject.stage"
                    placeholder="Стадия готовности"
                    class="input_articles"
                  >
                    <el-option
                      v-for="item in options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    ></el-option>
                  </el-select>
                  <el-input
                    placeholder="Расположение на карте х"
                    v-model="updatedObject.coordinat.x"
                    clearable
                    class="input_articles"
                  ></el-input>
                  <el-input
                    placeholder="Расположение на карте у"
                    v-model="updatedObject.coordinat.y"
                    clearable
                    class="input_articles"
                  ></el-input>
                </div>
              </el-carousel-item>
              <el-carousel-item>
                <div class="content">
                  <h3>Информация об объекте</h3>
                  <el-input
                    placeholder="Этажность"
                    v-model="updatedObject.floor"
                    clearable
                    class="input_articles"
                  ></el-input>
                  <el-input
                    placeholder="Комнат"
                    v-model="updatedObject.rooms"
                    clearable
                    class="input_articles"
                  ></el-input>
                  <el-input
                    placeholder="Количество спален"
                    v-model="updatedObject.badroom"
                    clearable
                    class="input_articles"
                  ></el-input>
                  <el-input
                    placeholder="Количество ванных комнат"
                    v-model="updatedObject.bathroom"
                    clearable
                    class="input_articles"
                  ></el-input>
                  <el-input
                    placeholder="Растояние до пляжа"
                    v-model="updatedObject.distanсeToBitch"
                    clearable
                    class="input_articles"
                  ></el-input>
                  <el-input
                    placeholder="Растояние до аэропорта"
                    v-model="updatedObject.distanсeToAiroport"
                    clearable
                    class="input_articles"
                  ></el-input>
                  <el-input
                    placeholder="Общая площадь"
                    v-model="updatedObject.area"
                    clearable
                    class="input_articles"
                  ></el-input>
                  <el-input
                    placeholder="Площать земельного участка"
                    v-model="updatedObject.landArea"
                    clearable
                    class="input_articles"
                  ></el-input>
                  <el-input
                    placeholder="Жилая площадь"
                    v-model="updatedObject.lifeArea"
                    clearable
                    class="input_articles"
                  ></el-input>
                  <el-input
                    placeholder="Размеры басейна"
                    v-model="updatedObject.areaOfPool"
                    clearable
                    class="input_articles"
                  ></el-input>
                </div>
              </el-carousel-item>
              <el-carousel-item>
                <div class="content">
                  <h3>Фото</h3>
                  <input type="file" multiple @change="onPhotoChange">
                  <el-button type="primary" @click="updateObject(updatedObject)" class="input_articles">Update</el-button>
                </div>
              </el-carousel-item>
            </el-carousel>
          </div>
        </el-tab-pane>
        <el-tab-pane label="Delete" name="third">
          <ul class="cards__list cards__list-tab js-content is-active" data-tab="0">
            <li class="cards__item" v-for="(object, index) of objects" :key="index">
              <div class="card">
                <div class="card__top">
                  <div class="card__slider">
                    <div class="card__slider-item">
                      <img :src="'http://rl-property.com/'+object.mainPhoto" alt="аппартамены">
                    </div>
                  </div>
                </div>
                <div class="card__content">
                  <div class="card__body">
                    <h3 class="card__title">{{object.titleRu}}</h3>
                    <ul class="card__l">
                      <li>Жилая площадь: {{object.lifeArea}}</li>
                      <li>Спален: {{object.badroom}}</li>
                      <li>До пляжа: {{object.distanceToBitch}}</li>
                    </ul>
                  </div>
                  <div class="card__footer">
                    <!-- <div class="price price__bl">{{getPriceCurrency(object) === 'THB' ? '&#3647;' : '$'}} {{getPrice(object)}} </div> -->
                    <button
                      type="button"
                      class="card__btn btn btn_danger"
                      @click="deleteObject(object._id)"
                    >Удалить</button>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </el-tab-pane>
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
      objects: [],
      newObj: {
        nameOfObjectRU: "",
        nameOfObjectEN: "",
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
        descriptionRU: "",
        descriptionEN: "",
        address: "",
        stage: "",
        typeOfObject: "",
        coordinat: {
          x: "",
          y: ""
        },
        location: ""
      },
      image: "",
      photos: [],
      options: [
        {
          value: "underconstruction",
          label: "На этапе строительства"
        },
        {
          value: "secondarymarket",
          label: "Вторичный рынок"
        },
        {
          value: "none",
          label: "Сдан в эксплуатацию"
        }
      ],
      optionsType: [
        {
          value: "rent",
          label: "Аренда"
        },
        {
          value: "sales",
          label: "Продажа"
        },
        {
          value: "all",
          label: "Оба типа"
        }
      ],
      optionsLocation: [
        {
          value: "bang-tao",
          label: "BANG TAO"
        },
        {
          value: "laguna",
          label: "LAGUNA"
        },
        {
          value: "nai-thon",
          label: "NAI THON"
        },
        {
          value: "maikhao",
          label: "MAIKHAO"
        },
        {
          value: "nai-harn",
          label: "NAI HARN"
        },
        {
          value: "rawai",
          label: "RAWAI"
        },
        {
          value: "surin",
          label: "SURIN"
        },
        {
          value: "kamala",
          label: "KAMALA"
        },
        {
          value: "patong",
          label: "PATONG"
        },
        {
          value: "kata",
          label: "KATA"
        },
        {
          value: "cape-yamu",
          label: "CAPE YAMU"
        }
      ],
      updatePanel: false,
      updatedObject: {}
    };
  },
  methods: {
    update(id) {
      this.updatePanel = true;
      this.$axios
        .get(`http://rl-property.com/api/get-object-by-id/${id}`)
        .then(response => {
          this.updatedObject = response.data;
          if (
            this.updatedObject.sales === "true" &&
            this.updatedObject.rent === "true"
          ) {
            this.updatedObject.typeOfObject = "all";
          } else if (
            this.updatedObject.sales === "true" &&
            this.updatedObject.rent === "false"
          ) {
            this.updatedObject.typeOfObject = "sales";
          } else {
            this.updatedObject.typeOfObject = "rent";
          }
          if (this.updatedObject.stage === "1") {
            this.updatedObject.stage = "none";
          }
          // if(!this.updateObject.price){
          //   this.updateObject.price.priceSales = "";
          // }
          this.image = updatedObject.mainPhoto;
          this.photos = updatedObject.photo;
          console.log(this.image, this.photos)
          this.axios.get(`http://localohost:8080/${this.updatedObject.mainPhoto}`).then(response => {
            console.log(response)
          })
          console.log(this.updatedObject, this.image);
        });
    },
    removeImage(){
      this.image = '';
    },
    updateObject(object) {
      let data = this.updatedObject;
      data.image = this.updatedObject.mainPhoto;
      data.photo = this.updatedObject.photo;
      console.log(data)
      this.$axios
        .put("http://rl-property.com/api/update-object", data)
        .then(response => {
          console.log(response);
        });
    },
    onFileChange(e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      this.createImage(files[0]);
    },
    onPhotoChange(e) {
      this.photos = [];
      console.log(e.target.files);
      for (let i = 0; i < e.target.files.length; i++) {
        this.createPhoto(e.target.files[i]);
        console.log(this.photos);
      }
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
    createPhoto(file) {
      var image = new Image();
      var reader = new FileReader();
      var vm = this;

      reader.onload = e => {
        vm.image = e.target.result;
        this.photos.push(vm.image);
      };
      reader.readAsDataURL(file);
    },
    create() {
      let data = this.newObj;
      data.image = this.image;
      data.photo = this.photos;
      this.$axios
        .post("http://rl-property.com/api/create-object", data)
        .then(response => {
          console.log(response);
        });
    },
    getObjects() {
      this.$axios
        .get("http://rl-property.com/api/get-objects")
        .then(response => {
          this.objects = response.data.reverse();
        });
    },
    deleteObject(id) {
      this.$axios
        .delete("http://rl-property.com/api/delete-object/" + id)
        .then(response => {
          console.log(response);
          this.getObjects();
        });
    }
  },
  mounted() {
    this.getObjects();
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
.el-carousel__item .content {
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 50px 100px;
}
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.preloadImage {
  width: 300px;
  height: 150px;
}
</style>
