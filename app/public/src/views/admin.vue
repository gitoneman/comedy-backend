<template>
  <div class="admin">
    <el-menu theme="dark" mode="horizontal" :default-active="activeIndex" class="el-menu-demo" @select="handleSelect" router>
      <el-menu-item index="/home">主页</el-menu-item>
      <el-menu-item index="/admin/posts">文章管理</el-menu-item>
      <el-menu-item index="/about">关于</el-menu-item>
      <el-submenu index="2">
        <template slot="title">我</template>
        <el-menu-item index="">sunny</el-menu-item>
        <el-menu-item index="/logout">退出</el-menu-item>
      </el-submenu>
    </el-menu>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>

export default {
  name: 'index',
  data: () => {
    return {
      activeIndex: '2'
    }
  },
  methods: {
    handleSelect () {

    }
  },
  components: {

  }
}
</script>
<style lang="scss">

</style>
