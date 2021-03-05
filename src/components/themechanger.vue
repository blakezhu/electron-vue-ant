<template
  ><div class="theme">
    <div class="themeitem">
      <svg-icon
        icon-class="theme1"
        @click="changetheme(1)"
        class="themechanger"
      />
      <a-icon type="check" class="themecheck" v-show="themetype" />
      <p>默认模式</p>
    </div>
    <div class="themeitem">
      <svg-icon
        icon-class="theme2"
        @click="changetheme(2)"
        class="themechanger"
      />
      <a-icon type="check" class="themecheck" v-show="!themetype" />
      <p>暗黑模式</p>
    </div>
  </div>
</template>
<script>
import "@/assets/images/theme1.svg";
import "@/assets/images/theme2.svg";
export default {
  data() {
    return {
      themetype: true,
    };
  },
  methods: {
    changetheme(val) {
      if (val == 1) {
        this.themetype = true;
        this.themeChange("normal");
      } else {
        this.themetype = false;
        this.themeChange("dark");
      }
      console.log(this.themetype);
    },
  },
};
</script>
<style scoped>
.themechanger {
  width: 160px;
  height: 120px;
  margin: 5px 0px;
  cursor: pointer;
}
.theme {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.themeitem {
  position: relative;
}
.themecheck {
  cursor: pointer;
  position: absolute;
  width: 30px;
  top: 50px;
  right: 54px;
  font-size: 60px;
  color: #42b983;
}
</style>
