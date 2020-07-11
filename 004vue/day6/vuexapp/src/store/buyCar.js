export default{
    state: {
        produceNum:10
        
    },
    getters: {
        breif(state){
            return state.produceNum+'件衣服'
        }
        
    },
    mutations: {
        addProNum(state){
        state.produceNum++
        }
    },
    actions: {
        changeProNum(content){
            setTimeout(()=>{
                content.commit('addProNum')
            },1000)
        }
    }
}