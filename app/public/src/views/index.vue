<template>
  <div class="front">
    <div class="layout">
      <div id="leftside">
        <ui-side></ui-side>
      </div>
      <div id="main">
         <router-view></router-view>
      </div>
      <div id="rightside">
        <ui-sorts></ui-sorts>
      </div>
    </div>
  </div>
</template>
<script>
import Menu from '../components/Menu'
import Header from '../components/Header'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import Side from '../components/Side'
import Sorts from '../components/Sorts'

export default {
  name: 'index',
  data: () => {
    return {}
  },
  methods: {

  },
  components: {
    'ui-menu': Menu,
    'ui-header': Header,
    'ui-banner': Banner,
    'ui-footer': Footer,
    'ui-side': Side,
    'ui-sorts': Sorts
  }
}
</script>
<style lang="scss">

</style>
