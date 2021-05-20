<template>
  <div class="parentBox">
    <div class="subBox">
      <div class="childBox"></div>
      <div class="childBox"></div>
    </div>
    <div class="subBox">
      <div class="childBox"></div>
      <div class="childBox"></div>
    </div>
  </div>
</template>


<script>
export default {};
</script>

<style  scoped>
.parentBox {
  width: 600px;
  height: 600px;
  border: 4px solid #000;
  border-radius: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.subBox {
  display: flex;
  width: 100%;
  justify-content: space-around;
}
.childBox {
  width: 100px;
  height: 100px;
  border-radius: 50px;
  background-color: red;
  margin: 50px;
}
</style>