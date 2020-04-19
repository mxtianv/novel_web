<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
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
