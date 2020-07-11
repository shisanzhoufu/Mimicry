<template>
  <div class="home">
    <div id="nav">
      <router-link to="/">Home</router-link> |  
      <router-link to="/about">About</router-link>|
      <router-link to="/news">News</router-link>|
      <router-link to="/weather">Weather</router-link>|
      <router-link to="/bignews">bignews</router-link>
    </div>
    <img alt="Vue logo" src="../assets/logo.png">
      <button @click="goEvent">跳转到新闻页面</button>

  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  methods: {
     goEvent(){
    //通过路径跳转
    // this.$router.push({
    //   path:'/news/123'
    // })
    this.$router.push({
      name:'news',
      params:{
        id:456
      },
      query:{
        username:'jack',
        password:'123'
      }
    })
  }
  }
 
}
</script>
