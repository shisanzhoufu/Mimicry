<template>
  <div class="home" id="home">
    <!-- 搜索框 -->
    <van-search v-model="searchData" placeholder="商品搜索 共3231件好物 " input-align="center"/>

    <!-- 轮播图 -->
    <van-swipe :autoplay="3000" width="375" height="200">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image.image_url" class="swiperimg"/>
      </van-swipe-item>
    </van-swipe>

    <!-- 分类宫格 -->
    <van-grid  :column-num="5">
      <van-grid-item v-for="(item,index) in channel" :key="index" :icon="item.icon_url" :text="item.name"/>
    </van-grid>

    <!-- 品牌制造商 面板 -->
    <div class="brandList">
      <van-panel title="品牌制造商直供">
        <van-grid :border="false" :column-num="2" >
          <van-grid-item v-for="(item1,index1) in brandList" :key="index1" >
            <van-image :src="item1.pic_url" lazy-load/>
            <h4 class="title">{{item1.name}}</h4>
            <h5 class="brief">{{item1.floor_price}}元起</h5>
          </van-grid-item>
        </van-grid>
      </van-panel>
    </div>

    <!-- 新品首发 -->
    <div class="newGoodsList">
      <van-panel title="周一周四·新品首发">
        <van-grid :border="false" :column-num="2" >
          <van-grid-item v-for="(item2,index2) in newGoodsList" :key="index2" >
            <van-image :src="item2.list_pic_url" lazy-load/>
            <h5 class="title2 van-ellipsis">{{item2.name}}</h5>
            <h6 class="price van-ellipsis">￥{{item2.retail_price}}</h6>
          </van-grid-item>
        </van-grid>
      </van-panel>
    </div>   

     <!-- 人气推荐 -->
    <div class="hotGoodsList" >
      <van-panel title="人气推荐">
        <van-card v-for="(item3,index3) in hotGoodsList" :key="index3"
          :price="item3.retail_price"
          :desc="item3.goods_brief"
          :title="item3.name"
          :thumb="item3.list_pic_url"
        />
      </van-panel>
    </div> 

  <!-- 专题精选轮播图 -->
    <van-panel title="专题精选">
      <div>
        <van-swipe :autoplay="3000" width="375" height="320" >
          <van-swipe-item v-for="(topic, index0) in topicList" :key="index0">
            <img v-lazy="topic.item_pic_url" class="swiperimg"/>
            <div class="topicBrief">
              <h5>{{topic.subtitle}} <span class="price_info">￥{{topic.price_info}}元起</span> </h5>
              <h6>{{topic.title}}</h6>
            </div>
          </van-swipe-item>
        </van-swipe>
      </div>
    </van-panel>
    

    <!-- 居家 -->
    <div > 
      <ul v-for="(category,index4) in categoryList" :key="index4">
        <li>
        <!-- <div v-for="(category,index4) in categoryList" :key="index4" > -->
          <van-panel :title="category.name">
            <van-grid :border="false" :column-num="2" >
                <van-grid-item v-for="(goodsList,index5) in category.goodsList" :key="index5" >
                <van-image :src="goodsList.list_pic_url" lazy-load/>
                <h5 class="title2">{{goodsList.name}}</h5>
                <h6 class="price">￥{{goodsList.retail_price}}</h6>
              </van-grid-item>
            </van-grid>
          </van-panel>
        </li>  
      </ul>
    </div> 
    <!-- 底部导航栏 -->
    
    <div>
      <tab-bar></tab-bar>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios'
import api from '../assets/config/api'
import tabBar from '../components/tabBar'

// 懒加载导入
import Vue from 'vue';
import { Lazyload } from 'vant';

Vue.use(Lazyload);


export default {
  name: 'Home',
  data () {
    return {
      searchData:'',
      data:{}
    }
  },
  components: {
    tabBar
  },
  computed: {
    images:function(){
      if(this.data.banner){
        // console.log('轮播图导入成功')
        return this.data.banner

      }else{
        // console.log('轮播图导入失败')
        return []
      }
    },
    channel(){
      if(this.data.channel){
        return this.data.channel
      }else{
        return []
      }
    },
    brandList(){
      if(this.data.brandList){
        return this.data.brandList
      }else{
        return []
      }
    },
    newGoodsList(){
      if(this.data.newGoodsList){
        return this.data.newGoodsList
      }else{
        return []
      }
    },
    hotGoodsList(){
      if(this.data.hotGoodsList){
        return this.data.hotGoodsList
      }else{
        return []
      }
    },
    topicList(){
      if(this.data.topicList){
        return this.data.topicList
      }else{
        return []
      }
    },
    categoryList(){
      if(this.data.categoryList){
        return this.data.categoryList
      }else{
        return []
      }
    },
    goodsList(){
      if(this.data.goodsList){
        return this.data.goodsList
      }else{
        return []
      }
    }
  },
  async mounted () {
    // console.log(api)
    let res=await axios.get(api.IndexUrl)
    // console.log(res.data)
    this.data=res.data.data
  }
}
</script>

<style>
  #home
  .swiperimg{
      width:375px;
      height:200px;
    }
  .brandList 
  .van-grid-item__content{
    padding: 2px;
  }
  .title{
    position: absolute;
    top:10px;
    left:10px;
  }
  .brief{
    position: absolute;
    top:25px;
    left:10px;
    color: #999;
  }
  .title2{
    /* position: absolute;
    bottom:15px;
    left:10px; */
    margin: 0px;
  }
  .newGoodsList
  .van-grid-item__content{
    padding: 2px;
  }
  .price{
    /* position: absolute;
    bottom:1px;
    left:10px; */
    color:rgb(161, 14, 14);
    margin: 0px;
  }
  .van-card__content{
    text-align: left;
    justify-content: center;
  }
  .van-card__title{
    color:#333;
    font-weight:999;
    font-size: 16px;
  }
  .van-card__content{
    color: #ccc;
  }
  .hotGoodsList
  .van-card__price{
    color:rgb(161,14,14);
  }
  /* .topicList{
    padding: 0 5px;
  } */
 
  .price_info{
    color:rgb(161,14,14);
  }

  
</style>
