<template>
  <div>
    <!-- {{ todos }} -->
    <ul>
      <li v-for="todo in todos" :key="todo.id">
        {{ todo.name }}
        {{ todo.done }}
        {{ todo.created }}
      </li>
    </ul>
    <div class="form">
      <form v-on:submit.prevent="add">
        <input v-model="name">
        <button>add</button>
      </form>
    </div>
  </div>
</template>

<script>
  // data→新規登録されるtodoを一時的に格納(name:タスク名、done:完了/未完了)
  export default {
    data: function(){
      return {
        name: '',
        done: false
      }
    },
    created: function() {
      this.$store.dispatch('todos/init')
    },
    //addメソッド→submitボタンを押した時に呼ばれる。
    //addメソッドが呼ばれたら、(storeのtodos.jsのアクションのaddを呼び出す,引数2にtodoに付ける名前を含める）

    methods: {
      add() {
        this.$store.dispatch('todos/add', this.name)
        this.name = ''
      }
    },
    // ストアのtodosを返すメソッドを定義
    // todosのデータを加工するためcomputedを使用
    computed: {
      todos() {
        return this.$store.state.todos.todos
      }
    }
  }
</script>


<style>

</style>