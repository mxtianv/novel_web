<template>
  <div class="top">
    <div style="height: 20px;background: #ddd;margin-bottom: 20px;"></div>
    <div class="center">
      <div class="left">
        <img src="../assets/logo_index.png" alt="">
        <el-input @keyup.enter.native="search" style="width: 66%;margin-left: 50px;" v-model="keyword" placeholder="请输入小说名字"></el-input>
        <button @click="search">搜索</button>
      </div>
      <div class="right">
        <!-- 未登录 -->
        <ul v-if="isLogin != true">
          <li @click="loginT"><i class="el-icon-user"></i> 登录</li>
          <li>|</li>
          <li @click="registerT">注册</li>
        </ul>
        <!-- 已登录 -->
        <div class="user" v-if="isLogin == true">
          <img src="../assets/logo.png" alt="">
          {{ user }}
          <img src="../assets/vip.png" alt="">
          <router-link style="background: initial;" to="/user/index">
            <el-button style="margin-left: 10px;" size="mini" type="primary">个人中心</el-button>
          </router-link>
           <el-button @click="logout" style="margin-left: 15px;" size="mini" type="danger">退出</el-button>
        </div>
      </div>
    </div>
    <div class="nav">
      <div class="center">
        <ul>
          <router-link to="/">
            <li>首页</li>
          </router-link>
          <li>排行榜</li>
          <li>分类</li>
          <li>免费小说</li>
          <li>完本小说</li>
          <router-link to="/chapter/1">
            <li>斗破苍穹</li>
          </router-link>
        </ul>
      </div>
    </div>
    <el-dialog :title="title" :visible.sync="login" width="25%">
        <div class="login">
          <img src="../assets/user.png" alt="">
          <el-input
            placeholder="请输入用户名"
            prefix-icon="el-icon-user"
            v-model="username">
          </el-input>
          <el-input
            placeholder="请输入密码"
            show-password
            prefix-icon="el-icon-lock"
            v-model="password">
          </el-input>
          <el-input
            v-if="title == '注册'"
            placeholder="请再次输入密码"
            show-password
            prefix-icon="el-icon-lock"
            v-model="comPassword">
          </el-input>
          <div v-if="title == '登录'" class="find-reg">
            <p>忘记密码</p>
            <p @click="toregister">立即注册</p>
          </div>
          <button v-if="title == '登录'" @click="comBtn(1)">{{title}}</button>
          <button v-if="title == '注册'" @click="comBtn(0)">{{title}}</button>
        </div>
        <el-divider v-if="title == '登录'">
          <span>其他账户登录</span>
        </el-divider>
        <el-divider v-if="title == '注册'">
          <a style="color: #00BFFF;" href="javascript:;" @click="tologin">已有账号?立即登录</a>
        </el-divider>
        <div class="else-login" v-if="title == '登录'">
          <img src="../assets/QQ.png" alt="">
          <img src="../assets/微信.png" alt="">
          <img src="../assets/新浪.png" alt="">
        </div>
        <br>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        request: 'http://mxtian.cn:90',
        user: '',
        keyword: '',
        login: false,
        isLogin: false,
        register: false,
        username: '',
        password: '',
        comPassword: '',
        title: '登录',
        show: 1
      }
    },
    methods: {
      loginT() {
        this.login = true;
        this.title = '登录';
        this.username = '';
        this.password = '';
        this.comPassword = '';
      },
      registerT() {
        this.login = true;
        this.title = '注册';
        this.username = '';
        this.password = '';
        this.comPassword = '';
      },
      tologin() {
        this.title = '登录';
        this.username = '';
        this.password = '';
        this.comPassword = '';
      },
      toregister() {
        this.title = '注册';
        this.username = '';
        this.password = '';
        this.comPassword = '';
      },
      comBtn(id) {
        if (id == 1) {
          if (this.username == '') {
            this.$message.error('请输入用户名');
          } else if (this.password == ''){
            this.$message.error('请输入密码');
          } else {

            window.sessionStorage.setItem('token', "mxtiancntoken")
            window.sessionStorage.setItem('user', "木小天")
            window.sessionStorage.setItem('balance', 30)
            this.login = false;
            this.isLogin = true;
            this.user = "木小天";
            this.$message.success("登陆成功");
            return;

            let user = {
            	"username": this.username,
            	"password": this.password
            }
            let _this = this;
            this.axios.post(this.request + '/api/login', user).then(res => {
            	if (res.data.msg == '0') {
            		this.$message.error('登录失败，用户名或密码错误！');
            	} else {
            		window.sessionStorage.setItem('token', res.data.token)
            		window.sessionStorage.setItem('user', res.data.user)
            		window.sessionStorage.setItem('balance', res.data.num)
            		this.$notify({
            			title: '友情提示',
            			message: '登录成功！你的账户余额为：' + res.data.num + "积分",
            			type: 'success'
            		});
                _this.login = false;
            		_this.isLogin = true;
                _this.user = res.data.user;
            	}
            }, err => {
            	this.$message.error('服务器连接失败！');
            })
          }
        } else{
          if (this.username.length < 6 || this.username.length > 15 ) {
            this.$message.error('用户名要求6-15个字符之间');
          } else if (this.password.length < 6 || this.password.length > 15 ){
            this.$message.error('密码要求6-15个字符之间');
          } else if (this.password != this.comPassword){
            this.$message.error('两次输入密码不一致');
          }else {
            let user = {
            	"username": this.username,
            	"password": this.password
            }
            this.axios.post(this.request + '/api/register', user).then(res => {
            	//console.log(res)
            	if (res.data.msg == '0') {
            		this.$message.error('注册失败，该账户已被注册！');
            	} else {
            		this.$message.success('注册成功！');
            		this.tologin();
            	}
            }, err => {
            	this.$message.error('服务器连接失败！');
            })
          }
        }
      },
      search() {
        this.$router.push('/search/'+this.keyword)
      },
      logout() {
        window.sessionStorage.clear();
        this.isLogin = false;
      }
    },
    mounted() {
      var url = window.document.location.href;
      if (url.split('/')[4] == "") {
        this.show = 1;
      }
      else {
        this.show = 0;
      }
      if (window.sessionStorage.getItem('user')) {
      	this.isLogin = true;
      	this.user = window.sessionStorage.getItem('user');
      }
    }
  }
