<template>
    <div class="header">
        <div class="top-header">
            <el-select v-model="phoneNumber">
                <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                </el-option>
            </el-select>
            <i class="fa fa-whatsapp icon"></i>
            <i class="fa fa-volume-control-phone"></i>
            <i class="fa fa-telegram icon"></i>
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
      phoneNumber: '+66 84 84 22 111'
    };
  }
};
</script>
<style>
.header {
  width: 100%;
  margin: 10px 125px 10px 125px;
}
.top-header{
    width: 30%;
    display: flex;
    justify-content: space-between;
}
.icon {
  color: #000000;
}
</style>
