<template>
    <div id="buycar">
        <van-nav-bar
            title="购物车"
            left-text="返回"
            left-arrow
            @click-left="onClickLeft"
        />

        <div class='info'>
            <span>30天无忧退货</span>
            <span>48小时快速退款</span>
            <span>满88元免邮费</span>
        </div>
        <!-- 商品列表 -->
        <div class="list">
            <div class="cartlist" v-for="(item,index) in cartList" :key="index">
                <van-checkbox v-model="item.checked" @change="changeEvent($event,item)"></van-checkbox>
                <van-image width="70" height="70" :src="item.list_pic_url" />
                <div class="proBreif">
                    <div class="proTitle">{{item.goods_name}}<span class="num">×{{item.number}}</span></div>
                    <p class="breif">{{item.goods_specifition_name_value}}</p>
                    <p class="price">￥{{item.retail_price}}</p>
                </div>
            </div>
        </div>
        <van-submit-bar :price="cartTotal.checkedGoodsAmount*100" button-text="提交订单" @submit="onSubmit">
            <van-checkbox v-model="checkedAll">全选</van-checkbox>
        </van-submit-bar>
    </div>
</template>

<script>
import {mapState} from 'vuex'
import axios from 'axios'
import api from '../assets/config/api'
import tabBar from '../components/tabBar'
export default {
    data () {
        return {
            checked: true
        }
    },
    computed: {
        ...mapState(['cartTotal','cartList']),
        checkedAll:{
             set(val){
                // console.log(val,'设置全选')
                 
             },
            get(){
                
                if(this.cartTotal.goodsCount==this.cartTotal.checkedGoodsCount){
                    return true
                }else{
                    return false
                }
        }
    } 
    },
     components: {
    tabBar
  },
    created () {
        this.$store.dispatch('AjaxCart')
    },
    mounted () {
        
    },
    methods: {
        onSubmit(){

        },
        changeEvent:async function(event,item){
         let res = await axios.post(api.CartChecked,{isChecked:Number(event),productIds:item.product_id})
         let data = res.data.data
            // console.log(res.data)
            this.$store.commit('setCarList',data.cartList),
            this.$store.commit('setCartTotal',data.cartTotal)
        },
        onClickLeft(){
            this.$router.go(-1)
        }
        
    }
}
</script>

<style>
   .info{
        display: flex;
        justify-content: space-around;
        color: #999;
        font-size: 12px;
        background-color: #efefef;
        height: 24px;
        line-height: 24px;
    }
    van-image{
    background-color: #efefef;
    }
    .cartlist{
        display: flex;
        align-items: center;
        padding: 10px 5px;
    }
    .proTitle{
        width: 100%;
        display: flex;
        justify-content: space-between;
    }
    .proBreif{
        flex:1;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
        height: 70px;
    }
    
    .breif{
        font-size: 12px;
        color: #999;
    }
</style>