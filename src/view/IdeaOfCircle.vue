<template>
  <div>
    <canvas ref="canvas" :width="diameter" :height="diameter" ></canvas>
   
    <my-circle :diameter="diameter" ></my-circle>
    <img src="../assets/test.jpg" ref="lol" />
  </div>
</template>


<script>
import myCircle from "../components/ideaOfCircle/MyCircle";
export default {
  data() {
    return {
      diameter: 800,
      ctx: null,
    };
  },
  components: { myCircle },
  methods: {
    initCtx() {
      this.ctx = this.$refs.canvas.getContext("2d")
      this.ctx.drawImage(this.$refs.lol, 0, 0);
      console.log(this.ctx)
      console.log(this.ctx.getImageData(100, 100, 1, 1).data);
      this.$store.commit('setCtx', this.ctx)
      console.log(this.$store.state.ctx)
    },
  },
  mounted(){
   this.initCtx()
  }

};
</script>

<style scoped>
.cricle {
  width: 10px;
  height: 10px;
  background-color: green;
  border-radius: 5px;
}
img,canvas {
  display: none;
}
</style>