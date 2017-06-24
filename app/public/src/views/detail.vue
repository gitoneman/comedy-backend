<template>
  <div class="detail">
    <h2 class="title">{{detail.title}}</h2>
    <span class="time">{{detail.createdAt | formatTime}}</span>
    <div class="content markdown-body" v-html="convertContent"></div>
    <ui-comment></ui-comment>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import Comment from '../components/Comment'
var mditor = require('mditor')
var parser = new mditor.Parser()

export default {
  name: 'detail',
  data: () => {
    // console.log(this.$route.params)
    return {
      page: 'detail',
      id: ''
    }
  },
  computed: {
    ...mapState({
      detail: state => state.post.detail
    }),
    convertContent: function () {
      if (this.detail.content) {
        return parser.parse(this.detail.content)
      } else {
        return ''
      }
    }
  },
  methods: {

  },
  components: {
    'ui-comment': Comment
  },
  mounted () {
    this.id = this.$route.params.id
    this.$store.dispatch('post/getDetail', this.id)
  }
}
</script>
<style lang="scss">
@import '../styles/mixin.scss';
.title {
  color: #ff6817;
}
.markdown-body {
  color: #666;
}
.detail {
  background: #fff;
  margin: 40px;
  padding: 30px 20px;
  @media screen and (min-width: 1440px) {
     max-width: 900px;
    margin: 40px auto;
  }
  @include mobile {
    margin: 0;
    padding: 0.3rem;
  }
  p {
    font-size: 16px;
    line-height: 1.8;
    margin-bottom: 20px;
    word-break: break-word;
  }
}
.time {
  margin: 10px 0;
  display: block;
}
.content {
  margin-top: 20px;
}
</style>
