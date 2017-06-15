<template>
  <div class="posts">
    <ul>
      <li class="posts__item" v-for="item in list">
        <h2 class="posts__title">{{item.title}}</h2>
        <img class="posts__img" :src="item.img" alt="" v-if="item.img">
        <p class="posts__desc">{{item.desc}}</p>
        <div class="posts__action">
          <el-button type="primary" @click="()=>{readmore(item.objectId)}">翻你的牌</el-button>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import { mapState } from 'vuex'

export default {
  name: 'posts',
  data: () => {
    return {
    }
  },
  computed: {
    ...mapState({
      list: state => state.post.data
    })
  },
  methods: {
    readmore (id) {
      this.$router.push(`/home/detail/${id}`)
    },
    add () {
      this.$store.dispatch('post/increment')
    }
  },
  mounted () {
    this.$store.dispatch('post/getList')
  }
}
</script>
<style scoped lang="scss">
.posts {
  ul {
    list-style: none;
    padding-left: 0;
  }
  &__item {
    border-bottom: 1px solid #eee;
    padding: 20px;
  }
  &__img {
    width: 100%;
  }
  &__title {
    margin-bottom: 10px;
  }
  &__desc {

  }
  &__action {
    text-align: right;
    margin-top: 20px;
  }
}
</style>
