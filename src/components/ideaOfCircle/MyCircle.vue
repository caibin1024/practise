<template>
  <div>
    <div id="parentCircle" v-if="!isShow" :style="styleObj" @mouseover="division()"></div>
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
        backgroundColor: "green",
      },
    };
  },
  methods: {
    division() {
      if (this.diameter > 15) {
        this.isShow = !this.isShow;
      }
      this.getColor(event);
    },
    getColor(event) {
      const color = this.$store.getters.getColorByIndex([
        event.screenX,
        event.screenX,
      ]);
      this.styleObj.backgroundColor = `rgba(${color[0]},${color[1]},${color[2]},${color[3]})`;
    },
  },
};
</script>

<style scoped>
#parentCircle {
  border-radius: 50%;
}
.flex-row {
  display: flex;
  flex-direction: row;
}
.flex-col {
  display: flex;
  flex-direction: column;
}
</style>