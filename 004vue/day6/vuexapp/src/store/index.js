import Vue from 'vue'
import Vuex from 'vuex'
import buyCar from './buyCar'

Vue.use(Vuex)

export default new Vuex.Store({
  //data
  state: {
    num:0,
    name:'jack',
    age:'20',
    sex:'boy'
  },
  getters:{
    reverseName(state){
      return state.name+state.age
    },
    mix(state){
      return 12345+state.name
    },
    mixs(state){
      return function(val){
        return val+state.name
      }
    }
  },
  //methods
  mutations: {
    addNum(state){
      state.num+=2
    },
    setNum(state,val){
      state.age=val
    }
  },
  //异步方法
  actions: {
  },
  //模块化
  modules: {
    buyCar
  }
})
