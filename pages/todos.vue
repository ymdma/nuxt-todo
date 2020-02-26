<template>
  <div class="todos-container">
    <div class="todos-header">
      <h2>todo app</h2>
      <div class="form">
        <form v-on:submit.prevent="add">
          <input v-model="name">
          <button>add</button>
        </form>
      </div>
    </div>

    <article>
      <!-- {{ todos }} -->
      <ul>
        <!-- v-if データがあるときだけ、描画する → 処理を後に回す効果ということ?-->
        <li v-for="todo in todos" :key="todo.id">
          <div v-if="todo.created">
            <input type="checkbox" v-bind:checked="todo.done" @change="toggle(todo)">
            <span v-bind:class="{ done: todo.done }">
              {{ todo.name }} || {{ todo.created.toDate() | dateFilter }}
            </span>
            <button v-on:click="remove(todo.id)">Del</button>
          </div>
        </li>
      </ul>
    </article>
    <div class="link">
      <router-link to="/" class="link">
        <p>
          HOMEへ戻る
        </p>
      </router-link>
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
.todos-container{
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* text-align: center; */
}
ul{
  margin: 80px 0 0 0;
  list-style:none;
}
li{
  margin:0 0 15px 0;
}
li > div span.done {
  text-decoration: line-through;
  color:#777777;
}
li button{
  height: 22px;
  line-height: 20px;
  margin: 0 0 0 10px;
  position: relative;
  top: -1.5px;
  background: pink;
  cursor: pointer;
  text-align: center;
}
li button:hover{
  background: rgb(255, 134, 154);
}
li input{
  margin: 0 0px 0 0;
}
.todos-header{
  width: 100%;
  height: 60px;
  /* padding: 20px 0 20px 0; */
  position:fixed;
  top: 0;
  background: #d2d2d2;
  z-index: 1;
}
h2{
  margin: 12px 0 0 40px;
  line-height: 30px;
  font-size: 30px;
}
.form{
  width: fit-content;
  margin: 0 0 0 20px;
  position: absolute;
  top: 18px;
  left: 32vw;
}

.form input{
  width: 200px;
  height: 24px;
  line-height: 24px;
  padding: 2px 8px 2px 8px;
  background: #7fb5d7;
  border:solid #333 0.5px;
  color: #000;
  font-size: 18px;
}
.form input:hover{
  background: #87c6ed;
}
.form input:focus{
  background: #c3edf9;
}
.form button{
  width: 50px;
  height: 24px;
  padding: 2px;
  margin: 0 0 0 10px;
  background: skyblue;
  border:solid #333 0.5px;
  font-size: 16px;
  cursor: pointer;
}
.form button:hover{
  background: rgb(50, 197, 255);
}
.link {
  margin: 40px 0 40px 0 ;
  padding: 5px;

}
.link a:hover{
  animation: 1200ms text-color-change linear;
  font-weight: 600;
}
@keyframes text-color-change {
  0%{
    color: #333333;
  }
  40%{
    color: #1e84f2;
  }
  100%{
    color: #333333;
  }
}
.link a:active {
  font-style: italic;
}

</style>