<template>
    <div class="header">
        <div class="top-header">
          <div class="top-header-left">
            <el-select v-model="phoneNumber" style="width: 50%">
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
            <el-select v-model="language" style="width: 30%">
                <el-option
                    v-for="lang in languages"
                    :key="lang.value"
                    :label="lang.img"
                    :value="lang.value">
                    <template slot="prefix">
                        <img :src="lang.img" class="language-image">
                    </template>
                </el-option>
            </el-select>
            <el-select v-model="currency" style="width: 20%">
                <el-option
                    v-for="cur in currencies"
                    :key="cur.name"
                    :label="cur.label"
                    :value="cur.name">
                </el-option>
            </el-select>
            <div class="register-panel">
                <p style="margin-right: 5px">Регистрация | </p>
                <p>Войти</p>
            </div>
          </div>
        </div>
    </div>
</template>
<script>
export default {
  name: "Menu",
  data() {
    return {
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
        { name: "russian", img: "../../../static/Flag_of_Russia.svg" },
        { name: "eng", img: "../../../static/Flag_of_Russia.svg" }
      ],
      phoneNumber: "+66 84 84 22 111",
      language: "russian",
      currency: "$",
      currencies:[
          {label: "$", name:"usd"},
          {label: "€", name:"eur"},
          {label: "₽", name:"rub"},
          {label: "฿", name:"thb"}
      ]
    };
  }
};
</script>
<style>
.header {
  margin: 10px 125px 10px 125px;
  border-bottom: 1px solid #e5e5e5;
  font-weight: bold;
}
.top-header {
  display: flex;
  justify-content: space-between;
}
.icon {
  font-size: 24px;
  color: #bdbdbd;
}
.language-image {
  height: 24px;
  width: 24px;
}
.el-input__inner {
  border: none !important;
  font-weight: bold;
  color: #000;
  padding-right: 10px; 
}
.el-select {
  display: inline-block;
}
.register-panel{
    display: inline-flex;
}
</style>
