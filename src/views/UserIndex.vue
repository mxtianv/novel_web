<template>
  <div class="user-index center">
    <ul>
      <li>
        <router-link to="/book/5ec24e70f4fdb48b0ac42bd1">
          <img src="../assets/plate-2-best.jpg" alt="">
        </router-link>
        <p>为啥他们都崇拜我</p>
      </li>
    </ul>
  </div>
</template>

<script>
</script>

<style scoped="scoped">
  .user-index {
    min-height: 500px;
    border: 1px dotted #999;
    margin-bottom: 20px;
    padding: 20px;
  }
  ul {
    display: flex;
  }
  ul li {
    list-style: none;
    width: calc(100% / 8);
  }
  ul li img {
    width: 80%;
    height: 150px;
  }
  ul li p {
    font-size: 14px;
    color: #555;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
  }
</style>
