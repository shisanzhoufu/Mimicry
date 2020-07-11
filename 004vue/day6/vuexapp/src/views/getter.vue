<template>
<div>
    <h1>{{$store.getters.reverseName}}</h1>
    <h2>{{reverseName}}</h2>
    <h2>{{mix}}</h2>
    <h3>{{mixs}}</h3>
    --------------------------------------
    <h1>姓名：{{name}}</h1>
    <h2>性别：{{sex}}</h2>
    <h2>年龄：{{age}}</h2>
</div>
    
</template>
<script>
import {mapState,mapGetters} from 'vuex'
export default {

    //普通方法
    // computed: {
    //     reverseName(){
    //         return this.$store.getters.reverseName
    //     }
    // }

    //1.映射
    // computed: mapGetters([
    //     'reverseName',
    //     'mix'
    // ])
    
    //2.方法二
    computed: {
        mixs(){
            return this.$store.getters.mixs('99999')
        },
    ...mapGetters([
        'reverseName',
        'mix'
    ]),
    ...mapState([
        'name',
        'age',
        'sex'
    ])
    }
}
</script>