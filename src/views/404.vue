<template>
  <div class="body">
    <div class="title">404</div>
    <div class="content">找不到页面</div>
    <div class="content-english">Page not found</div>
    <router-link to="/" v-slot:default>
      <div class="btn">返回首页</div>
    </router-link>
  </div>

</template>

<script>
export default {
  name: "404"
}
</script>

<style scoped>
.body{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.title{
  font-size: 40px;
  color: #ffaa00;
  margin: 30px auto 0;
  animation: title 1.5s linear infinite;
}
.content{
  font-size: 20px;
  color: #ccc;
  margin: 10px auto;
}
.content-english{
  font-size: 30px;
  color: #ccc;
  margin: 10px auto;
}
.btn{
  line-height: 40px;
  padding: 0 50px;
  border-radius: 500px;
  background: #0073ff;
  color: #fff;
  font-size: 14px;
  margin-top: 20px;
}
@keyframes title {
  0%{
    transform: rotate(10deg);
  }
  10%{
    transform: rotate(-10deg);
  }
  20%{
    transform: rotate(10deg);
  }
  30%{
    transform: rotate(-10deg);
  }
  40%{
    transform: rotate(10deg);
  }
  50%{
    transform: rotate(-10deg);
  }
  60%{
    transform: rotate(10deg);
  }
  70%{
    transform: rotate(0deg);
  }

}
</style>