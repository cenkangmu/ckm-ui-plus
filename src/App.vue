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
  &::-webkit-scrollbar{
    display: none;
  }
}
.block{
  margin-top: 5px;
  margin-bottom: 20px;
  padding: 20px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 0 15px 0 rgba(#000,.1);
  overflow: hidden;
}
.home-list {
  margin: 10px 0;
  background: $color8;
  font-size: 14px;
  color: $color3;
}
*::-webkit-scrollbar {/*滚动条整体样式*/
  width: 10px;     /*高宽分别对应横竖滚动条的尺寸*/
  height: 1px;
}

*::-webkit-scrollbar-thumb {/*滚动条里面小方块*/
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.15);
  background: #eee;
}

*::-webkit-scrollbar-track {/*滚动条里面轨道*/
  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.15);
  background: #fff;
  border-radius: 10px;
}
</style>
