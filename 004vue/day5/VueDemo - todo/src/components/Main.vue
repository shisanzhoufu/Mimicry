<template>
<div>
    <h2 v-if="firstView">输入用户名进行搜索</h2>
    <h2 v-if="loading">LOADING</h2>
    <h2 v-if="errorMsg">{{errorMsg}}</h2>
 <div class="row" v-for="(user,index) in users" :key="index">
      <div class="card">
        <a :href="user.url" target="_blank">
          <img :src="user.vatar_url" style='width: 100px'/>
        </a>
        <p class="card-text">{{user.name}}</p>
      </div>
    </div>
</div>
      
</template>

<script>
import PubSub from 'pubsub-js'
import axios from 'axios'
export default {
    data () {
        return {
            firstView:true,
            loading:false,
            users:null,
            errorMsg:null
        }
    },
    mounted () {
        pubsub.subscribe('search',(msg,searchName)=>{
            const url = `https://api.github.com/search/users?q=${searchName}`
            // const url = `https://developer.github.com/v3/search/users/?q=${searchName}`

            
            this.firstView=false
            this.loading=true

            axios.get(url).then(response=>{
                const result =response.data
                const users=result.items.map(item=>({
                    url:item.html_url,
                    avatar_url:item.avatar_url,
                    name:item.login
                }))
                this.loading=false
                 this.users=users
            }).catch(error=>{
                alert("请求失败")
            })
        })
    }
    
}
</script>

<style>
.card {
  float: left;
  width: 33.333%;
  padding: .75rem;
  margin-bottom: 2rem;
  border: 1px solid #efefef;
  text-align: center;
}

.card > img {
  margin-bottom: .75rem;
  border-radius: 100px;
}

.card-text {
  font-size: 85%;
}

</style>