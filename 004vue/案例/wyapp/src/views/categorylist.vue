<template>
    <div>
        <!-- 顶部导航栏 -->
        <van-tabs v-model="tabActive" >
            <van-tab  v-for="(item,index) in clist" :key="index" :title="item.name">
            <h4>{{item.name}}</h4>
            <p>{{item.front_name}}</p>

            <!-- 九宫格内容 -->
            <div v-if="item.plist">
            <van-grid column-num="2">
                <van-grid-item  v-for="(item1,index1) in item.plist.data" :key="index1" :to="'/products/'+item1.id">
                    <van-image
                        width="100"
                        height="100" 
                        :src="item1.list_pic_url" alt=""
                        />
                        <h4 class="van-ellipsis">{{item1.name}}</h4>
                        <p class="price">¥{{item1.retail_price}}</p>
                </van-grid-item>
             </van-grid>
            </div>
        </van-tab>
    </van-tabs>
    

  </div>           
</template>
<script>
    import axios from 'axios'
    import api from '../assets/config/api'
export default {
    props: ['id'],
    data () {
        return {
           tabActive:0,
           clist:[]
        }
    },
    computed: {},
    async created () {
    // console.log(this.id)
     let res=await axios.get(api.GoodsCategory,{params:{ id: this.id }})
    //  console.log(res)
     this.clist=res.data.data.brotherCategory
     let id=this.clist[0].id
     this.getlist(id,1)
    this.clist.forEach(async (item,index)=>{
    item.plist= await this.getlist(item.id,1)
    // console.log(item.plist)
    this.$forceUpdate()
    
    })
    },

    methods: {
        async getlist(cid,page){
            let res = await axios.get(api.GoodsList,{params:{categoryId:cid,page,size:20}})
            // console.log(res)
            return res.data.data
        }
    }
}
</script>

<style>
.price{
    color :red;
}
.van-ellipsis{
    width: 100%;
    padding: 0 10px;
    margin: 0px;
}
.van-grid-item{
    overflow: hidden;
    box-sizing: border-box;
}
</style>