<template lang="pug">
  #coupons.container-without-nav
    nav-bar(
      fixed
      left-arrow
      :border="false"
      :z-index="2001"
      :title="$t('pages.my_coupon.title')"
      @click-left="onClickLeft"
    )
    client-only
      .content
        coupon-list(
          :coupons="coupons"
          currency="VND"
          @exchange="onExchange"
        )
</template>

<script>
import { NavBar, CouponList } from 'vant'

export default {

  components: {
    NavBar,
    CouponList
  },
  data () {
    return {
      coupons: [{
        available: 1,
        condition: 'No threshold',
        reason: '',
        value: 150,
        name: 'Coupon 1',
        startAt: 1549104000,
        endAt: 1614592000,
        valueDesc: 1.5,
        unitDesc: 'RBM'
      }, {
        available: 1,
        condition: 'No threshold',
        reason: '',
        value: 200,
        name: 'Coupon 2',
        startAt: 1549104000,
        endAt: 1614592000,
        valueDesc: 1.5,
        unitDesc: 'RBM'
      }]
    }
  },

  methods: {
    onClickLeft () {
      this.$router.go(-1)
    },
    onExchange (code) {
      if (code === 'yuki') {
        this.coupons.push(this.coupons[0])
      }
    }
  }
}
</script>

<style lang="scss" scoped>
::v-deep#coupons {
  .van-nav-bar__title {
    color: black;
  }
  .van-icon {
    color: #dedede;
  }
  .van-coupon-list {
    // height: calc(#{$--full-height} - #{$--height-header});
    // overflow: auto;
    &__bottom {
      bottom: var(--sat);
      z-index: 2001;
    }
  }
}
</style>
