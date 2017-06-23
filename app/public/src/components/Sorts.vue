<template>
  <div class="sorts" :class="open ? 'open' : ''">
    <div class="menu" @click="clickdoor"><i class="el-icon-menu"></i></div>
    <ul>
      <li><a href="">原创文章</a></li>
      <li><a href="">别处转载</a></li>
      <li><a href="">体验好文</a></li>
      <li><a href="">原创文章</a></li>
      <li><a href="">别处转载</a></li>
      <li><a href="">体验好文</a></li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'sorts',
    data () {
      return {
        open: false
      }
    },
    methods: {
      clickdoor () {
        this.open = !this.open
      }
    }
  }
</script>

<style scoped lang="scss">
  @import '../styles/mixin.scss';
  .menu {
    display: none;
    @include mobile {
      position: absolute;
      color: #fff;
      right: -40px;
      top: 16px;
      z-index: 1;
      display: block;
      font-size: 20px;
    }
  }
  .sorts {
    background: #fff;
    width: 210px;
    transition: all 0.3s;
    @include mobile {
      height: 100%;
      &.open {
        transform: translateX(210px);
      }
    }
    ul {
      list-style: none;
      margin-top: 40px;
      @include mobile {
        margin-top: 0;
      }
      li {
        &:last-child {
          border: none;
          a {
            border-bottom: none;
          }
        }
        a {
          text-decoration: none;
          color: #666;
          padding: 14px 0;
          display: block;
          text-align: center;
          border-bottom: 1px solid rgba(225, 225, 225, 0.5);
          &:hover {
            color: #ff6817;
          }
        }
      }
    }
    .header {
      border-bottom: 1px solid #eee;
    }
  }
</style>
