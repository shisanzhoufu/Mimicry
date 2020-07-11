<template>
  <div class="container">
    <div>
            <h1>添加评论</h1>
        </div>
  

    <Add :addComment="addComment"/>
    <List :comments="comments" :deletComment="deletComment"/>
  </div>
  
</template>

<script>
import Add from './components/Add.vue'
import List from './components/List.vue'

export default {
  data(){
    return{
      name:'',
      content:'',
      comments:[
                   {id:Date.now(),name:'李白',content:'长安一片月，万户捣衣声'},
                   {id:Date.now(),name:'杜甫',content:'无边落木萧萧下，不尽长江滚滚来'},
                   {id:Date.now(),name:'辛弃疾',content:'蓦然回首,那人却在灯火阑珊处'}
               ]
    }
  },
  methods: {
    //添加评论
    addComment(comment){
      
      this.comments.unshift(comment)
    },

    //删除指定下标评论
    deletComment(index){
      this.comments.splice(index,1)
    }
  },
  components: {
    Add,
    List
  }
}
</script>

<style>

</style>
