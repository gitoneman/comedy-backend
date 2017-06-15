<template>
  <div class="wrap">
    <div class="wrap__inner">
      <h2 class="logo">LOGO</h2>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'header',
    methods: {

    }
  }
</script>
<style scoped lang="scss">
.wrap {
  height: 70px;
  line-height: 70px;
  background: #313540;
  &__inner {
    width: 1000px;
    margin: 0 auto;
    color: #fff;
  }
}
.logo {
  font-size: 22px;
}
</style>
