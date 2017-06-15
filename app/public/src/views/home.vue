<template>
  <div class="container">
    <ui-banner></ui-banner>
    <div id="side">
      this is side
    </div>
    <div id="main">
      <Posts></Posts>
    </div>
  </div>
</template>
<script>
import Posts from '../components/Posts'
import Banner from '../components/Banner'

export default {
  name: 'home',
  data: () => {
    return {
      page: 'home'
    }
  },
  methods: {
    handleStart () {
      console.log(1122)
    }
  },
  components: {
    Posts,
    'ui-banner': Banner
  }
}
</script>
<style lang="scss">

</style>
