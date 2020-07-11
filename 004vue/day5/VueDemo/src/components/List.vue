
<template>
  <div>

            <!-- <cmt-box @func='loadComments'></cmt-box> -->
        
        <ul class="list-group">
          <Item v-for="(comment,index) in comments" :key="index" :comment="comment" :deletComment="deletComment" :index="index"/>
        </ul>
  </div>
</template>

<script>

import Item from './Item.vue'

export default {
  props: ['comments','deletComment'],
components: {
  Item
} 
}



</script>




<style>

</style>

