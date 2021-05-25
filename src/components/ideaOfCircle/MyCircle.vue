<template>
<h1>{{diameter}}</h1>
  <div id="circle" @click="isShow=!isShow">
    <my-circle v-if="isShow"></my-circle>
    <my-circle v-if="isShow"></my-circle>
  </div>
</template>

<script>
export default {
  props: ['diameter'],
  name: "my-circle",
  data() {
    return {
      isShow: false,
    };
  },
};
</script>

<style scoped>
#circle {
  width: 500px;
  height: 500px;
  background-color: rgba(0, 0, 0, 0);
  border-radius: 50%;
}
</style>