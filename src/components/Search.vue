<template>
  <div class="search">
    <Top></Top>
    <div class="main center">
      <div class="book" v-for="(i, index) in books" :key="index">
        <div class="img-con">
          <div class="img">
            <img src="../assets/plate-2-best.jpg" alt="">
          </div>
          <div class="con">
            <div class="title">标题：{{i.title}}</div>
            <div class="m-t">
              <span class="author">作者：{{i.author}}</span>
              <span class="classification">分类：{{i.cat}}</span>
            </div>
            <div class="info">
              简介：{{i.shortIntro}}
            </div>
            <div class="new-art">
              最新文章： {{i.lastChapter}}
            </div>
          </div>
        </div>
        <div style="margin-left: 20px;" class="more">
          <p style="margin-top: 15px;"></p>
           <el-button type="success">在线阅读</el-button>
           <p style="margin-top: 15px;"></p>
           <el-button type="primary">收藏本书</el-button>
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
    props: ['keyword'],
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
      this.axios.get("/api/book/fuzzy-search?query="+this.keyword).then(res => {
        this.books = res.data.books;
      })
    },
    watch: {
      keyword(val) {
        this.axios.get("/api/book/fuzzy-search?query="+val).then(res => {
          this.books = res.data.books;
        })
      }
    }
  }
</script>

<style scoped="scoped">
  .book {
    display: flex;
    justify-content: space-between;
    padding-top: 15px;
    padding-bottom: 15px;
    border-bottom: 1px solid #999;
    margin-bottom: 5px;
  }
  .book .img-con {
    display: flex;
    justify-content: space-between;
  }
  .book .img-con .con{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: #333;
  }
  .book .img-con .info {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }
  .book .img {
    width: 150px;
    margin-right: 10px;
  }
  .book .img-con img {
    width: 150px;
    height: 200px;
  }
  .book .img-con .m-t span {
    margin-right: 20px;
  }
</style>
