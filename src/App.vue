<template>
   <div>
    <dv-full-screen-container>
      <LoginComponent/>
    </dv-full-screen-container>
   </div>
</template>

<script>
import LoginComponent from './page/login/index.vue'
export default {
  name: 'App',
  components: {
    LoginComponent
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
