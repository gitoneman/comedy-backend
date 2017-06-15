<template>
  <div class="front">
    <div id="header">
      <ui-header></ui-header>
    </div>
    <router-view></router-view>
    <ui-footer></ui-footer>
  </div>
</template>
<script>
import Menu from '../components/Menu'
import Header from '../components/Header'
import Banner from '../components/Banner'
import Footer from '../components/Footer'

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
    'ui-footer': Footer
  }
}
</script>
<style lang="scss">

</style>
