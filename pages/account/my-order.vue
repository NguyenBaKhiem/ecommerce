<template lang="pug">
  #myOrder.ontainer-without-nav
    nav-bar(
      fixed
      left-arrow
      :border="false"
      :z-index="2001"
      :title=" $t('pages.my_order.title')"
      @click-left="onClickLeft"
      style="height: 48px"
    )
    tabs(
      v-model="active"
      sticky
      animated
      swipeable
      ref="tabs"
      type="line"
      color="#28BE57"
      :border="false"
      :offset-top="48"
      :swipe-threshold="3"
      title-active-color="#28BE57"
    )
      tab(:name="$t('pages.my_order.all')")
        div(slot="title")
          span
            | {{ $t('pages.my_order.all') }}
        OrderType(:orderTypeDataArray="typeArray")
      tab(:name="$t('pages.my_order.received')")
        div(slot="title")
          span
            | {{ $t('pages.my_order.received') }}
        OrderType(:orderTypeDataArray="typeArray")
      tab(:name="$t('pages.my_order.transport')")
        div(slot="title")
          span
            | {{ $t('pages.my_order.transport') }}
        OrderType(:orderTypeDataArray="typeArray")
      tab(:name="$t('pages.my_order.successed')")
        div(slot="title")
          span
            | {{ $t('pages.my_order.successed') }}
        OrderType(:orderTypeDataArray="typeArray")
      tab(:name="$t('pages.my_order.failed')")
        div(slot="title")
          span
            | {{ $t('pages.my_order.failed') }}
        OrderType(:orderTypeDataArray="typeArray")
</template>
<script type="text/javascript">
import { Tabs, Tab, NavBar } from 'vant'
import OrderType from '@/components/mobile/order/OrderType'
export default {
  data () {
    return {
      typeArray: [],
      active: this.$route.params.active
    }
  },

  components: {
    OrderType,
    Tabs,
    Tab,
    NavBar
  },

  methods: {
    onClickLeft () {
      this.$router.back()
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
