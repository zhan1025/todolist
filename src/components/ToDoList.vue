<template>
  <div class="todo">
        <h1>待办事项</h1>
        <input
          type="text"
          v-model.trim="str"
          @keyup.enter="push"
          ref='input'/>
        <button
        @click="push"
        >添加</button>
        <ul>
          <todoitem
            v-for="(item,index) in todos"
            :key="item.id"
            :index="index"
            :id="item.id"
            :item="item.name"
            @del="delTodo"
          />
        </ul>
    </div>
</template>
<script>
// import axios from 'axios'
import todoitem from './ToDoItem.vue'

export default {
  data () {
    return {
      str: '',
      todos: []
    }
  },
  components: {
    todoitem
  },
  methods: {
    push () {
      if (this.$refs.input.value.length > 0) {
        let obj = { 'name': this.str }
        this.$http.post('/todos', obj)
          .then(res => {
            console.log('新增成功')
            this.todos.push(res)
            this.$refs.input.focus()
          })
      }
    },
    /**
     * @param {Number} index,id
     */
    delTodo (index, id) {
      this.$http.delete(`/todos/${id}`)
        .then(res => {
          console.log('删除成功')
          this.todos.splice(index, 1)
        })
        .catch(err => {
          alert('删除失败')
        })
    }
  },
  watch: {
    todos (newVal, oldVal) {
      this.str = ''
    }
  },
  created () {
    this.$http.get('/todos')
      .then(res => {
        this.todos = res
      })
      .catch( err => {
        alert('网络异常，请稍后重试')
      })
  }
}
</script>
<style lang="less" scoped>
</style>
