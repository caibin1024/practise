<template>
  <div>
    <my-circle :diameter="diameter"></my-circle>
    <img src="../assets/test.jpg" id="img" />
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
    setCtx() {
      const img = document.getElementById("img");
      const canvas = document.createElement("canvas");
      canvas.width = this.diameter;
      canvas.height = this.diameter;
      this.ctx = canvas.getContext("2d");
      this.ctx.drawImage(img, 0, 0);

      console.log | this.ctx;
    },
  },
  mounted() {
    this.setCtx();
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
img {
  display: none;
}
</style>