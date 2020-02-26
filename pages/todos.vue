<template>
  <div>
    <!-- {{ todos }} -->
    <ul>
      <!-- v-if データがあるときだけ、描画する → 処理を後に回す効果ということ?-->
      <li v-for="todo in todos" :key="todo.id">
        <div v-if="todo.created">
          <input type="checkbox" v-bind:checked="todo.done" @change="toggle(todo)">
          <span v-bind:class="{ done: todo.done }">
            {{ todo.name }} | {{ todo.created.toDate() | dateFilter }}
          </span>
          <button v-on:click="remove(todo.id)">Del</button>
        </div>
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
  import moment from 'moment'

  // data→新規登録されるtodoを一時的に格納(name:タスク名、done:完了/未完了)
  export default {
    data: function(){
      return {
        name: '',
        done: false
      }
    },
    // createdのタイミングでtodos。jsのアクションのinitが呼ばれfirebaseの初期化を行う
    created: function() {
      this.$store.dispatch('todos/init')
    },

    // addメソッド→submitボタンを押した時に呼ばれる。
    // (templateで)addメソッドが呼ばれたら、(storeのtodos.jsのアクションのaddを呼び出す,引数2にtodoに付ける名前を含める）
    methods: {
      add() {
        this.$store.dispatch('todos/add', this.name)
        this.name = ''
      },
      remove(id) {
        this.$store.dispatch('todos/remove', id)
      },
      toggle(todo) {
        this.$store.dispatch('todos/toggle',todo)
      }
    },
    // ストアのtodosを返すメソッドを定義
    // todosのデータを加工するためcomputedを使用
    computed: {
      todos() {
        // return this.$store.state.todos.todos
        return this.$store.getters['todos/orderdTodos']
      }
    },
    filters: {
      dateFilter: function(date){
        return moment(date).format('YYYY/MM/DD HH:mm:ss')
      }
    }
  }
</script>


<style>

ul{
  margin: 20px;
  list-style:none;
}
li{
  margin:0 0 10px 0;
}
li > div span.done {
  text-decoration: line-through;
  color:#777777;
}
li button{
  height: 20px;
  line-height: 20px;
  position: relative;
  top: -1.5px;
  background: pink;
}
li input{
  margin: 0 10px 0 0;
}
.form{
  margin: 20px 0 20px 90px;
}

.form input{
  width: 200px;
  height: 24px;
  line-height: 24px;
  padding: 2px 10px 2px 10px;
  background: #ccc;
  border:solid #333 0.5px;
  color: #fff;
}
.form button{
  width: 50px;
  height: 24px;
  padding: 2px;
  margin: 0 0 0 10px;
  background: skyblue;
  border:solid #333 0.5px;
}

</style>