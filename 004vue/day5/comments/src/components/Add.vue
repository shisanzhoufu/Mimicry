<template>
  <div>
            <div class="form-group">
                <label for="">评论人：</label>
                <input type="text" class="form-control" v-model="name">
            </div>

            <div class="form-group">
                <label for="">评论内容：</label>
                <textarea class="form-control" v-model="content"></textarea>
            </div>

            <div class="form-group">
              
                <input type="button" value="发表评论" class="btn btn-primary" @click="add">
            </div>        
  </div>
</template>
 

<script>
import Item from './Item.vue'

export default {
  data(){
    return{
      name:'',
      content:''
    }
  },
  methods: {
    add(){ 
      //检查合法性
     let name=this.name.trim()
     let content=this.content.trim()
     if(!name || !content){
       alert('姓名or内容不能为空')
       return
     }
     var comment={id:Date.now(),name:this.name,content:this.content}
     //调用addComment将comment插入到list
     this.addComment(comment)
     this.name=''
     this.content=''
    }
    

  },
  //声明接收app.vue传来的属性
  props: {
    addComment:{
      type:Function,
      required:true
    }
  },
  components: {
    Item
  }
}
</script>

<style>

</style>
