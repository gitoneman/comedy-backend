<template>
  <div class="side">
    <div class="my">
      <img class="avatar" src="http://comedy.oss-cn-hangzhou.aliyuncs.com/static/avatar.png" alt="">
      <h4 class="name">摘下橘子的男人</h4>
      <p class="desc">受够了太久的平庸，被生活遗忘太多次的人生总要留下些什么，所以我</p>
    </div>
    <ul>
      <li><a href="">私信</a></li>
      <li><a href="">归档</a></li>
      <li><a href="">RSS</a></li>
      <li><a href="">搜索</a></li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'side',
    methods: {

    }
  }
</script>

<style scoped lang="scss">
  @import '../styles/mixin.scss';
  .my {
    padding: 40px 20px;
    background: #282828;
    @include mobile {
      padding: 0.4rem 0.2rem;
    }
  }
  .avatar {
    border-radius: 200px;
    margin: 0 auto;
    display: block;
    @include mobile {
      width: 1.4rem;
      height: 1.4rem;
    }
  }
  .name {
    text-align: center;
    margin: 20px 0 40px;
    color: #fff;
    @include mobile {
      margin: 0.4rem 0.4rem;
    }
  }
  .desc {
    color: #d1d1d1;
    font-size: 12px;
    @include mobile {
      padding: 0 0.2rem;
    }
  }
  .list {

  }
  .side {
    ul {
      list-style: none;
      margin-top: 40px;
      @include mobile {
        overflow: hidden;
        display: flex;
        margin-top: 0;
      }
      li {
        &:last-child {
          border: none;
        }
        @include mobile {
          float: left;
          flex-grow: 1;
        }
        a {
          text-decoration: none;
          color: #fff;
          padding: 10px 0;
          display: block;
          text-align: center;
          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
    .header {
      border-bottom: 1px solid #eee;
    }
  }
</style>
