<template>
  <div class="banner">
    <div class="banner__inner">
      <ul class="banner__slider">
        <li class="banner__item">
          <a target="_blank" href="javascript://">

          </a>
        </li>
      </ul>
      <div class="control">
        <div class="control__item control__item--prev"> &lt; </div>
        <div class="control__item control__item--next"> &gt; </div>
      </div>
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
  .banner {
    position: relative;
    height: 462px;
    overflow: hidden;
    zoom: 1;
    @media screen and (max-width: 414px) {
      height: 2.6rem;
      margin-left: 0!important;
      width: 100%!important;
      img {
        width: 100%;
      }
    }
    &__inner {
      position: relative;
      height: 100%;
      @media screen and (max-width: 414px) {
        height: 100%;
      }
    }
    &__slider {
      list-style: none;
      padding-left: 0;
      position: absolute;
      height: 100%;
      width: 100%;
      @media screen and (max-width: 414px) {
        position: relative;
        margin-bottom: 0;
      }
      img {
        position: absolute;
        left: 50%;
        margin-left: -960px;
        @media screen and (max-width: 414px) {
          margin-left: 0;
          left: 0;
          position: relative;
        }
      }
    }
    &__item {
      position: relative;
      overflow: hidden;
      height: 100%;
    }
    .control {
      display: none;
    }
  }
</style>
