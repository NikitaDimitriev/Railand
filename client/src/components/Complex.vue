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
                <h3>Main info Complex</h3>
                <el-input
                  placeholder="Title RU"
                  v-model="newComplex.nameOfObjectRU"
                  clearable
                  class="input_articles"
                ></el-input>
                <el-input
                  placeholder="Title EN"
                  v-model="newComplex.nameOfObjectEN"
                  clearable
                  class="input_articles"
                ></el-input>
                <el-select
                  v-model="newComplex.location"
                  placeholder="Location"
                  class="input_articles"
                >
                  <el-option
                    v-for="item in optionsLocation"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
                <el-select
                  v-model="newComplex.type"
                  placeholder="Property type"
                  class="input_articles"
                >
                  <el-option
                    v-for="item in types"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
                <el-checkbox v-model="newComplex.active">Active</el-checkbox>
                <div v-if="!image" style="font-size: 18px; margin-top: 45px">
                  <label for="image" class="fileInput">Add main photo</label>
                  <input type="file" @change="onFileChange" id="image" style="visibility: hidden">
                </div>
                <div v-else>
                  <img :src="image" class="preloadImage">
                  <button @click="removeImage">Remove image</button>
                </div>
              </div>
            </el-carousel-item>
            <el-carousel-item>
              <div class="content">
                <h3>Description</h3>
                <el-input
                  type="textarea"
                  :rows="2"
                  placeholder="Description RU"
                  v-model="newComplex.descriptionRU"
                ></el-input>
                <el-input
                  type="textarea"
                  :rows="2"
                  placeholder="Description EN"
                  v-model="newComplex.descriptionEN"
                ></el-input>
                <el-input
                  placeholder="Address"
                  v-model="newComplex.address"
                  clearable
                  class="input_articles"
                ></el-input>
                <el-input
                  placeholder="Position at map х"
                  v-model="newComplex.coordinat.x"
                  clearable
                  class="input_articles"
                  type="number"
                ></el-input>
                <el-input
                  placeholder="Position at map у"
                  v-model="newComplex.coordinat.y"
                  clearable
                  class="input_articles"
                  type="number"
                ></el-input>
                <el-input
                  placeholder="Video link"
                  v-model="newComplex.video"
                  clearable
                  class="input_articles"
                ></el-input>
              </div>
            </el-carousel-item>
            <el-carousel-item>
              <div class="content">
                <h3>About object</h3>
                <el-input placeholder="Code" v-model="generedCode" clearable class="input_articles"></el-input>
                <el-input
                  placeholder="Distance to beach"
                  v-model="newComplex.distanсeToBitch"
                  clearable
                  class="input_articles"
                ></el-input>
                <el-input
                  placeholder="Distance to airport"
                  v-model="newComplex.distanсeToAiroport"
                  clearable
                  class="input_articles"
                ></el-input>
              </div>
            </el-carousel-item>
            <el-carousel-item>
              <div class="content">
                <h3>Photo</h3>
                <div v-if="!photos.length">
                  <label for="newFile" class="fileInput">Add photo</label>
                  <input
                    type="file"
                    multiple
                    @change="onPhotoChange"
                    id="newFile"
                    style="visibility: hidden"
                  >
                </div>
                <div v-if="photos">
                  <div v-for="(photo, index) in photos" :key="index" class="imageContent">
                    <img :src="photo" @click="removePhoto(index)" class="preloadImage">
                  </div>

                  <el-button
                    v-if="photos.length"
                    type="primary"
                    @click="removePhotos"
                    class="input_articles"
                  >Remove photos</el-button>
                </div>
              </div>
            </el-carousel-item>
            <el-carousel-item style="overflow-y:scroll">
              <div class="content">
                <h3>Add Object to complex</h3>
                <el-input placeholder="search..." v-model="searchForComplex"></el-input>
                <ul class="cards__list cards__list-tab js-content is-active" data-tab="0">
                  <li
                    class="cards__item"
                    v-for="(object, index) of objectsForComplex"
                    :key="index"
                    v-if="!searchedForComplex.length"
                  >
                    <div class="card">
                      <div class="card__top">
                        <div class="card__slider">
                          <div class="card__slider-item">
                            <img
                              :src="'http://rl-property.com/'+object.mainPhoto"
                              alt="аппартамены"
                            >
                          </div>
                        </div>
                      </div>
                      <div class="card__content">
                        <div class="card__body">
                          <h3 class="card__title">{{object.titleRu}}</h3>
                          <ul class="card__l">
                            <li>Living area: {{object.lifeArea}}</li>
                            <li>Badroom: {{object.badroom}}</li>
                            <li>Distance to beatch: {{object.distanceToBitch}}</li>
                          </ul>
                        </div>
                        <div class="card__footer">
                          <!-- <div class="price price__bl">{{getPriceCurrency(object) === 'THB' ? '&#3647;' : '$'}} {{getPrice(object)}} </div> -->
                          <button
                            type="button"
                            class="card__btn btn btn_danger"
                            @click="addObject(object._id, object)"
                          >Add</button>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li
                    class="cards__item"
                    v-for="(object, index) of searchedForComplex"
                    :key="index"
                    v-if="searchedForComplex"
                  >
                    <div class="card">
                      <div class="card__top">
                        <div class="card__slider">
                          <div class="card__slider-item">
                            <img
                              :src="'http://rl-property.com/'+object.mainPhoto"
                              alt="аппартамены"
                            >
                          </div>
                        </div>
                      </div>
                      <div class="card__content">
                        <div class="card__body">
                          <h3 class="card__title">{{object.titleRu}}</h3>
                          <ul class="card__l">
                            <li>Living area: {{object.lifeArea}}</li>
                            <li>Badroom: {{object.badroom}}</li>
                            <li>Distance to beach: {{object.distanceToBitch}}</li>
                          </ul>
                        </div>
                        <div class="card__footer">
                          <button
                            type="button"
                            class="card__btn btn btn_danger"
                            @click="deleteObject(object._id, object)"
                          >Delete</button>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </el-carousel-item>
            <el-carousel-item>
              <div class="content">
                <h3>Admin info</h3>
                <el-input
                  placeholder="Owner"
                  v-model="newComplex.adminInfo.owner"
                  clearable
                  class="input_articles"
                ></el-input>
                <el-input
                  placeholder="Address"
                  v-model="newComplex.adminInfo.address"
                  clearable
                  class="input_articles"
                ></el-input>
                <el-input
                  placeholder="Owner contacts"
                  v-model="newComplex.adminInfo.ownerContacts"
                  clearable
                  class="input_articles"
                ></el-input>
                <el-input
                  type="textarea"
                  placeholder="Comments"
                  v-model="newComplex.adminInfo.comments"
                ></el-input>
              </div>
            </el-carousel-item>
          </el-carousel>
          <el-button type="primary" @click="create()" class="input_articles">Create</el-button>
                <ul class="cards__list cards__list-tab js-content is-active" data-tab="0">
                  <li
                    class="cards__item"
                    v-for="(object, index) of addedObjects"
                    :key="index"
                  >
                    <div class="card">
                      <div class="card__top">
                        <div class="card__slider">
                          <div class="card__slider-item">
                            <img
                              :src="'http://rl-property.com/'+object.mainPhoto"
                              alt="аппартамены"
                            >
                          </div>
                        </div>
                      </div>
                      <div class="card__content">
                        <div class="card__body">
                          <h3 class="card__title">{{object.titleRu}}</h3>
                          <ul class="card__l">
                            <li>Living area: {{object.lifeArea}}</li>
                            <li>Badroom: {{object.badroom}}</li>
                            <li>Distance to beatch: {{object.distanceToBitch}}</li>
                          </ul>
                        </div>
                        <div class="card__footer">
                          <!-- <div class="price price__bl">{{getPriceCurrency(object) === 'THB' ? '&#3647;' : '$'}} {{getPrice(object)}} </div> -->
                          <button
                            type="button"
                            class="card__btn btn btn_danger"
                            @click="addObject(object._id)"
                          >Add</button>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
        </el-tab-pane>
        <el-tab-pane label="Update" name="second" @click="removeImage()">
          <el-input placeholder="search..." v-model="search" v-if="!updatePanel"></el-input>
          <ul
            class="cards__list cards__list-tab js-content is-active"
            data-tab="0"
            v-if="!updatePanel"
          >
            <li
              class="cards__item"
              v-for="(object, index) of objects"
              :key="index"
              v-if="!searched.length"
            >
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
                      <li>Living area: {{object.lifeArea}}</li>
                      <li>Badroom: {{object.badroom}}</li>
                      <li>Distance to beach: {{object.distanceToBitch}}</li>
                    </ul>
                  </div>
                  <div class="card__footer">
                    <button
                      type="button"
                      class="card__btn btn btn_primary"
                      @click="update(object._id)"
                    >Update</button>
                  </div>
                </div>
              </div>
            </li>
            <li
              class="cards__item"
              v-for="(object, index) of searched"
              :key="index"
              v-if="searched"
            >
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
                      <li>Living area: {{object.lifeArea}}</li>
                      <li>Badroom: {{object.badroom}}</li>
                      <li>Distance to beach: {{object.distanceToBitch}}</li>
                    </ul>
                  </div>
                  <div class="card__footer">
                    <button
                      type="button"
                      class="card__btn btn btn_primary"
                      @click="update(object._id)"
                    >Update</button>
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
                    <i class="fa fa-arrow-left" @click="updatePanel = false"></i> Main info Complex
                  </h3>
                  <el-input
                    placeholder="Title RU"
                    v-model="updatedObject.titleRu"
                    clearable
                    class="input_articles"
                  ></el-input>
                  <el-input
                    placeholder="Title EN"
                    v-model="updatedObject.titleEn"
                    clearable
                    class="input_articles"
                  ></el-input>
                  <el-select
                    v-model="updatedObject.location"
                    placeholder="Location"
                    class="input_articles"
                  >
                    <el-option
                      v-for="item in optionsLocation"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    ></el-option>
                  </el-select>
                  <el-select
                    v-model="typeObjectUpdate"
                    placeholder="Property type"
                    class="input_articles"
                  >
                    <el-option
                      v-for="item in types"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    ></el-option>
                  </el-select>
                  <el-checkbox v-model="updatedObject.active">Active</el-checkbox>
                  <div v-if="!image" style="font-size:18px">
                    <label for="imageUpdate" class="fileInput">Add main photo</label>
                    <input
                      type="file"
                      @change="onFileChange"
                      id="imageUpdate"
                      style="visibility: hidden"
                    >
                  </div>
                  <div v-else>
                    <img :src="`http://rl-property.com/${image}`" class="preloadImage">
                    <button @click="removeImage">Remove image</button>
                  </div>
                </div>
              </el-carousel-item>
              <el-carousel-item>
                <div class="content">
                  <h3>Description</h3>
                  <el-input
                    type="textarea"
                    :rows="5"
                    placeholder="Description RU"
                    v-model="updatedObject.descriptionRu"
                  ></el-input>
                  <el-input
                    type="textarea"
                    :rows="5"
                    placeholder="Description EN"
                    v-model="updatedObject.descriptionEn"
                  ></el-input>
                  <el-input
                    placeholder="Address"
                    v-model="updatedObject.address"
                    clearable
                    class="input_articles"
                  ></el-input>
                  <el-input
                    placeholder="Position at map х"
                    v-model="updatedObject.coordinat.x"
                    clearable
                    class="input_articles"
                  ></el-input>
                  <el-input
                    placeholder="Position at map у"
                    v-model="updatedObject.coordinat.y"
                    clearable
                    class="input_articles"
                  ></el-input>
                  <el-input
                    placeholder="Video link"
                    v-model="updatedObject.video"
                    clearable
                    class="input_articles"
                  ></el-input>
                </div>
              </el-carousel-item>
              <el-carousel-item>
                <div class="content">
                  <h3>About complex</h3>
                  <el-input
                    placeholder="code"
                    v-model="updatedObject.code"
                    clearable
                    class="input_articles"
                  ></el-input>

                  <el-input
                    placeholder="Distance to beach"
                    v-model="updatedObject.distanсeToBitch"
                    clearable
                    class="input_articles"
                  ></el-input>
                  <el-input
                    placeholder="Distance to airport"
                    v-model="updatedObject.distanсeToAiroport"
                    clearable
                    class="input_articles"
                  ></el-input>
                </div>
              </el-carousel-item>
              <el-carousel-item>
                <div class="content">
                  <h3>Photo</h3>
                  <div v-if="!photos.length">
                    <label for="newFile" class="fileInput">Add photo</label>
                    <input
                      type="file"
                      multiple
                      @change="onPhotoChange"
                      id="newFile"
                      style="visibility: hidden"
                    >
                  </div>
                  <div v-if="photos">
                    <div v-for="(photo, index) in photos" :key="index" class="imageContent">
                      <img :src="`http://rl-property.com/${photo}`" class="preloadImage">
                    </div>
                  </div>
                  <el-button
                    v-if="photos.length"
                    type="primary"
                    @click="removePhotos"
                    class="input_articles"
                  >Remove photos</el-button>
                </div>
              </el-carousel-item>
              <el-carousel-item>
                <div class="content">
                  <h3>Admin info</h3>
                  <el-input
                    placeholder="Owner"
                    v-model="updatedObject.adminInfo.owner"
                    clearable
                    class="input_articles"
                  ></el-input>
                  <el-input
                    placeholder="Adress"
                    v-model="updatedObject.adminInfo.address"
                    clearable
                    class="input_articles"
                  ></el-input>
                  <el-input
                    placeholder="Owner contacts"
                    v-model="updatedObject.adminInfo.ownerContacts"
                    clearable
                    class="input_articles"
                  ></el-input>
                  <el-input
                    type="textarea"
                    placeholder="Comments"
                    v-model="updatedObject.adminInfo.comments"
                  ></el-input>
                </div>
              </el-carousel-item>
            </el-carousel>
            <el-button
              type="primary"
              @click="updateObject(updatedObject)"
              class="input_articles"
            >Update</el-button>
          </div>
        </el-tab-pane>
        <el-tab-pane label="Delete" name="third">
          <el-input placeholder="search..." v-model="search"></el-input>
          <el-select
            v-model="searchActive"
            placeholder="Active filter"
            class="input_articles"
            @change="searching()"
          >
            <el-option
              v-for="item in [{label:'Active filter', value:null},{label:'Active', value:true},{label:'Non Active', value:false}]"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
          <el-select
            v-model="searchRentType"
            placeholder="Sales/Rent filter"
            class="input_articles"
            @change="searching()"
          >
            <el-option
              v-for="item in [{label:'Sales/Rent filter', value:'all'},{label:'Sales', value:'sales'},{label:'Rent', value:'rent'}]"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
          <el-select
            v-model="searchActive"
            placeholder="Property type"
            class="input_articles"
            @change="searching()"
          >
            <el-option
              v-for="item in [{label:'Active', value:true},{label:'Non Active', value:false}]"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
          <ul class="cards__list cards__list-tab js-content is-active" data-tab="0">
            <li
              class="cards__item"
              v-for="(object, index) of objects"
              :key="index"
              v-if="!searched.length"
            >
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
                      <li>Living area: {{object.lifeArea}}</li>
                      <li>Badroom: {{object.badroom}}</li>
                      <li>Distance to beatch: {{object.distanceToBitch}}</li>
                    </ul>
                  </div>
                  <div class="card__footer">
                    <!-- <div class="price price__bl">{{getPriceCurrency(object) === 'THB' ? '&#3647;' : '$'}} {{getPrice(object)}} </div> -->
                    <button
                      type="button"
                      class="card__btn btn btn_danger"
                      @click="deleteObject(object._id)"
                    >Delete</button>
                  </div>
                </div>
              </div>
            </li>
            <li
              class="cards__item"
              v-for="(object, index) of searched"
              :key="index"
              v-if="searched"
            >
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
                      <li>Living area: {{object.lifeArea}}</li>
                      <li>Badroom: {{object.badroom}}</li>
                      <li>Distance to beach: {{object.distanceToBitch}}</li>
                    </ul>
                  </div>
                  <div class="card__footer">
                    <button
                      type="button"
                      class="card__btn btn btn_danger"
                      @click="deleteObject(object._id)"
                    >Delete</button>
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
      searchActive: null,
      searchRentType: "all",
      typeObjectUpdate: "",
      objects: [],
      newComplex: {
        nameOfObjectRU: "",
        nameOfObjectEN: "",
        floor: "",
        currentFloor: "",
        badroom: "",
        bathroom: "",
        distanсeToBitch: "",
        distanсeToAiroport: "",
        area: "",
        landArea: "",
        lifeArea: "",
        areaOfPool: "",
        price: "",
        code: "",
        descriptionRU: "",
        descriptionEN: "",
        address: "",
        stage: "",
        typeOfObject: "",
        coordinat: {
          x: "",
          y: ""
        },
        location: "",
        type: "",
        adminInfo: {
          owner: "",
          ownerContacts: "",
          address: "",
          comments: ""
        },
        video: "",
        topOfList: false,
        active: true,
        objectsId: []
      },
      image: "",
      photos: [],
      options: [
        {
          value: "underconstruction",
          label: " Under construction"
        },
        {
          value: "secondarymarket",
          label: "Resale"
        },
        {
          value: "none",
          label: "Completed"
        }
      ],
      optionsType: [
        {
          value: "rent",
          label: "Rent"
        },
        {
          value: "sales",
          label: "Sale"
        },
        {
          value: "all",
          label: "Sale/Rent"
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
          value: "layan",
          label: "Layan"
        },
        {
          value: "cherngtalay",
          label: "Cherngtalay"
        },
        {
          value: "thalang",
          label: "Thalang"
        },
        {
          value: "nai-yang",
          label: "Nai Yang"
        },
        {
          value: "natai",
          label: "Natai"
        },
        {
          value: "maikhao",
          label: "Maikhao"
        },
        {
          value: "kalim",
          label: "Kalim"
        },
        {
          value: "karon",
          label: "Karon"
        },
        {
          value: "cape-panwa",
          label: "Cape Panwa"
        },
        {
          value: "cape-yamu",
          label: "Cape Yamu"
        },
        {
          value: "koh-kaew",
          label: "Koh Kaew"
        },
        {
          value: "ao-po",
          label: "Ao Po"
        },
        {
          value: "paklok",
          label: "Paklok"
        },
        {
          value: "kathu",
          label: "Kathu"
        },
        {
          value: "phuket-town",
          label: "Phuket Town"
        },
        {
          value: "chalong",
          label: "Chalong"
        }
      ],
      updatePanel: false,
      updatedObject: {},
      types: [
        {
          value: "villa",
          label: "Villa"
        },
        {
          value: "apartment",
          label: "Apartments"
        },
        {
          value: "house",
          label: "Townhouse"
        },
        {
          value: "land",
          label: "Land"
        }
      ],
      search: "",
      searched: [],
      generedCode: 1111,
      price: "",
      objectsForComplex: [],
      allObjects:[],
      searchForComplex: "",
      searchedForComplex:[],
      addedObjects:[]
    };
  },
  watch: {
    search(v) {
      this.searching();
    },
    searchForComplex(v) {
      this.searchingForComplex();
    }
  },
  methods: {
    addObject(id, object) {
      if (this.newComplex.objectsId.includes(id)) {
        this.arrayRemove(this.newComplex.objectsId, id);
        this.arrayRemove(this.addObject, object)
      } else {
        console.log(object)
        this.newComplex.objectsId.push(id);
        this.addedObjects.push(object)
      }
    },
    getObjectsForComplex() {
      this.$axios
        .get("http://rl-property.com/api/get-objects")
        .then(response => {
          this.objectsForComplex = response.data.reverse();
        });
    },
    arrayRemove(arr, value) {
      return arr.filter(function(ele) {
        return ele != value;
      });
    },
    searchingForComplex() {
      this.searchedForComplex = [];
      if (this.searchForComplex.length) {
        for (let i = 0; i < this.objectsForComplex.length; i++) {
          if (
            this.objectsForComplex[i].titleRu
              .toLowerCase()
              .includes(this.searchForComplex.toLowerCase())
          ) {
            this.searchedForComplex.push(this.objectsForComplex[i]);
          }
        }
      }
    },
    searching() {
      this.searched = [];
      if (this.search.length) {
        for (let i = 0; i < this.objects.length; i++) {
          if (
            this.objects[i].titleRu
              .toLowerCase()
              .includes(this.search.toLowerCase())
          ) {
            this.searched.push(this.objects[i]);
          }
        }
      }
      if (this.searchActive !== null && !this.searched.length) {
        for (let i = 0; i < this.objects.length; i++) {
          if (this.objects[i].active === this.searchActive) {
            this.searched.push(this.objects[i]);
          }
        }
      } else if (this.searchActive !== null && this.searched.length) {
        for (let i = 0; i < this.searched.length; i++) {
          if (this.searched[i].active === this.searchActive) {
            this.searched.push(this.searched[i]);
          }
        }
      }
      if (this.searchRentType === "sales" && !this.searched.length) {
        console.log("search");
        for (let i = 0; i < this.objects.length; i++) {
          if (
            this.objects[i].sales === "true" &&
            this.objects[i].rent === "false"
          ) {
            this.searched.push(this.objects[i]);
          }
        }
        console.log(this.searched);
      }
      if (this.searchRentType === "rent" && !this.searched.length) {
        console.log("search");
        for (let i = 0; i < this.objects.length; i++) {
          if (
            this.objects[i].sales === "false" &&
            this.objects[i].rent === "rent"
          ) {
            this.searched.push(this.objects[i]);
          }
        }
        console.log(this.searched);
      }
      if (this.searchRentType === "all" && !this.searched.length) {
        console.log("search");
        for (let i = 0; i < this.objects.length; i++) {
          this.searched.push(this.objects[i]);
        }
        console.log(this.searched);
      }
    },
    update(id) {
      this.image = "";
      this.updatePanel = true;
      this.$axios
        .get(`http://rl-property.com/api/get-complex-by-id/${id}`)
        .then(response => {
          this.updatedObject = Object.assign({}, response.data);
          this.typeObjectUpdate = response.data.typeOfObject;
          this.image = this.updatedObject.mainPhoto;
          this.photos = this.updatedObject.photo;
          console.log(this.image, this.photos);
        });
    },
    removeImage() {
      this.image = "";
    },
    removePhotos() {
      this.photos = [];
    },
    updateObject(object) {
      let data = this.updatedObject;
      data.image = this.image;
      console.log(this.photos);
      data.photo = this.photos;
      data.type = this.typeObjectUpdate;
      console.log(data);
      this.$axios
        .put("http://rl-property.com/api/update-complex", data)
        .then(response => {
          this.$message({
            type: "success",
            message: `Complex was updated`
          });
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
      let data = this.newComplex;
      data.image = this.image;
      data.photo = this.photos;
      data.code = this.generedCode;
      this.$axios
        .post("http://rl-property.com/api/create-complex", data)
        .then(response => {
          this.$message({
            type: "success",
            message: `Object was created`
          });
          (this.newComplex = {
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
            code: "",
            descriptionRU: "",
            descriptionEN: "",
            address: "",
            stage: "",
            typeOfObject: "",
            coordinat: {
              x: "",
              y: ""
            },
            location: "",
            type: "",
            adminInfo: {
              owner: "",
              ownerContacts: "",
              address: "",
              comments: ""
            },
            video: "",
            currentFloor: "",
            objectsId:[]
          }),
            (this.image = ""),
            (this.photos = []),
            (this.price = ""),
            (this.addObject=[]);
        });
      this.getObjects();
    },
    getObjects() {
      this.$axios
        .get("http://rl-property.com/api/get-complex")
        .then(response => {
          this.objects = response.data.reverse();
          console.log(this.objects.length);
          this.generedCode += this.objects.length;
          console.log(this.generedCode);
        });
    },
    deleteObject(id) {
      this.$axios
        .delete("http://rl-property.com/api/delete-complex/" + id)
        .then(response => {
          this.$message({
            type: "success",
            message: `Complex was deleted`
          });
          this.getObjects();
        });
    }
  },
  mounted() {
    this.getObjects();
    this.getObjectsForComplex();
    if (!localStorage.getItem("auth")) {
      this.$router.push({ path: "/admin" });
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
</style>
