<template lang="pug">
  vs-navbar(
    center-collapsed
    not-line
    v-model="active"
    square
    :class="$style.appHeader"
  )
    template(#left)
      img(src='/logo.png' alt='' width="40" height="40")
    vs-navbar-item#guide(:active="active == 'guide'")
      | Guide
    vs-navbar-item#docs(:active="active == 'docs'")
      | Documents
    vs-navbar-item#components(:active="active == 'components'")
      | Components
    vs-navbar-item#license(:active="active == 'license'")
      | license
    template(#right)
      vs-button(flat) Login
</template>

<script>
export default {
  name: 'DAppHeader',

  data: () => ({
    active: 'guide'
  })
}
</script>

<style lang="scss" scoped module>
.appHeader {
}
</style>
