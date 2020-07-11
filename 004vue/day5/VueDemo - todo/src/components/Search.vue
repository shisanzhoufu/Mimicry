<template>
 <div>
      <section class="jumbotron">
      <h3 class="jumbotron-heading">Search Github Users</h3>
      <div>
        <input type="text" placeholder="enter the name you search" @click="searchName"/>
        <button>Search</button>
      </div>
    </section>
 </div>
    
</template>

<script>
import PubSub from 'pubsub-js'
export default {
    data () {
        return {
            searchName
        }
    },
    methods: {
        search(){
            const searchName=this.searchName.trim()
            if(searchName){
                PubSub.publish('search',searchName)
            }
        }
    }
    
}
</script>
<style>

</style>