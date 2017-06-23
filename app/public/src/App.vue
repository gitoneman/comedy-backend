<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
  data () {
    return {
      aa: ''
    }
  },
  mounted () {

  },
  beforeDestroy () {

  },
  methods: {

  }
}
</script>

<style lang="scss">
@import './styles/index.scss';
#app {
  font-family: Helvetica, PingFangSC-Regular, Microsoft YaHei, Arial;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

html,body {
  height: 100%;
  font-size: 14px;
}

html {
  @include mobile {
    font-size: calc(100vw/7.5);
  }
}
#app {
  position: relative;
  min-height: 100%;
  height: 100%;
}
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
</style>
