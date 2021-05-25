<template>
  <div>
    <my-circle :diameter="1000"></my-circle>
  </div>
</template>


<script>
import myCircle from "../components/ideaOfCircle/MyCircle";
export default {
  data() {
    return {
      times: 5,
    };
  },
  components: { myCircle
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
</style>