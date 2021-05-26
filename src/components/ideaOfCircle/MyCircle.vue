<template>
  <div>
    <div id="parentCircle" v-if="!isShow" :style="styleObj" @click="isShow=!isShow"></div>
    <div id="childCircle" v-else>
      <my-circle :diameter="diameter/2"></my-circle>
      <my-circle :diameter="diameter/2"></my-circle>
      <my-circle :diameter="diameter/2"></my-circle>
      <my-circle :diameter="diameter/2"></my-circle>
    </div>
  </div>
</template>

<script>
export default {
  props: ["diameter"],
  name: "my-circle",
  data() {
    return {
      isShow: false,
      styleObj:{
        width:this.diameter+"px",
        height:this.diameter+"px"
      }
    };
  },
};
</script>

<style scoped>
#parentCircle {
  background-color: rgba(0, 0, 0, 1);
  border-radius: 50%;
}
</style>