<template>
  <div class="posts">
    <ul>
      <li class="posts__item" v-for="item in list">
        <span class="posts__time">{{item.createAt | formatTime}}</span>
        <div class="posts__body">
          <h3 class="posts__title">{{item.title}}</h3>
          <div class="posts__action">
            <i class="el-icon-star-off"> 10</i>
            <i class="el-icon-message"> 10</i>
          </div>
          <p class="posts__desc" v-html="item.desc"></p>
          <div class="posts__img" v-if="item.img">
            <img :src="item.img" alt="" >
          </div>
        </div>
      </li>
    </ul>
    <!--<div class="posts__pagination">
      <el-pagination
        layout="prev, pager, next"
        :total="50">
      </el-pagination>
    </div>-->
  </div>
</template>
<script>
import { mapState } from 'vuex'

export default {
  name: 'posts',
  data: () => {
    return {
    }
  },
  computed: {
    ...mapState({
      list: state => state.post.data
    })
  },
  methods: {
    readmore (id) {
      this.$router.push(`/home/detail/${id}`)
    },
    add () {
      this.$store.dispatch('post/increment')
    }
  },
  mounted () {
    this.$store.dispatch('post/getList')
  }
}
</script>
<style scoped lang="scss">
@import '../styles/mixin.scss';
.posts {
  margin-bottom: 100px;
  margin-top: 40px;
  @include mobile {
    margin-top: 0.4rem;
    margin-bottom: 1rem;
  }
  ul {
    list-style: none;
    padding-left: 0;
    border-left: 1px solid #e1e1e1;
    margin: 0 30px 0 60px;
    @media screen and (min-width: 1440px) and (max-width: 1920px) {
      width: 900px;
      margin: 0 auto;
    }
    @media screen and (min-width: 1920px) {
      width: 1000px;
      margin: 0 auto;
    }
    @include mobile {
      margin: 0;
      border-left: 0;
    }
  }
  &__item {
    border-bottom: 1px solid #eee;
    padding-bottom: 60px;
    &:hover {
      cursor: pointer;
      .posts__time {
        &:before {
          background: #ff6817;
        }
      }
      .posts__body {

      }
    }
    @include mobile {
      padding-bottom: 0.4rem;
    }
  }
  &__body {
    margin-left: 130px;
    background: #fff;
    padding: 20px;
    transition: all 0.3s;
    &:hover {
      transform: translateY(-6px);
      box-shadow: 0 26px 40px -24px rgba(204, 204, 204, 0.7);
      .posts__title {
        color: #ff6817;
      }
    }
    @media screen and (min-width: 1440px) {
      margin-left: 200px;
    }
    @include mobile {
      margin-left: 0;
    }
  }
  &__time {
    float: left;
    margin-left: 30px;
    position: relative;
    &:before {
      content: "";
      position: absolute;
      left: -40px;
      top: -2px;
      width: 20px;
      height: 20px;
      border-radius: 20px;
      background: #a7a7a7;
      transition: all 0.3s;
      @include mobile {
        content: none;
      }
    }
    @include mobile {
      float: none;
      margin-bottom: 0.2rem;
      display: block;
      font-size: 16px;
      margin-left: 0.2rem;
    }
  }
  &__img {
    overflow: hidden;
    margin-top: 20px;
    text-align: center;
    @media screen and (max-width: 1400px) {
      height: 300px;
    }
    img {
      max-width: 100%;
    }
    @include mobile {
      height: auto;
    }
  }
  &__title {
    margin-bottom: 10px;
    transition: all 0.3s;
  }
  &__desc {

  }
  &__pagination {
    text-align: center;
    margin-top: 40px;
    @include mobile {
      margin-top: 0.4rem;
    }
  }
  &__action {
    margin: 20px 0;
    i {
      margin-right: 20px;
    }
  }
}
</style>
<style>
  .el-pager li.active {
    background: #ff6817!important;
    border-color: #ff6817!important;
  }
  .el-pagination .btn-prev,
  .el-pagination .btn-next,
  .el-pager li {
    border-color: #eee!important;
  }
  .el-pagination button:hover,
  .el-pager li:hover {
    color: #ff6817!important;
  }
  .el-pager li.active:hover {
    color: #fff!important;
  }
</style>
