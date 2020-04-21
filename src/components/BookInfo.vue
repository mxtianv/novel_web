<template>
  <div class="book-info">
    <Top></Top>
    <div class="main center">
      <div class="mian-t">
        <div class="book">
          <div class="left">
            <img src="../assets/plate-2-best.jpg" alt="">
            <router-link to="/book/1">
              <button class="read">点击阅读</button>
            </router-link>
            <button class="collection">立即收藏</button>
          </div>
          <div class="right">
            <div class="title">
              <router-link to="">
                <strong>农门小王妃</strong>
              </router-link>
            </div>
            <p style="margin-top: 10px;margin-bottom: 10px;">作者：123</p>
            <el-rate
              v-model="value"
              disabled
              show-score
              text-color="#ff9900"
              score-template="{value}">
            </el-rate>
            <p style="margin-top: 10px;margin-bottom: 10px;font-size: 20px;">内容简介：</p>
            <p>
              阮明姿一睁眼，发现自己穿越成了农家贫女。
              爹娘早逝，爷奶不慈，家徒四壁，还附带个哑巴妹妹。
              从一无所有开始发家致富，从荆棘遍地走向花团锦簇。
              一时赚钱一时爽，一直赚钱一直爽！
              然而捡回来的那个男人，却不依不饶：王妃，跟孤回府。
              阮明姿巧笑嫣然：你哪位？
            </p>
          </div>
        </div>
        <div class="ads">
          <img src="../assets/home_right.png" alt="">
        </div>
      </div>
      <div class="comment">
        <div class="title">
          <span>《农门小王妃》最新书评</span>
          <el-button @click="dialogTableVisible = true" style="margin-left: 10px;" size="mini" type="primary">发表评论</el-button>
        </div>
        <ul>
          <li v-for="(i, index) in comment" :key="index">
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
    props: ['keyword'],
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
            con: "阮明姿一睁眼，发现自己穿越成了农家贫女。 爹娘早逝，爷奶不慈，家徒四壁，还附带个哑巴妹妹。 从一无所有开始发家致富，从荆棘遍地走向花团锦簇。 "
          },
          {
            name: "木小天",
            time: "2020-04-21 11:00:07 发表于 iPhone APP ",
            con: "阮明姿一睁眼，发现自己穿越成了农家贫女。 爹娘早逝，爷奶不慈，家徒四壁，还附带个哑巴妹妹。 从一无所有开始发家致富，从荆棘遍地走向花团锦簇。 "
          },
          {
            name: "木小天",
            time: "2020-04-21 11:00:07 发表于 iPhone APP ",
            con: "阮明姿一睁眼，发现自己穿越成了农家贫女。 爹娘早逝，爷奶不慈，家徒四壁，还附带个哑巴妹妹。 从一无所有开始发家致富，从荆棘遍地走向花团锦簇。 "
          },
          {
            name: "木小天",
            time: "2020-04-21 11:00:07 发表于 iPhone APP ",
            con: "阮明姿一睁眼，发现自己穿越成了农家贫女。 爹娘早逝，爷奶不慈，家徒四壁，还附带个哑巴妹妹。 从一无所有开始发家致富，从荆棘遍地走向花团锦簇。 "
          },
          {
            name: "木小天",
            time: "2020-04-21 11:00:07 发表于 iPhone APP ",
            con: "阮明姿一睁眼，发现自己穿越成了农家贫女。 爹娘早逝，爷奶不慈，家徒四壁，还附带个哑巴妹妹。 从一无所有开始发家致富，从荆棘遍地走向花团锦簇。 "
          }
        ]
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
      }
    },
    mounted() {

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
