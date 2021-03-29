<template lang="pug">
  div.m-app-header
    vs-navbar(
      shadow
      square
      center-collapsed
      v-model='active'
    )
      template(#left)
        vs-button(
          @click='activeSidebar = !activeSidebar'
          flat
          icon
        )
          icon(name="wap-nav")
      img(src='/logo-2.png' alt='' width="40" height="40")
      template(#right)
        vs-button(
          :active="false"
          transparent
          size="small"
          @click.native="popupSearch = true"
        )
          vs-avatar(
            size="30"
          )
            icon(name="search")
    vs-sidebar(
      square
      :reduce="reduce"
      v-model='active'
      :open.sync='activeSidebar'
      notLineActive
    )
      template(#logo)
        img(src='/logo.png' alt width="34" height="34")
      vs-sidebar-item#home
        template(#icon)
          icon(name="wap-home")
        | Home
      vs-sidebar-item#market
        template(#icon)
          icon(name="shop")
        | Become a Shop
      divider.w-100(v-if="!reduce" dashed :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }")
        | {{ $t('navigation.promotion') }}
      vs-sidebar-item#Music
        template(#icon)
          icon(name="hot-o")
        | Deal
      vs-sidebar-item#chat
        template(#icon)
          icon(name="coupon-o")
        | {{ $t('navigation.promotion_ticket') }}
      divider.w-100(v-if="!reduce" dashed :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }")
        | {{ $t('navigation.support') }}
      vs-sidebar-item#hotline
        template(#icon)
          icon(name="service-o")
        | HOTLINE: 0347914422
      vs-sidebar-group
        template(#header)
          vs-sidebar-item(arrow)
            template(#icon)
              icon(name="notes-o")
            | {{ $t('navigation.guide.title') }}
        vs-sidebar-item#order
          template(#icon)
            icon(name="orders-o")
          | {{ $t('navigation.guide.order') }}
        vs-sidebar-item#installment_purchase
          template(#icon)
            icon(name="credit-pay")
          | {{ $t('navigation.guide.installment_purchase') }}
        vs-sidebar-item#become_a_shop
          template(#icon)
            icon(name="shop-o")
          | {{ $t('navigation.guide.become_a_shop') }}
      vs-sidebar-item#faq
        template(#icon)
          icon(name="description")
        | {{ $t('navigation.faq') }}
      vs-sidebar-item#terms_of_use
        template(#icon)
          icon(name="newspaper-o")
        | {{ $t('navigation.terms_of_use') }}
      vs-sidebar-item#operation_regulations
        template(#icon)
          icon(name="records")
        | {{ $t('navigation.operation_regulations') }}
      vs-sidebar-group
        template(#header)
          vs-sidebar-item(arrow)
            template(#icon)
              icon(name="description")
            | Chính sách
        vs-sidebar-item#github
          template(#icon)
            icon(name="revoke")
          | Đổi trả
        vs-sidebar-item#codepen
          template(#icon)
            icon(name="logistics")
          | Vận chuyển
        vs-sidebar-item#discord
          template(#icon)
            icon(name="peer-pay")
          | Hàng nhập khẩu
        vs-sidebar-item#Javascript
          template(#icon)
            icon(name="paid")
          | Bảo mật thanh toán
        vs-sidebar-item#git
          template(#icon)
            icon(name="manager-o")
          | Bảo mật thông tin
        vs-sidebar-item#git
          template(#icon)
            icon(name="sign")
          | Bảo mật ứng dụng
        vs-sidebar-item#git
          template(#icon)
            icon(name="failure")
          | Giải quyết khiếu nại
      template(#footer)
        vs-row(:justify="reduce ? 'space-around' : 'space-between'")
          vs-avatar(size="36")
            img(src="https://vuesax.com/avatars/avatar-6.png" alt)
          vs-avatar.cs-pointer(
            size="36"
            info
            @click.native="activeSidebar = false"
          )
            icon(:name="'cross'")
            //- icon(:name="reduce ? 'arrow' : 'arrow-left'")
    popup(
      v-model="popupSearch"
      position="bottom"
      :style="{ height: '100%' }"
    )
      search(
        v-model="value"
        show-action
        autofocus
        input-align="center"
        shape="round"
        placeholder="Placeholder"
        @cancel="popupSearch = false"
      )
</template>
<script>
import { Icon, Divider, Search, Popup } from 'vant'

export default {
  name: 'MobileAppHeader',

  components: {
    Icon,
    Divider,
    Search,
    Popup
  },

  data: () => ({
    active: 'home',
    activeSidebar: false,
    reduce: false,
    popupSearch: false,
    value: ''
  }),

  methods: {
  }
}
</script>

<style lang="scss" scoped module>
.appHeader {
}
</style>

<style lang="scss" scoped>
@import "~/assets/components/m-app-header"
</style>
