<template>
    <van-tabbar v-model="tabActive" bind:change="onChange">
      <van-tabbar-item icon="wap-home-o" to="/">首页</van-tabbar-item>
      <van-tabbar-item icon="description">专题</van-tabbar-item>
      <van-tabbar-item icon="apps-o" to="/category">分类</van-tabbar-item>
      <van-tabbar-item icon="shopping-cart-o">购物车</van-tabbar-item>
      <van-tabbar-item icon="contact">我的</van-tabbar-item>
    </van-tabbar>
</template>

<script>
export default {
    data () {
        return {
            tabActive:0
        }
    },
    mounted () {
         switch (this.$router.path) {
                case "/category":
                    this.$router.path=2;
                    break;
                case "/":
                    this.$router.path=0;
                    break;
                default:
                    this.$router.path=0;
                    break;
            }
    }
}
</script>