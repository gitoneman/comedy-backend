<template>
  <div class="posts">
    <ul>
      <li class="posts__item" v-for="item in list">
        <span class="posts__time">2017.06.20</span>
        <div class="posts__body">
          <h3 class="posts__title">{{item.title}}</h3>
          <div class="posts__action">
            <i class="el-icon-star-off"> 10</i>
            <i class="el-icon-message"> 10</i>
          </div>
          <p class="posts__desc">{{item.body}}</p>
          <div class="posts__img" v-if="item.img">
            <img :src="item.img" alt="" >
          </div>
        </div>
      </li>
    </ul>
    <div class="posts__pagination">
      <el-pagination
        layout="prev, pager, next"
        :total="50">
      </el-pagination>
    </div>
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
.posts {
  margin-left: 100px;
  margin-bottom: 100px;
  display: inline-block;
  ul {
    list-style: none;
    padding-left: 0;
    border-left: 1px solid #e1e1e2;
    margin-top: 60px;
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
        transform: translateY(-6px);
        box-shadow: 0 26px 40px -24px rgba(204, 204, 204, 0.7);
      }
    }
  }
  &__body {
    margin-left: 130px;
    background: #fff;
    width: 600px;
    padding: 20px;
    transition: all 0.3s;
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
    }
  }
  &__img {
    height: 360px;
    overflow: hidden;
    margin-bottom: 20px;
    img {
      width: 100%;
    }
  }
  &__title {
    margin-bottom: 10px;
  }
  &__desc {

  }
  &__pagination {
    text-align: right;
    margin-top: 40px;
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
