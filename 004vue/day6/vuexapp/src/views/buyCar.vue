<template>
    <div>
        <h1>buyCar</h1>
        <h2>{{buyCar.produceNum}}</h2>
        <h2>{{$store.state.buyCar.produceNum}}</h2>
        <h3>{{breif}}</h3>
        <button @click="addProNum">添加衣服数量</button>
        <button @click="changeProNum">修改衣服数量</button>
    </div>
</template>

<script>
import {mapState, mapGetters, mapMutations, mapActions} from 'vuex'
export default {
computed: {
    ...mapState(['buyCar']),
    ...mapGetters(['breif'])
},
methods: {
    ...mapMutations(['addProNum']),
    ...mapActions(['changeProNum'])
}
}
</script>