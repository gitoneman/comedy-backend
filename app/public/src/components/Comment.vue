<template>
  <div class="comment">
    <div id="cloud-tie-wrapper" class="cloud-tie-wrapper"></div>
    <div id="SOHUCS" :sid="id"></div>
    <div id="uyan_frame"></div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import Util from '../libs/util'

export default {
  name: 'comment',
  data: () => {
    return {
    }
  },
  computed: {
    id: function () {
      return this.$route.params.id
    }
  },
  methods: {
    initComment: function () {
      window.changyan.api.config({
        appid: 'cyt59gF4Q',
        conf: 'prod_46a9f8de7716992f17f3114d02f17184'
      })
    }
  },
  mounted () {
    // window.cloudTieConfig = {
    //   url: document.location.href,
    //   sourceId: '',
    //   productKey: '601e835f3ad3407384d115db61b4ba75',
    //   target: 'cloud-tie-wrapper'
    // }
    // const s = document.createElement('script')
    // s.type = 'text/javascript'
    // s.src = 'https://img1.cache.netease.com/f2e/tie/yun/sdk/loader.js'
    // document.body.appendChild(s)

    // if (Util.isMobile) {
    //   window.setTimeout(() => {
    //     this.$router.go(-1)
    //   }, 1000)
    // }
    if (Util.isMobile) {
      const s = document.createElement('script')
      s.type = 'text/javascript'
      s.id = 'changyan_mobile_js'
      s.src = 'https://changyan.sohu.com/upload/mobile/wap-js/changyan_mobile.js?client_id=cyt59gF4Q&conf=prod_46a9f8de7716992f17f3114d02f17184'
      document.body.appendChild(s)
    } else {
      let s = Math.random()
      Util.appendJs(`https://changyan.sohu.com/upload/changyan.js`)
      .then(() => {
        this.initComment()
      })
    }
  },
  destroyed: function () {
    // for (var k in window) {
    //   if (k.indexOf('changyan') !== -1) {
    //     window[k] = undefined
    //   }
    // }
    window.changyan = undefined
    window.cyan = undefined
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
