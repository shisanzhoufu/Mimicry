<template>
    <div class="todo-container">
     <div class="todo-wrap">
        <todoHeader :addTodo="addTodo" />
        <todoList :todos="todos" :deleteTodo="deleteTodo"/>
        <todoFooter :deleteComplateTodos="deleteComplateTodos" :todos="todos" :selectAllTodos="selectAllTodos"/>
     </div>
    </div>
</template>

<script>
import todoHeader from './components/todoHeader.vue'
import todoList from './components/todoList.vue'
import todoFooter from './components/todoFooter.vue'


export default {
    data () {
        return {
            todos:[
                {title:'吃饭',complate:false},
                {title:'睡觉',complate:false},
                {title:'打豆豆',complate:false}
            ]
        }
    },
    methods: {
      addTodo(todo){
          this.todos.unshift(todo)
      },
      deleteTodo(index){
          this.todos.splice(index,1)
      },
      //删除选中的todos
      selectAllTodos(){
         this.todos= this.todos.fiter(todo=>!todo.complate)
      },
      //全选or取消全选
      deleteComplateTodos(check){
          this.todos.forEach(todo=>todo.complate=check)
      }  
    },
    components: {
        todoHeader,
        todoList,
        todoFooter
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