</script>

<style scoped="scoped">
  .router-link-exact-active {
    border-radius: 5px;
    background: #666;
    font-weight: 600;
  }
  .center {
    display: flex;
    justify-content: space-between;
  }
  .left {
    display: flex;
    align-items: center;
  }
  .left img {
    width: 200px;
  }
  .left button {
    height: 40px;
    width: 80px;
    border: none;
    background: #f60;
    color: white;
  }
  .right {
    display: flex;
    align-items: center;
  }
  .right .user img:first-child {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    vertical-align: middle;
  }
  .right .user img:nth-child(2) {
    width: 35px;
    height: 20px;
    vertical-align: middle;
  }
  .right ul li{
    display: inline-block;
    margin-left: 10px;
    list-style: none;
    font-size: 20px;
    color: #f60;
  }
  .right ul li:hover {
    cursor: pointer;
  }
  .nav {
    height: 50px;
    background: #f60;
    margin-top: 25px;
  }
  .nav ul a:hover {
    text-decoration: none !important;
  }
  .nav ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style: none;
  }
  .nav ul li {
    height: 50px;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
  }
  .nav ul li:hover {
    cursor: pointer;
    background: #FFCC66;
  }
  .new {
    border-radius: 5px;
    background: #666;
    font-weight: 600;
  }
  .login {
    width: 80%;
    margin: auto;
  }
  .login img {
    width: 100%;
  }
  .login .el-input {
    margin-bottom: 15px;
  }
  .login button {
    width: 100%;
    height: 40px;
    background: #ffe200;
    border: none;
    font-size: 17px;
    margin-top: 15px;
    outline:none;
  }
  button:focus {
    outline:none;
  }
  button:hover {
    cursor: pointer;
  }
  .login .find-reg {
    display: flex;
    justify-content: space-between;
  }
  .login .find-reg p:hover {
    cursor: pointer;
  }
  .else-login {
    width: 80%;
    margin: auto;
    display: flex;
    justify-content: space-around;
  }
  .else-login img {
    padding: 5px;
    border: 1px solid rgba(0,0,0,.06);
    border-radius: 50%;
    transition: .5s;
  }
  .else-login img:hover {
    cursor: pointer;
    background: rgba(0,0,0,.02);
  }
</style>
