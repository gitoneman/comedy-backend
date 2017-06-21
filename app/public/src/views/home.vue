<template>
  <div class="layout">
    <div id="leftside">
      <ui-side></ui-side>
    </div>
    <div id="main">
      <Posts></Posts>
    </div>
    <div id="rightside">
      <ui-sorts></ui-sorts>
    </div>
  </div>
</template>
<script>
import Posts from '../components/Posts'
import Banner from '../components/Banner'
import Side from '../components/Side'
import Sorts from '../components/Sorts'

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
    'ui-side': Side,
    'ui-sorts': Sorts
  }
}
</script>
<style lang="scss">

</style>
