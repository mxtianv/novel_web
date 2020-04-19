<template>
  <div class="book">
    <Top></Top>
    <div class="center">
      <div class="m-top">
        <div class="title">
          我真是练气期啊
        </div>
        <p>作者： 朱笔点绛唇</p>
      </div>
      <div class="main">
        <div style="padding-bottom: 10px;border-bottom: 1px solid #999;">
          <div class="nav">
            <strong style="display: inline-block;margin-right: 15px;">正文</strong>
            <span style="color: #999;">已更新234章</span>
          </div>
        </div>
        <div class="con">
          <a href="/">第一章 上来受死</a>
          <a href="/">第一章 上来受死</a>
          <a href="/">第一章 上来受死</a>
          <a href="/">第一章 上来受死</a>
          <a href="/">第一章 上来受死</a>
          <a href="/">第一章 上来受死</a>
        </div>
      </div>
    </div>
    <Bottom></Bottom>
  </div>
</template>

<script>
  import Top from './Top.vue'
  import Bottom from './Bottom.vue'
  export default {
    props: ['id'],
    components: {
      Top,
      Bottom
    },
    data() {
      return {
        books: []
      }
    },
    methods: {

    },
    mounted() {
      this.axios.get("/api/book/fuzzy-search?query="+this.id).then(res => {
        this.books = res.data.books;
      })
    },
  }
</script>

<style scoped="scoped">
  .center {
    padding: 25px;
    border: 1px solid #999;
    margin-top: 15px;
    margin-bottom: 15px;
  }
  .m-top {
    text-align: center;
  }
  .m-top .title {
    font-size: 30px;
    color: #F60;;
    font-weight: 600;
  }
  .m-top p {
    color: #666;
    font-size: 15px;
    margin-top: 5px;
  }
  .nav {
    padding-left: 10px;
    border-left: 3px solid red;
  }
  .main .con {
    padding: 25px;
  }
  .main .con a {
    font-size: 15px;
    color: #666;
    padding-top: 16px;
    padding-bottom: 16px;
    border-bottom: 1px dashed #E0E0E0;
    display: inline-block;
    width: 20%;
  }
</style>
