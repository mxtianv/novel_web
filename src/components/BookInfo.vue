<template>
  <div class="book-info">
    <Top></Top>
    <div class="main center">
      <div class="mian-t">
        <div class="book">
          <div class="left">
            <img :src="books.cover | img" alt="">
            <router-link :to="'/book/'+this.id">
              <button class="read">点击阅读</button>
            </router-link>
            <button class="collection">立即收藏</button>
          </div>
          <div class="right">
            <div class="title">
              <router-link to="">
                <strong>{{books.title}}</strong>
              </router-link>
            </div>
            <p style="margin-top: 10px;margin-bottom: 10px;">作者：{{books.author}}</p>
            <el-rate
              v-model="value"
              disabled
              show-score
              text-color="#ff9900"
              score-template="{value}">
            </el-rate>
            <p style="margin-top: 10px;margin-bottom: 10px;font-size: 20px;">内容简介：</p>
            <p style="line-height: 30px;">
              {{books.longIntro}}
            </p>
            <p style="color: red;margin-top: 30px;">最新章节：{{books.lastChapter}}</p>
          </div>
        </div>
        <div class="ads">
          <img src="../assets/home_right.png" alt="">
        </div>
      </div>
      <div class="comment">
        <div class="title">
          <span>《{{books.title}}》最新书评</span>
          <el-button @click="dialogTableVisible = true" style="margin-left: 10px;" size="mini" type="primary">发表评论</el-button>
        </div>
        <ul>
          <li v-for="(i, index) in newComment" :key="index">
            <div class="img">
              <img src="../assets/logo.png" alt="">
            </div>
            <div class="con">
              <div class="author">
                <div class="name">
                  <strong style="font-size: 16px;color: #333;">{{i.name}}</strong>
                </div>
                <div class="time">
                  {{i.time}}
                </div>
              </div>
              <div class="cont">{{i.con}}</div>
            </div>
          </li>
        </ul>
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          style="margin-top: 15px;"
          background
          :page-size="pageSize"
          layout="prev, pager, next"
          :total="total">
        </el-pagination>
      </div>
    </div>
    <el-dialog title="发表评论" :visible.sync="dialogTableVisible">
      <el-input
        type="textarea"
        :rows="2"
        placeholder="请输入内容"
        v-model="textarea">
      </el-input>
      <el-button @click="release" style="margin-top: 12px;margin-left: 50%;transform: translateX(-50%);" type="primary">发表评论</el-button>
    </el-dialog>
    <Bottom></Bottom>
  </div>
</template>

<script>
  import Top from './Top.vue'
  import Bottom from './Bottom.vue'
  export default {
    props: ['keyword', "id"],
    components: {
      Top,
      Bottom
    },
    data() {
      return {
        books: [],
        value: 3.7,
        dialogTableVisible: false,
        textarea: "",
        comment: [
          {
            name: "木小天",
            time: "2020-04-21 11:00:07 发表于 iPhone APP ",
            con: "木小天博客http://muxiaotian.cn:81/"
          },
          {
            name: "木小天",
            time: "2020-04-21 11:00:07 发表于 iPhone APP ",
            con: "木小天博客http://muxiaotian.cn:81/"
          },
          {
            name: "木小天",
            time: "2020-04-21 11:00:07 发表于 iPhone APP ",
            con: "木小天博客http://muxiaotian.cn:81/"
          },
          {
            name: "木小天",
            time: "2020-04-21 11:00:07 发表于 iPhone APP ",
            con: "木小天博客http://muxiaotian.cn:81/"
          },
          {
            name: "木小天",
            time: "2020-04-21 11:00:07 发表于 iPhone APP ",
            con: "木小天博客http://muxiaotian.cn:81/"
          }
        ],
        newComment: [],
        total: "",
        pageSize: 10
      }
    },
    methods: {
      release() {
        if (this.textarea.length == "") {
          this.$message.error("内容不能为空");
        }
        else if (this.textarea.length > 80) {
          this.$message.error("内容不能超过80个字符");
        }
        else {

        }
      },
      handleSizeChange(val) {
        //console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        this.newComment = [];
        for (let i = (val - 1) * this.pageSize; i < this.pageSize * val; i++) {
          if (this.comment[i] != undefined) {
            this.newComment.push(this.comment[i]);
          } else {
            break;
          }
        }
      }
    },
    mounted() {
      this.total = this.comment.length;
      this.handleCurrentChange(1);
      this.axios.get("/api/book/"+this.id).then(res => {
        this.books = res.data;
      })
    },
    filters: {
      img(val) {
        let imgurl = val.replace("/agent/", "");
        return unescape(imgurl);
      }
    }
  }
</script>

<style scoped="scoped">
  .main {
    margin-top: 30px;
    margin-bottom: 30px;
  }
  .mian-t {
    display: flex;
    justify-content: space-between;
  }
  .ads img {
    width: 300px;
    height: 500px;
  }
  .book {
    display: flex;
    justify-content: space-between;
    width: 70%;
    border: 1px dotted #999;
    padding: 15px;
  }
  .book .left {
    width: 30%;
  }
  .book .left img {
    width: 190px;
    height: 272px;
  }
  .book .left button {
    width: 190px;
    height: 54px;
    line-height: 54px;
    background: #ff7836;
    color: white;
    text-align: center;
    font-size: 22px;
    border: none;
    margin-top: 10px;
  }
  .book .left .collection {
    background: #409EFF;
  }
  .book .left button:hover {
    cursor: pointer;
  }
  .book .right {
    width: 69%;
  }
  .book .title {
    font-size: 30px;
    line-height: 1;
  }
  .book .title strong {
    color: #666;
  }
  .book .title strong:hover {
    color: #ff7836;
  }
  .comment {
    border: 1px dotted #999;
    margin-top: 30px;
    padding: 20px;
    color: #333;
  }
  .comment .title {
    border-bottom: 1px dotted #999;
    padding-bottom: 12px;
  }
  .comment .title span {
    padding-left: 20px;
    border-left: 3px solid red;
    font-size: 20px;

  }
  .comment ul img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
  .comment ul li {
    list-style: none;
    margin-top: 20px;
    padding-bottom: 10px;
    border-bottom: 1px dotted #999;
    display: flex;
    justify-content: space-between;
  }
  .comment ul li .con {
    width: 92%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .comment ul li .cont {
    line-height: 2;
  }
  .comment .author {
    display: flex;
    justify-content: space-between;
    color: #999;
    font-size: 12px;
    padding-bottom: 12px;
    border-bottom: 1px dotted #999;
    margin-bottom: 5px;
  }
</style>
