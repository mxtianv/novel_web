<template>
  <div class="index">
    <br>
    <!-- <span @click="getCaptcha" v-html="captcha"></span>
    <button @click="verifyCaptcha">验证</button> -->
    <div class="main center">
      <div class="plate-1">
        <div class="p-top">
          <img src="../assets/index.jpg" alt="">
        </div>
        <br>
        <div class="title">
          <span>本周主打</span>
        </div>
        <br>
        <div class="content">
          <el-row :gutter="10">
            <el-col :xs="12" :lg="12"> <!-- :xs="24" -->
              <div class="left">
                <el-carousel :interval="5000" arrow="always">
                   <el-carousel-item v-for="(item, index) in swiper" :key="index">
                     <router-link :to="`/bookinfo/${item.link}`">
                       <img :src="item.img" alt="">
                     </router-link>
                   </el-carousel-item>
                 </el-carousel>
              </div>
            </el-col>
            <el-col :xs="12" :lg="12"> <!-- :xs="24" -->
              <div class="right">
                <ul>
                  <li v-for="(i, index) in mainBooks" :key="index">
                    <router-link :to="'/bookinfo/' + i._id" class="tit">
                      {{i.title}}
                    </router-link>
                    <router-link :to="'/bookinfo/' + i._id" class="info">
                      {{i.shortIntro}}
                    </router-link>
                  </li>
                </ul>
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
      <br>
      <div class="plate-2">
        <div class="p-top">
          <img src="../assets/plate-2-index.jpg" alt="">
        </div>
        <div class="plate-2-main">
          <div class="best-station">
            <div class="title">
              <span>全站最佳</span>
            </div>
            <div class="con">
              <div class="left">
                <router-link to="/bookinfo/5e73323a68df50bedf94d56a">
                  <img src="../assets/plate-2-best.jpg" alt="">
                </router-link>
                <router-link style="margin-top: 10px;display: block;font-size: 18px;" to="/bookinfo/5e73323a68df50bedf94d56a">为啥他们都崇拜我</router-link>
                <p>
                  作者：<router-link style="color: #666;font-size: 14px;" to="/">冻水洗脉</router-link>
                </p>
                <p>
                  <router-link style="color: #666;font-size: 14px;" to="/">我只是有个扶弟魔姐姐，可为啥他们都以为我是个狠人？</router-link>
                </p>
              </div>
              <div class="right">
                <div class="book" v-for="(i, index) in p2Books" :key="index">
                  <div class="cover">
                    <router-link :to="'/bookinfo/' + i._id" >
                      <img :src="i.cover | img" alt="">
                    </router-link>
                  </div>
                  <div class="detailed">
                    <router-link :to="'/bookinfo/' + i._id" >{{i.title}}</router-link>
                    <p></p>
                    <router-link style="color: #666;" :to="'/bookinfo/' + i._id" >{{i.author}}</router-link>
                    <p></p>
                    <router-link style="color: #666;" :to="'/bookinfo/' + i._id" >{{i.shortIntro}}</router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="new-works">
            <div class="title">
              <span>新作品榜</span>
            </div>
            <br>
            <ul>
              <li v-for="(i, index) in clickBang" :key="index">
                <div class="tit">
                  <router-link style="color: #999;" to="">[{{i.minorCate}}] </router-link>
                  <router-link :to="'/bookinfo/'+i._id">{{i.title}}</router-link>
                </div>
                <div class="w-name">
                  <router-link :to="'/bookinfo/'+i._id">{{i.author}}</router-link>
                </div>
              </li>
            </ul>
          </div>
          <div class="click-list">
            <div class="title">
              <span>作品点击榜</span>
            </div>
            <br>
            <ul>
              <li v-for="(i, index) in clickBang" :key="index">
                <div class="tit">
                  <router-link style="color: #999;" to="">[{{i.minorCate}}] </router-link>
                  <router-link :to="'/bookinfo/'+i._id">{{i.title}}</router-link>
                </div>
                <div class="w-name">
                  <router-link :to="'/bookinfo/'+i._id">{{i.author}}</router-link>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="plate-3">
        <div class="p-top">
          <img src="../assets/plate-3-index.gif" alt="">
        </div>
        <div class="title">
          <span>精品专区</span>
        </div>
        <div class="plate-3-main">
          <div style="width: 100%" class="best-station">
            <div class="con">
              <div style="width: 25%;" class="left">
                <router-link to="/bookinfo/5e73323a68df50bedf94d56a">
                  <img src="../assets/plate-2-best.jpg" alt="">
                </router-link>
                <router-link style="margin-top: 10px;display: block;font-size: 18px;" to="/bookinfo/5e73323a68df50bedf94d56a">为啥他们都崇拜我</router-link>
                <p>
                  作者：<router-link style="color: #666;font-size: 14px;" to="/">冻水洗脉</router-link>
                </p>
                <p>
                  <router-link style="color: #666;font-size: 14px;" to="/">我只是有个扶弟魔姐姐，可为啥他们都以为我是个狠人？</router-link>
                </p>
              </div>
              <div style="width: 50%;" class="m-right">
                <ul>
                  <li v-for="(i, index) in boutiqueBooks" :key="index">
                    <router-link :to="'/bookinfo/' + i._id" class="tit">
                      {{i.title}}
                    </router-link>
                    <router-link :to="'/bookinfo/' + i._id" class="info">
                      {{i.shortIntro}}
                    </router-link>
                  </li>
                </ul>
              </div>
              <div style="width: 22%;" class="right">
                <div class="book" v-for="(i, index) in p2Books" :key="index">
                  <div class="cover">
                    <router-link :to="'/bookinfo/' + i._id" >
                      <img :src="i.cover | img" alt="">
                    </router-link>
                  </div>
                  <div class="detailed">
                    <router-link :to="'/bookinfo/' + i._id" >{{i.title}}</router-link>
                    <p></p>
                    <router-link style="color: #666;" :to="'/bookinfo/' + i._id" >{{i.author}}</router-link>
                    <p></p>
                    <router-link style="color: #666;" :to="'/bookinfo/' + i._id" >{{i.shortIntro}}</router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <br>
    <div class="f-link center">
      <div class="title">
        <span>友情链接</span>
      </div>
      <br>
      <ul class="clearfix">
        <li>
          <a target="_blank" href="https://xa.mxtian.cn">寻案社区</a>
        </li>
        <li>
          <a target="_blank" href="https://mxtian.cn">木小天博客</a>
        </li>
      </ul>
    </div>
    <br>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        clickBang: [],
        swiper: [],
        bangBooks: [],
        boutiqueBooks: [],
        mainBooks: [],
        plate1Data:[
          {
            title: "将门嫡女:祸国毒妃不从良",
            info: "前生的她受世人唾弃，重生十五年之后，她决定死不悔改，该杀的，绝不放过。",
            link: "/bookinfo/1"
          },
          {
            title: "将门嫡女:祸国毒妃不从良",
            info: "前生的她受世人唾弃，重生十五年之后，她决定死不悔改，该杀的，绝不放过。",
            link: "/bookinfo/1"
          },
          {
            title: "将门嫡女:祸国毒妃不从良",
            info: "前生的她受世人唾弃，重生十五年之后，她决定死不悔改，该杀的，绝不放过。",
            link: "/bookinfo/1"
          },
          {
            title: "将门嫡女:祸国毒妃不从良",
            info: "前生的她受世人唾弃，重生十五年之后，她决定死不悔改，该杀的，绝不放过。",
            link: "/bookinfo/1"
          }
        ],
        plate2Book:[
          {
            title: "为啥他们都崇拜我",
            info: "我只是有个扶弟魔姐姐，可为啥他们都以为我是个狠人？",
            author: "作者：冻水洗脉",
            img: require('../assets/plate-2-best.jpg'),
            link: "/bookinfo/5e73323a68df50bedf94d56a",
            authorLink: "/"
          },
          {
            title: "为啥他们都崇拜我",
            info: "我只是有个扶弟魔姐姐，可为啥他们都以为我是个狠人？",
            author: "作者：冻水洗脉",
            img: require('../assets/plate-2-best.jpg'),
            link: "/bookinfo/5e73323a68df50bedf94d56a",
            authorLink: "/"
          },
          {
            title: "为啥他们都崇拜我",
            info: "我只是有个扶弟魔姐姐，可为啥他们都以为我是个狠人？",
            author: "作者：冻水洗脉",
            img: require('../assets/plate-2-best.jpg'),
            link: "/bookinfo/5e73323a68df50bedf94d56a",
            authorLink: "/"
          }
        ],
        plate2NewBook:[
          {
            classification: "末世危机",
            title: "第九特区",
            author: "作者",
            link: "/",
            authorLink: "/"
          },
          {
            classification: "末世危机",
            title: "第九特区",
            author: "作者",
            link: "/",
            authorLink: "/"
          },
          {
            classification: "末世危机",
            title: "第九特区",
            author: "作者",
            link: "/",
            authorLink: "/"
          },
          {
            classification: "末世危机",
            title: "第九特区",
            author: "作者",
            link: "/",
            authorLink: "/"
          },
          {
            classification: "末世危机",
            title: "第九特区",
            author: "作者",
            link: "/",
            authorLink: "/"
          },
          {
            classification: "末世危机",
            title: "第九特区",
            author: "作者",
            link: "/",
            authorLink: "/"
          },
          {
            classification: "末世危机",
            title: "第九特区",
            author: "作者",
            link: "/",
            authorLink: "/"
          },
          {
            classification: "末世危机",
            title: "第九特区",
            author: "作者",
            link: "/",
            authorLink: "/"
          },
          {
            classification: "末世危机",
            title: "第九特区",
            author: "作者",
            link: "/",
            authorLink: "/"
          },
          {
            classification: "末世危机",
            title: "第九特区",
            author: "作者",
            link: "/",
            authorLink: "/"
          }
        ],
        plate3Data:[
          {
            title: "将门嫡女:祸国毒妃不从良",
            info: "前生的她受世人唾弃，重生十五年之后，她决定死不悔改，该杀的，绝不放过。",
            link: "/"
          },
          {
            title: "将门嫡女:祸国毒妃不从良",
            info: "前生的她受世人唾弃，重生十五年之后，她决定死不悔改，该杀的，绝不放过。",
            link: "/"
          },
          {
            title: "将门嫡女:祸国毒妃不从良",
            info: "前生的她受世人唾弃，重生十五年之后，她决定死不悔改，该杀的，绝不放过。",
            link: "/"
          },
          {
            title: "将门嫡女:祸国毒妃不从良",
            info: "前生的她受世人唾弃，重生十五年之后，她决定死不悔改，该杀的，绝不放过。",
            link: "/"
          },
          {
            title: "将门嫡女:祸国毒妃不从良",
            info: "前生的她受世人唾弃，重生十五年之后，她决定死不悔改，该杀的，绝不放过。",
            link: "/"
          },
          {
            title: "将门嫡女:祸国毒妃不从良",
            info: "前生的她受世人唾弃，重生十五年之后，她决定死不悔改，该杀的，绝不放过。",
            link: "/"
          }
        ],
        p2Books: [],
        captcha: ""
      }
    },
    methods: {
      verifyCaptcha() {
        this.axios.get("/api/verifyCaptcha").then(res => {
          // console.log(res.data)
        })
      },
      getCaptcha() {
        this.axios.get("/api/captcha").then(res => {
          this.captcha = res.data.img;
        })
      }
    },
    mounted() {
			this.getCaptcha();
      this.axios.get("/api/book/by-categories?gender=male&type=hot&major=奇幻&minor=&start=0&limit=3").then(res => {
        this.p2Books = res.data.books;
        this.p2Books.length = 3;
        //console.log(this.p2Books)
      })
      this.axios.get("/api/book/by-categories?gender=male&type=hot&major=玄幻&minor=&start=0&limit=20").then(res => {
        for(let i = 0; i < 10; i++) {
          this.clickBang.push(res.data.books[i]);
        }
        //console.log(this.p2Books)
      })
      this.axios.get("/api/recommendPage/node/spread/575f74f27a4a60dc78a435a3?pl=ios").then(res => {
        this.swiper = res.data.data;
        // console.log(this.swiper)
      })
      this.axios.get("/api/ranking/54d43437d47d13ff21cad58b").then(res => {
        this.bangBooks = res.data.ranking.books;
        for (let i = 0; i < 4; i++) {
          this.mainBooks.push(this.bangBooks[i]);
        }
        for (let i = 4; i < 10; i++) {
          this.boutiqueBooks.push(this.bangBooks[i]);
        }
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
  img:hover {
    cursor: pointer;
  }
  .book a {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }
  @media screen and (max-width: 500px) {
    .center {
      width: 95%;
    }
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  .p-top img {
    height: 90px;
    width: 100%;
  }
  .title {
    border-bottom: 1px solid #999;
    padding-bottom: 10px;
  }
  .title span{
    font-size: 25px;
    padding-bottom: 10px;
    border-bottom: 3px solid red;
  }
  .plate-1 .content .left img {
    width: 100%;
    height: 100%;
  }
  .plate-1 .content .right ul li {
    list-style: none;
    padding: 11.5px;
    border-bottom: 1px dotted #ddd;
  }
  .plate-1 .content .right ul li .tit {
    color: #333;
    font-size: 18px;
    font-weight: 400;
    display: block;
  }
  .plate-1 .content .right ul li .info {
    color: #666;
    font-size: 13px;
    display: block;
    margin-top: 10px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
  }
  .plate-2 .plate-2-main {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  .best-station {
    width: 39%;
  }
  .best-station .con {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
  }
  .best-station .con .left {
    width: 49%;
    padding: 10px;
    border: 1px solid #E0E0E0;
    text-align: center;
  }
  .best-station .con .left p {
    color: #666;
    font-size: 14px;
    margin-top: 5px;
  }
  .best-station .con .right {
    width: 49%;
    color: #666;
    font-size: 12px;
    font-weight: 400;
    line-height: 20px;
  }
  .best-station .con .right .book {
    margin-left: 10px;
    display: flex;
    justify-content: space-between;
    padding-top: 13px;
    padding-bottom: 10px;
    border-bottom: 1px dotted #ddd;
  }
  .best-station .con .right img {
    width: 75px;
    height: 110px;
  }
  .best-station .con .right .detailed {
    width: 55%;
  }
  .plate-2 .plate-2-main .new-works {
    width: 29%;
    font-size: 13px;
    color: #333;
  }
  .plate-2 .plate-2-main .new-works ul li,
  .plate-2 .plate-2-main .click-list ul li {
    list-style: none;
    display: flex;
    justify-content: space-between;
    padding-top: 12px;
    padding-bottom: 12px;
    border-bottom: 1px dotted #ddd;
  }
  .plate-2 .plate-2-main .click-list {
    width: 29%;
    font-size: 13px;
    color: #333;
  }
  .plate-3-main {
    display: flex;
    justify-content: space-between;
  }
  .plate-3-main .m-right ul li {
    list-style: none;
    padding: 11.5px;
    border-bottom: 1px dotted #ddd;
  }
  .plate-3-main .m-right ul li .tit {
    color: #333;
    font-size: 18px;
    font-weight: 400;
    display: block;
  }
  .plate-3-main .m-right ul li .info {
    color: #666;
    font-size: 13px;
    display: block;
    margin-top: 10px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
  }
  .f-link ul li {
    list-style: none;
    float: left;
    margin-right: 10px;
  }
  .f-link ul li a {
    font-size: 16px;
    color: #666;
    line-height: 30px;
  }
</style>
