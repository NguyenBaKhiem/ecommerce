<template lang="pug">
  #address-edit.container-without-nav
    nav-bar(
      fixed
      left-arrow
      :border="false"
      :z-index="2001"
      style="height: 48px"
      :title="$t('pages.edit_address.title')"
      @click-left="onClickLeft"
    )
    div(
      :style="{ marginTop: '48px', height: 'calc(100vh - 48px - 50px)' }"
    )
      address-edit(
        :area-list="areaList"
        show-postal
        show-delete
        show-set-default
        show-search-result
        :search-result="searchResult"
        :area-columns-placeholder="['Tỉnh/TP', 'Quận/Huyện', 'Xã/Phường']"
        @save="onSave"
        @delete="onDelete"
        @change-detail="onChangeDetail"
      )
</template>

<script>
import { AddressEdit, NavBar } from 'vant'

export default {
  name: 'EditAddress',

  components: {
    AddressEdit,
    NavBar
  },

  data: () => ({
    areaList: {
      province_list: {
        10000: 'Nam Định',
        120000: 'Hà Nội'
      },
      city_list: {
        10100: 'Vụ Bản',
        10200: 'Nam Trực',
        120100: 'Cầu Giấy',
        120200: 'Ba Đình'
      },
      county_list: {
        10101: 'Thành Lợi',
        10102: 'Phú Cốc',
        1201013: 'Dịch Vọng',
        1201023: 'Dịch Vọng Hậu',
        1202253: 'Trúc Bạch'
      }
    },
    searchResult: []
  }),

  methods: {
    onSave () {
    },
    onDelete () {
    },
    onChangeDetail (val) {
      if (val) {
        this.searchResult = [
          {
            name: 'Yuki Khiêm Nguyễn',
            address: '67 Đình Thôn, Quận Mĩ Đình, Hà Nội'
          }
        ]
      } else {
        this.searchResult = []
      }
    },
    onClickLeft () {
      this.$router.back()
    },
    onClickSave () {
      this.$i18n.setLocale(this.radio)
      this.$router.back()
    }
  }
}
</script>
