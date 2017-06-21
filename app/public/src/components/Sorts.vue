<template>
  <div class="sorts">
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
    methods: {

    }
  }
</script>

<style scoped lang="scss">
  .sorts {
    background: #fff;
    width: 210px;
    ul {
      list-style: none;
      margin-top: 40px;
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
          border-bottom: 1px solid #e1e1e1;
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
