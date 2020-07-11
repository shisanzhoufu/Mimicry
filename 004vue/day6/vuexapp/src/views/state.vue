<template>
    <div>
        <h1>姓名：{{name}}</h1>
        <h2>性别：{{sex}}</h2>
        <h2>年龄：{{age}}</h2>
        <h3>颜色：{{greenMsg}}</h3>
        <!-- 普通方式 -->
        <!-- <input type="text" v-model="age"> -->

        <!-- 第一种映射方式绑定数据 -->
         <!-- <input type="text" :value="age" @input="changeValue"> -->
    </div>
</template>

<script>

import {mapState} from 'vuex'
export default {
    data () {
        return {
            color:'green'
        }
    },
//    computed: {
//         name:function(){
//         return this.$store.state.name
//     },
//     sex(){
//        return this.$store.state.sex
//     },
//     age:{
//         get(){
//         return this.$store.state.age
//         },
//         set(val){
//             this.$store.commit('setNum',val)
//         }
//     }
//    }

//  1.mapState 第一种映射方式
// computed: mapState([
//     'name',
//     'sex',
//     'age'
//     ]),
//     methods: {
//     changeValue(e){
//          this.$store.commit('setNum',e.target.value)
//     }
// }



//  2.mapState 第二种映射方式
// computed: mapState({
//     name:'name',
//     sex:(state)=>state.sex,
//     age:(state)=>state.age,
//     greenMsg:function(state){
//         return this.color+state.name
//     }
// })

//  3.mapState 第三种映射方式
computed:{
    reverse(){
        return this.color.splice('').reverse().join('')
    },
    ...mapState({
    name:'name',
    sex:(state)=>state.sex,
    age:(state)=>state.age,
    greenMsg:function(state){
        return this.color+state.name
    }
})
}

}



</script>