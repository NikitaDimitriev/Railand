<template>
    <div class="header">
        <div class="top-header">
          <div class="top-header-left">
            <el-select v-model="phoneNumber">
                <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                </el-option>
            </el-select>
            <a href="whatsapp://send?text=!&phone=+66848422111"><i class="fa fa-whatsapp icon"></i></a>
            <a href="viber://pa?chatURI=+66848422111"><i class="fa fa-volume-control-phone icon"></i></a>
            <a href=""><i class="fa fa-telegram icon"></i></a>
          </div>
          <div class="top-header-right">
            <el-select v-model="language">
                <el-option
                    v-for="lang in languages"
                    :key="lang.value"
                    :label="lang.img"
                    :value="lang.value">
                    <img :src="lang.img" class="language-image">
                </el-option>
            </el-select>
          </div>
        </div>
        <div class="bottom-header">
          <router-link to="/"><p class="menu-link">ГЛАВНАЯ</p></router-link>
          <p class="menu-link">НЕДВИЖЕМОСТЬ</p>
          <p class="menu-link">ВЛАДЕЛЬЦАМ</p>
          <p class="menu-link">ЖИЗНЬ НА ПХУКЕТЕ</p>
          <div class="logo">

          </div>
          <router-link to="/faq"><p class="menu-link">FAQ</p></router-link>
          <p class="menu-link">О НАС</p>
          <p class="menu-link">КОНТАКТЫ</p>
          <div class="button-green" @click="callModal()">
            ЗАПОЛНИТЬ ЗАЯВКУ
          </div>
        </div>
        <avra-modal
          v-model="activeModal"
          title="ЗАПОЛНИТЬ ЗАЯВКУ"
          @ok="okHandler()">

          <template slot="body">
            <h1>Hello</h1>
          </template>

        </avra-modal>
    </div>
</template>
<script>
import AvraModal from 'avra-modal'
export default {
  name: "Menu",
  components:{
    AvraModal
  },
  data() {
    return {
      activeModal: false,
      options: [
        {
          value: "+66 84 84 22 111",
          label: "+66 84 84 22 111"
        },
        {
          value: "+66 84 84 55 111",
          label: "+66 84 84 55 111"
        }
      ],
      languages: [
        { name: "russian", img: "../../../static/Flag_of_Russia.svg" }
      ],
      phoneNumber: "+66 84 84 22 111",
      language: "russian"
    };
  },
  methods:{
    callModal(){
      this.activeModal = true;
    }
  }
};
</script>
<style>
.header {
  margin: 10px 125px 10px 125px;
  font-weight: bold;
  /* position: fixed;
  top:0; */
}
.top-header {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #e5e5e5;
}
.icon {
  font-size: 24px;
  color: #bdbdbd;
}
.language-image {
  height: 24px;
  width: 24px;
}
.bottom-header {
  margin-top: 15px;
  display: flex;
  justify-content: space-around;
}
.logo {
  width: 20%;
}
.button-green {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  background: #6dc913;
  font-size: 12px;
  letter-spacing: 1px;
  color: #ffffff;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  cursor: pointer;
}
.button-green:hover{
  box-shadow: none;
}
.menu-link {
  cursor: pointer;
}
.menu-link:hover {
  color: #bdbdbd;
}
.router-link-exact-active{
  color: #bdbdbd;
}
</style>
