<template>
    <div>
        <h1>天气：</h1>
        <h2>城市：{{city}}</h2>
        <h3>穿衣：{{chuanyi}}</h3>
        <h3>风向：{{xiche}}</h3>
    </div>
</template>
<script>
 import axios from 'axios'
export default {
    data () { 
        return {
            city:'',
            chuanyi:'',
            xiche:''
        }
    },
   
   async beforeMount () {
        let key='7b18845a5d4f4eb28cc18d73ca538ac9';
        let httpUrl=`https://free-api.heweather.net/s6/weather/lifestyle?location=${this.$route.params.city}&key=${key}`
        let res=await axios.get(httpUrl)
        let data=res.data;
        this.city=data.HeWeather6[0].basic.location
        this.chuanyi=data.HeWeather6[0].lifestyle[1].txt
        this.xiche=data.HeWeather6[0].lifestyle[6].txt
        console.log(res)
        
    }
}
</script>