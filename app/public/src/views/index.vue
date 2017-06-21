<template>
  <div class="front">
    <router-view></router-view>
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
