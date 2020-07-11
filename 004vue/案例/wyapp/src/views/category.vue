<template>
    <div>
        <!-- 搜索框 -->
        <van-search v-model="searchData" placeholder="商品搜索 共3231件好物 " input-align="center"/>

        <van-tree-select
            :items="items"
            :main-active-index.sync="mainActiveIndex"
            @click-nav="changeRight"
            height="100vh - 54px"
        >
        <template slot="content">
            <div class="imgUrlbox">
            <img :src="imgUrl" alt="" class="imgUrl">
            </div>

            <van-grid :border="false" :column-num="3" >
                <van-grid-item v-for="(item,index) in subCategoryList" :key="index" :icon="item.wap_banner_url" :text="item.name" :to="'/categoryList/'+item.id">
                    <!-- <van-image :src="item.banner_url" lazy-load/>
                    <h5 class="title2 van-ellipsis">{{item.name}}</h5> -->
                </van-grid-item>
        </van-grid>
        </template>
        </van-tree-select>

        <!-- 导航栏 -->
        <tab-bar></tab-bar>
    </div>
</template>

<script>
import api from '../assets/config/api'
import tabBar from '../components/tabBar'
import axios from 'axios'
export default {
    name:'category',
    data () {
        return {
            searchData:"",
            mainActiveIndex: 0,
            imgUrl:'',
            subCategoryList:[],
            data:{}
        }
    },
    components: {
        tabBar
    },
    async created ()  {
    // console.log(api)
    let res=await axios.get(api.CatalogList)
    let data=res.data
    this.data=data.data
    // console.log(res.data)
    this.subCategoryList=this.data.currentCategory.subCategoryList
    this.imgUrl=this.data.currentCategory.img_url
    this.$forceUpdate()
  },
  computed: {
      items:function(){
          
      if(this.data.categoryList==undefined){
            return []
      }else{
        let arr=[]
        this.data.categoryList.forEach((item,index)=>{
            item.text=item.name
            arr.push(item)
        })
        return arr
      }
    }
  },
   methods: {
        changeRight:function(index){
            // console.log(index)
            this.mainActiveIndex=index
        }
    } ,
    watch: {
        mainActiveIndex:async function(){
        if(this.items.length!==0){
            // console.log(this.mainActiveIndex)
            let id=this.items[this.mainActiveIndex].id
            // let arr=this.items[this.mainActiveIndex].subCategoryList
            let res=await axios.get(api.CatalogCurrent,{params:{id}})
            this.subCategoryList=res.data.data.currentCategory.subCategoryList
            this.imgUrl=this.items[this.mainActiveIndex].img_url
        }else{
            this.subCategoryList=[]
        }
    }
    }
   
}
</script>
<style>
.imgUrlbox
.imgUrl{
    width:100%;
    box-sizing: border-box;
}
</style>