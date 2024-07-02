<template>
   <div class="main">
      <div class="flex-center">
        <dv-capsule-chart :config="echart" style="width:80%;height:80%;margin: 10%;"/>
      </div>
      <div class="flex-center">
        <dv-flyline-chart-enhanced :config="config" style="width:80%;height:80%;margin: 10%;"/>
      </div>
      <div class="flex-center">
        <dv-active-ring-chart :config="circle" style="width:100%;height:100%;"/>
      </div>
      <div class="flex-center">
        <dv-scroll-board :config="table" style="width:60%;height:60%;margin: 10%;" />
      </div>
   </div>
</template>
<script>

import config from "../const/login/config";
import circle from "../const/login/circle";
import echart from "../const/login/echart";
import table from "../const/login/table";
  export default {
    props: [],
    name: "LoginComponent",
    components: {
     
    },
    data() {
      return {
        config,
        circle,
        echart,
        table,

      };
    },
    watch: {
      
    },
    created() {
     
    },
    mounted() {
      
    },
    computed: {
    
    },
    
    
  };
</script>

<style>
.main{
  display: flex;
  flex-wrap: wrap; /* 设置换行 */
  width: 100vw;
  height: 100vh;
}
.flex-center{
    width: 50%;
    height:50%;
    background-color: black;
}
</style>
