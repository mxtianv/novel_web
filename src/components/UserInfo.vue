<template>
  <div class="info center">
    <div class="con">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="基础资料" name="first">
          <ul>
            <li>
              <span>用户ID: </span>
              123456
            </li>
            <li>
              <span>用户余额: </span>
              <span style="color: red;">{{balance}}积分</span>
            </li>
            <li>
              <span>用户昵称: </span>
              <input v-model="username" type="text">
            </li>
            <li>
              <span>用户性别: </span>
              <el-radio style="margin-left: 15px;" v-model="radio" label="1">男</el-radio>
              <el-radio v-model="radio" label="2">女</el-radio>
            </li>
            <li>
              <span>会员权限: </span>
              <span style="color: red;">VIP8</span>
            </li>
            <li>
              <el-button type="primary">保存设置</el-button>
            </li>
          </ul>
        </el-tab-pane>
        <el-tab-pane label="头像修改" name="second">头像修改</el-tab-pane>
        <el-tab-pane label="修改密码" name="third">修改密码</el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
  export default {
      data() {
        return {
          activeName: 'first',
          username: "小说网",
          radio: '1',
          balance: ''
        };
      },
      methods: {
        handleClick(tab, event) {
          console.log(tab, event);
        }
      },
      mounted() {
        this.balance = sessionStorage.getItem("balance")
      }
    };
</script>

<style scoped="scoped">
  .info {
    margin-top: 30px;
    margin-bottom: 120px;
    border: 1px dotted #ddd;
    padding: 12px;
  }
  .info ul li {
    list-style: none;
    margin-top: 20px;
    color: #666;
  }
  .info input {
    border: 1px solid #D9D9D9;
    padding: 5px;
    width: 200px;
  }
  .el-tab-pane {
    min-height: 300px;
  }
</style>
