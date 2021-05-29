<template>
  <div>
    <canvas ref="canvas" :width="diameter" :height="diameter"></canvas>

    <my-circle
      :diameter="diameter"
      id="mycircle"
      :left="left"
      :top="top"
    ></my-circle>
    <img src="../assets/test.jpg" ref="lol" @load="initCtx" />
  </div>
</template>


<script>
import myCircle from "../components/ideaOfCircle/MyCircle";
export default {
  data() {
    return {
      left:0,
      top:0,
      diameter: 800,
      ctx: null,
    };
  },
  components: { myCircle },
  methods: {
    initCtx() {
      this.ctx = this.$refs.canvas.getContext("2d");
      this.ctx.drawImage(this.$refs.lol, 0, 0);
      this.$store.commit("setCtx", this.ctx);
    },
  },
};
</script>

<style scoped>
.cricle {
  width: 10px;
  height: 10px;
  background-color: green;
  border-radius: 5px;
}
img,
canvas {
  display: none;
}
</style>