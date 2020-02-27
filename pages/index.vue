<template>
  <div class="container">
    <h1 class="title">
      todo app
    </h1>
    <div class="link">
      <router-link to="/todos">
        <p>
          todo app を使ってみる
        </p>
      </router-link>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>

<style lang="scss">
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 48px;
  color: #305984;
  letter-spacing: 1px;
}


.link {
  margin: 40px 0 40px 0 ;
  padding: 5px;

  a:hover{
    animation: 1200ms text-color-change linear;
    font-weight: 600;
  }
  a:active {
    font-style: italic;
  }
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


</style>
