<template>
  <div>
            <li class="list-group-item" >

                <span class="badge">评论人：{{comment.name}}</span>
                {{comment.content}}
                
                <a href="" @click="deletItem">删除</a>
            </li>    
  </div>
</template> 

<script>
export default {
    props: {
        comment:Object,
        deletComment:Function,
        index:Number
    }, 
    methods: {
        deletItem(){
            const {comment,deletComment,index} = this
            if(window.confirm(`确定删除${comment.name}的评论吗？`)){
                deletComment(index)
            }
        }
    }

}
</script>

<style>

</style>
