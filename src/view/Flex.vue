<template>
  <parent-box :childNum=childNum>
  </parent-box>
</template>


<script>
import parentBox from "../components/flex/ParentBox"
export default {
  data(){
    return{
      childNum:2
    }
  },
  components:{
    parentBox
  }

};
</script>

<style  scoped>



</style>