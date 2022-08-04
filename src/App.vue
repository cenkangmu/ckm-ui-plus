<template>
  <router-view/>
</template>
<script>

</script>
<style lang="scss">
*{
  padding: 0;
  margin: 0;
}
.page{
  position: fixed;
  left: 0;
  bottom: 0;
  right: 0;
  top: 0;
  overflow: auto;
  padding: 15px 20px;
  background: #f1f9ff;
}
.block{
  margin-top: 5px;
  margin-bottom: 20px;
  padding: 20px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 0 15px 0 rgba(#000,.1);
}
.home-list {
  margin: 10px 0;
  background: $color8;
  font-size: 14px;
  color: $color3;
}
</style>
