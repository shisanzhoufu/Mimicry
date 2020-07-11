<template>
    <div>
        <div v-if="!repoUrl">loading</div>
        <div v-else>most star repo is <a href="repoUrl">{{repoName}}</a></div>
    </div>
</template>

<script>

export default {
    data () {
        return {
            repoName:'',
            repoUrl:''
        }
    },
    mounted () {
        const url=`https://api.github.com/search/repositories?q=v&sort=stars`
        this.$http.get(url).then(
            Response=>{
                //成功
                const result=response.data
                const mostRepo=result.items[0]
                this.repoUrl=mostRepo.html_url
                this.repoName=mostRepo.name
            },
            response=>{
                //失败
                alert('失败')
            }
        )
    }
}
</script>
<style>

/*app*/
.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>