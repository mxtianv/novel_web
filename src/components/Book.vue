<template>
  <div class="book">
    <Top></Top>
    <div class="center">
      <div class="m-top">
        <div class="title">
          斗破苍穹之大世界
        </div>
        <p>作者：醉百川</p>
      </div>
      <div class="main">
        <div style="padding-bottom: 10px;border-bottom: 1px solid #999;">
          <div class="nav">
            <strong style="display: inline-block;margin-right: 15px;">正文</strong>
            <span style="color: #999;">已更新{{chaptersCount}}章</span>
          </div>
        </div>
        <div class="con">
          <a v-for="(i, index) in books" :key="index" href="/">
            <span>{{i.title}}</span>
          </a>
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
        books: [],
        chaptersCount: 0
      }
    },
    methods: {

    },
    mounted() {
      this.axios.get("api/mix-atoc/55c831f45be2c96e1bd24d4e?view=chapters").then(res => {
        this.books = res.data.mixToc.chapters;
        this.chaptersCount = res.data.mixToc.chapters.length;
      })
    },
  }
</script>

<style scoped="scoped">
  .center {
    padding: 25px;
    border: 1px dotted #999;
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
    margin-top: 8px;
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
  .main .con span {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
  }
</style>
