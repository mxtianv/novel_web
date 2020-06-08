<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
  export default {
    mounted() {
      window.document.title = "看看小说";
    }
  }
</script>
<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  #app {
    min-width: 1350px;
  }
  a {
    text-decoration: none;
    color: #000000;
  }
  a:hover {
    color: #F14C36 !important;
    text-decoration: underline;
  }
  .center {
    width: 70%;
    margin: auto;
  }
  .clearfix::before,
  .clearfix::after {
    content: "";
    display: table;
  }
  .clearfix::after {
    clear: both;
  }
</style>
