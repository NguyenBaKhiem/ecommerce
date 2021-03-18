<template lang="pug">
  tabbar.footer(v-model="active")
    tabbar-item(name="home" icon="home-o" :to="{ name: 'index' }")
    tabbar-item(name="categories" icon="apps-o")
    tabbar-item(name="checkout")
      template(#icon)
        vs-avatar(
          style=""
          size="30"
          badge-color='danger'
          badge-position='top-right'
        )
          icon(name="shopping-cart-o")
          template(#badge)
            | 28
    tabbar-item(name="profile" icon="user-o" :to="{ name: 'account' }")
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
    active: 'home'
  })
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
