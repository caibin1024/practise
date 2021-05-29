<template>
  <div>
    <div id="parentCircle" v-if="!isShow" :style="styleObj" @mouseover="division" ></div>
    <div id="childCircle" v-else>
      <div class="flex-row">
        <div class="flex-col">
          <my-circle :diameter="diameter/2" :left="left" :top="top"></my-circle>
          <my-circle :diameter="diameter/2" :left="left+diameter/2" :top="top"></my-circle>
        </div>
        <div class="flex-col">
          <my-circle :diameter="diameter/2" :left="left" :top="top+diameter/2"></my-circle>
          <my-circle :diameter="diameter/2" :left="left+diameter/2" :top="top+diameter/2"></my-circle>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["diameter", "left", "top"],
  name: "my-circle",
  data() {
    return {
      isShow: false,
      styleObj: {
        width: this.diameter + "px",
        height: this.diameter + "px",
        backgroundColor: "#eee",
        borderRadius:"10%"
      },
    };
  },
  methods: {
    division() {
      if (this.diameter > 10) {
        this.isShow = !this.isShow;
      }
    },
    getColor() {
      const color = this.$store.getters.getColorByIndex([
        this.top,
        this.left,
      ]);
      this.styleObj.backgroundColor = `rgba(${color[0]},${color[1]},${color[2]},${color[3]})`;
    },
  },
  mounted(){
    this.getColor()
  }
};
</script>

<style scoped>

.flex-row {
  display: flex;
  flex-direction: row;
}
.flex-col {
  display: flex;
  flex-direction: column;
}
</style>