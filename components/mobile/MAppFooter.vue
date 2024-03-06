<template lang="pug">
  tabbar.footer(
    route
    safe-area-inset-bottom
    v-model="active"
  )
    tabbar-item(name="index" icon="home-o" :to="{ name: 'index' }")
    tabbar-item(name="categories" icon="apps-o")
    tabbar-item(name="cart" :to="{ name: 'cart' }" icon="shopping-cart-o" :badge="10")
    tabbar-item(name="account" icon="user-o" :to="{ name: 'account' }")
</template>

<script>
import { Tabbar, TabbarItem, Icon } from 'vant'

export default {
  name: 'MAppFooter',

  components: {
    Tabbar,
    TabbarItem,
    Icon
  },

  data: () => ({
    active: null
  }),

  mounted () {
    this.active = this.$route.name
  }
}
</script>

<style lang="scss" scoped>
.footer {
  color: red;
  ::v-deep.vs-avatar {
    background-color: transparent;
  }
}
</style>
