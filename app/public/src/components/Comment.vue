<template>
  <div class="comment">
    <div id="cloud-tie-wrapper" class="cloud-tie-wrapper"></div>
  </div>
</template>
<script>
import { mapState } from 'vuex'

export default {
  name: 'comment',
  data: () => {
    return {
    }
  },
  computed: {

  },
  methods: {

  },
  mounted () {
    window.cloudTieConfig = {
      url: document.location.href,
      sourceId: '',
      productKey: '601e835f3ad3407384d115db61b4ba75',
      target: 'cloud-tie-wrapper'
    }
    const s = document.createElement('script')
    s.type = 'text/javascript'
    s.src = 'https://img1.cache.netease.com/f2e/tie/yun/sdk/loader.js'
    document.body.appendChild(s)
  }
}
</script>
<style scoped lang="scss">
@import '../styles/mixin.scss';

</style>
<style>
  .tie-submit-btn {
    text-indent: -9999px;
    position: relative;
  }
  .tie-submit-btn:after {
    content: "留个脚印";
    position: absolute;
    right: 28px;
    text-indent: 0px;
  }
</style>
