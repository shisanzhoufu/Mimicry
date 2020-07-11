<template>
  <div class="home">
    <h1>点击数量：{{count}}</h1>
    <input type="button" value="增加点击数量" @click="addEvent">

    <!-- vuex的方式 -->
    <h2>vuex的方式</h2>

    <h1>点击数量：{{$store.state.num}}</h1>
    <input type="button" value="增加点击数量" @click="addAction">
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
  data () {
    return {
      count:0
    }
  },
  methods: {
    addEvent(){
      this.count++
    },
    addAction(){
      this.$store.commit('addNum')
    }
  }
}
</script>
