<template lang="pug">
  .d-layout(:class="$style.desktopLayout")
    DAppHeader
    slot
</template>

<script>
import DAppHeader from '@/components/desktop/DAppHeader'

export default {
  name: 'DesktopLayout',

  components: {
    DAppHeader
  }
}
</script>

<style lang="scss" scoped module>
.desktopLayout {
  background-color: #ffffff;
}
</style>
