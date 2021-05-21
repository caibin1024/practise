<template>
  <div class="parentBox" :style="[styleObject]">
    <child-box v-for="count in childNum" :key="count"></child-box>
  </div>
</template>



<script>
import childBox from "./ChildBox";
export default {
  data() {
    return {
      styelTest:{
        width:'100px'
      },
      styleObject: {
        flexDirection: "",
        flexWrap: "",
        justifyContent: "",
        alignItem: "",
        alignContent: "",
      },

      flexDirection: ["row", "row-reverse", "column", "column-reverse"],
      flexWrap: ["nowrap", "wrap", "wrap-reverse"],
      justifyContent: [
        "flex-start",
        "flex-end",
        "center",
        "space-between",
        "space-around",
      ],
      alignItem: ["flex-start", "flex-end", "center", "baseline", "stretch"],
      alignContent: [
        "flex-start",
        "flex-end",
        "center",
        "space-between",
        "space-around",
        "stretch",
      ],
    };
  },
  props: {
    childNum: Number,
  },
  components: { childBox },
  methods:{
    init(){
      this.styleObject.flexDirection=this.flexDirection[0]
        this.styleObject.flexWrap=this.flexWrap[0]
        this.styleObject.justifyContent=this.justifyContent[0]
      this.styleObject.alignItem=this.alignItem[0]
     this.styleObject.alignContent=this.alignContent[0]
    }
  },
  created(){
    this.init()
  }
};
</script>
<style scoped>
.parentBox {
  width: 60PX;
  height: 60px;
  border: 1px solid #000;
  border-radius: 5px;
  display: flex;
  padding: 5px;
}
</style>