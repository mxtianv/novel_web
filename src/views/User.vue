<template>
  <div class="user">
    <div class="user-nav center">
      <div class="user-t">
        <img src="../assets/logo.png" alt="">
        <p>
          木小天
          <img src="../assets/vip.png" alt="">
        </p>
      </div>
      <div class="nav">
        <ul>
          <router-link to="/user/index">
            <li @click="setWat(0)" :class="{'new': show == 0}">我的书架</li>
          </router-link>
          <router-link to="/user/info">
            <li @click="setWat(3)" :class="{'new': show == 1}">个人资料</li>
          </router-link>
        </ul>
      </div>
      <div style="width: 50%;"></div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        show: 0,
        wat: 0
      }
    },
    methods: {
      setWat(id) {
        this.wat = id;
      }
    },
    mounted() {
      let url = window.document.location.href;
      url = url.split('/');
      //console.log(url)
      if (url[5] == 'index') {
        this.show = 0;
      } else if (url[5] == 'info') {
        this.show = 1;
      }
    },
    watch: {
      wat(val) {
        let url = window.document.location.href;
        url = url.split('/');
        if (url[5] == 'index') {
          this.show = 1;
        } else if (url[5] == 'info') {
          this.show = 0;
        }
        //console.log(this.show)
      }
    }
  }
</script>

<style scoped="scoped">
  .user-nav {
    margin-top: 10px;
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
  }
  .user-nav img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
  }
  .user-nav .user-t {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
  .user-nav .user-t p {
    margin-top: 10px;
  }
  .user-nav .user-t p span {
    padding: 1px;
    background: red;
  }
  .user-nav .user-t p img {
    width: 35px;
    height: 16px;
    border-radius: 0;
    vertical-align: middle;
  }
  .user-nav .nav ul {
    height: 100%;
    list-style: none;
    display: flex;
    align-items: center;
  }
  .user-nav .nav ul li {
    padding: 10px;
    padding-left: 20px;
    padding-right: 20px;
    margin-left: 10px;
    background: #999;
    color: white;
  }
  .user-nav .nav ul li:hover {
    background: #f60;
    color: white;
  }
  .user-nav .nav ul a:hover{
    color: white !important;
  }
  .user-nav .nav ul li a {
    color: white;
  }
  .new {
    background: #f60 !important;
  }
</style>
