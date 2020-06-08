<template>
  <div class="login-re">
    <!--使用方法： <LoginRe :title="'登录'" :login="true"></LoginRe> -->
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
    props: ["login", "title"],
    data() {
      return {
        login: false,
        register: false,
        username: '',
        password: '',
        comPassword: '',
        title: '登录',
        n:1,
        bf: true,
      }
    },
    methods: {
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
            this.$message.error('登录失败，用户名或密码错误！');
          }
        } else{
          if (this.username.length < 6 || this.username.length > 15 ) {
            this.$message.error('用户名要求6-15个字符之间');
          } else if (this.password.length < 6 || this.password.length > 15 ){
            this.$message.error('密码要求6-15个字符之间');
          } else if (this.password != this.comPassword){
            this.$message.error('两次输入密码不一致');
          }else {
            this.$message.error('注册系统暂未开放！');
          }
        }
      },
      showM() {
        if (this.n == 1) {
          this.n = 0;
        }
        else {
          this.n = 1;
        }
      },
    },
    mounted() {

    }
  }
</script>

<style scoped="scoped">
  .login {
    width: 80%;
    margin: auto;
  }
  .login img {
    width: 278px;
    height: 114px;
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
  .login button:hover {
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
  #new1 {
  	margin-left: 15%;
    margin-top: 20px;
    margin-bottom: 20px;
    font-size: 15px;
    color: #333;
  }
</style>
