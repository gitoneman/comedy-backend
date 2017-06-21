<template>
  <div class="">
    <div id="side">
      <ui-side></ui-side>
    </div>
    <div id="main">
      <Posts></Posts>
    </div>
  </div>
</template>
<script>
import Posts from '../components/Posts'
import Banner from '../components/Banner'
import Side from '../components/Side'

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
    'ui-banner': Banner,
    'ui-side': Side
  }
}
</script>
<style lang="scss">

</style>
