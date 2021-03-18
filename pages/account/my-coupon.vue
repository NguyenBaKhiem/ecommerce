<template>
  <div
    id="switch-language"
    class="container-without-nav"
  >
    <nav-bar
      fixed
      left-arrow
      :border="false"
      :z-index="2001"
      :title="$t('pages.my_coupon.title')"
      style="height: 48px"
      @click-left="onClickLeft"
    />
    <client-only>
      <coupon-list
        :coupons="coupons"
        style="margin-top: 48px;"
        @exchange="onExchange"
      />
    </client-only>
  </div>
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
      if (code === '520it') {
        this.coupons.push(this.coupons[0])
      }
    }
  }
}
</script>

<style lang="scss" scoped>
#couponList {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: #f5f5f5;
  z-index: 999;
  .van-nav-bar__title {
    color: black;
  }
  .van-icon {
    color: #dedede;
  }
}
</style>
