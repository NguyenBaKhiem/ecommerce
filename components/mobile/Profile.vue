<template lang="pug">
  .m-layout(:class="$style.mobileLayout")
    MAppHeader
    slot
    MAppFooter
</template>

<script>
import MAppHeader from '@/components/mobile/MAppHeader'
import MAppFooter from '@/components/mobile/MAppFooter'

export default {
  name: 'MobileLayout',

  components: {
    MAppHeader,
    MAppFooter
  }
}
</script>

<style lang="scss" scoped module>
.mobileLayout {
  background-color: aliceblue;
}
</style>
