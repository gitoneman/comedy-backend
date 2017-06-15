<template>
  <div class="detail">
    <div class="container">
      <h2>{{detail.title}}</h2>
      <div v-html="convertContent"></div>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
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
  },
  mounted () {
    this.id = this.$route.params.id
    this.$store.dispatch('post/getDetail', this.id)
  }
}
</script>
<style lang="scss">
.detail {
}
</style>
