<template>
  <div>
    <Row>
      <Col>
        <Menu theme="dark" :open-names="['1', '2']" @on-select="onSelect">
          <Submenu name="1">
            <template slot="title">
              <Icon type="ios-paper"></Icon>
              内容管理
            </template>
            <Menu-item name="1-1">文章管理</Menu-item>
            <Menu-item name="1-2">评论管理</Menu-item>
            <Menu-item name="1-3">举报管理</Menu-item>
          </Submenu>
          <Submenu name="2">
            <template slot="title">
              <Icon type="ios-people"></Icon>
              用户管理
            </template>
            <Menu-item name="2-1">新增用户</Menu-item>
            <Menu-item name="2-2">活跃用户</Menu-item>
          </Submenu>
        </Menu>
      </Col>
    </Row>
  </div>
</template>
<script>
  export default {
    name: 'menu',
    methods: {
      onSelect (name) {
        this.$router.push(name)
      }
    }
  }
</script>
