<template>
  <div>
    <div id="parentCircle" v-if="!isShow" :style="styleObj" @mouseover="division"></div>
    <div id="childCircle" v-else>
      <div class="flex-row">
        <div class="flex-col">
          <my-circle :diameter="diameter/2"></my-circle>
          <my-circle :diameter="diameter/2"></my-circle>
        </div>
        <div class="flex-col">
          <my-circle :diameter="diameter/2"></my-circle>
          <my-circle :diameter="diameter/2"></my-circle>
        </div>
      </div>
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
      styleObj: {
        width: this.diameter + "px",
        height: this.diameter + "px",
      },
    };
  },
  methods:{
    division(){
      if(this.diameter>15){
        this.isShow=!this.isShow
      }
    }
  }
};
</script>

<style scoped>
#parentCircle {
  background-color: rgba(0, 0, 0, 1);
  border-radius: 50%;
}
.flex-row{
  display: flex;
  flex-direction: row;
}
.flex-col{
  display: flex;
  flex-direction: column;
}
</style>