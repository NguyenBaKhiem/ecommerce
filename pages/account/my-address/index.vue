<template lang="pug">
  #my-address.container-without-nav
    nav-bar(
      fixed
      left-arrow
      :border="false"
      :z-index="2001"
      :title="$t('pages.my_address.title')"
      @click-left="onClickLeft"
    )
    .content
      address-list(
        :list="list"
        v-model="chosenAddressId"
        :disabled-list="disabledList"
        disabled-text="The following address is out of range"
        default-tag-text="Default"
        @add="onAdd"
        @edit="onEdit"
      )
</template>

<script>
import { AddressList, NavBar, Icon } from 'vant'

export default {
  name: 'MyAddress',

  components: {
    Icon,
    NavBar,
    AddressList
  },

  asyncData () {
  },

  data: () => ({
    chosenAddressId: 1,
    list: [
      {
        id: 1,
        name: 'John Snow',
        tel: '13000000000',
        address: 'Somewhere',
        isDefault: true
      },
      {
        id: 2,
        name: 'Ned Stark',
        tel: '1310000000',
        address: 'Somewhere'
      }
    ],
    disabledList: [
      {
        id: 3,
        name: 'Tywin',
        tel: '1320000000',
        address: 'Somewhere'
      }
    ]
  }),

  // computed: {
  //   variables () {
  //     return variablesjs
  //   }
  // },

  methods: {
    onAdd () {
    },

    onClickLeft () {
      this.$router.back()
    },

    onEdit (item, index) {
      this.$router.push({ name: 'account-my-address-id-edit', params: { id: item.id } })
    }
  }
}
</script>

<style lang="scss" scoped>
  ::v-deep#my-address {
    .van-address-list {
      &__bottom {
        bottom: 50px;
        background: transparent;
      }
    }
  }
</style>
