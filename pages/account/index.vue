<template lang="pug">
  #account.container
    cell-group
      cell(
        is-link
        style="background-color: #dce6ff;color:#000000;"
        label-class="labelClass"
        center
      )
        template(slot="title")
          .personMsg(v-if="userInfo.token")
            vs-avatar(size="40")
              img(:src="userImage.loginIcon" alt="")
            .personInfo(v-if="userInfo.token")
              span {{ userInfo.user_name }}
              span Tel: 0124214
          .personMsg(v-if="!userInfo.token")
            vs-avatar
              template(#text)
                | Customer
            .personInfo(v-if="!userInfo.token")
              div Login
    cell-group
      cell(
        title="My order"
        icon="label-o"
        :value="'View all orders'"
        is-link
        :to="{ name: 'account-my-order' }"
      )
      grid(
        :border="false"
        :column-num="4"
      )
        grid-item(
          v-for="(order,index) in orderData"
          :key="index"
          :icon="order.icon"
          :text="order.title"
          :badge="convertBadge(order.total)"
          :to="{ name: 'account-my-order', params: { active: order.title } }"
        )
    cell-group.mt-6
      cell(
        is-link
        icon="coupon-o"
        title="My Coupons"
        :value="userInfo.token ? '2' : ''"
        :to="{ name: 'account-my-coupon' }"
      )
      cell(
        is-link
        icon="todo-list-o"
        title="My shipping address"
        :to="{ name: 'account-my-address' }"
      )
    cell-group.mt-6
      cell(
        is-link
        icon="good-job-o"
        title="benefits of bank card holders"
        :to="{ name: 'account-language' }"
      )
      cell(
        is-link
        icon="idcard"
        title="Payment"
        :to="{ name: 'account-my-address' }"
      )
    cell-group.mt-6
      cell(
        is-link
        icon="gem-o"
        title="Gavo gem"
        :to="{ name: 'account-language' }"
      )
      cell(
        is-link
        icon='gift-o'
        title='bounty hunting'
        :to="{ name: 'account-language' }"
      )
    cell-group.mt-6
      cell(
        is-link
        title="setting"
        icon="setting-o"
      )
      cell(
        is-link
        title="feedback"
        icon="comment-o"
        @click="showFeedBack = true"
      )
      cell(
        is-link
        title="Language"
        icon="/language.svg"
        :to="{ name: 'account-language' }"
      )
    popup(
      round
      closeable
      position="bottom"
      v-model="showFeedBack"
      :style="{ height: '42%' }"
    )
      .mt-30.mx-8
        field(name="rate" label="Rate")
          template(#input)
            rate(
              v-model="feedback.rate"
              required
              allow-half
            )
        field(
          readonly
          clickable
          name="picker"
          :value="feedback.type"
          :label="$t('input.feedback_type')"
          :placeholder="$t('placeholder.choose_feedback_type')"
          @click="showFeedbackPicker = true"
        )
        popup(
          round
          position="bottom"
          v-model="showFeedbackPicker"
        )
          picker(
            show-toolbar
            :columns="columns"
            @confirm="onConfirm"
            @cancel="showFeedbackPicker = false"
          )
        field(
          v-model="feedback.comment"
          rows="2"
          autosize
          :border="true"
          :label="$t('input.comment')"
          type="textarea"
          maxlength="50"
          :placeholder="$t('placeholder.type_comment')"
          show-word-limit
        )
        .mx-10.mt-30
          van-button(
            round
            block
            plain
            type="info"
            native-type="submit"
          )
            | Submit
    .version.text-center.my-10
      | version 1.4.3
    .m-10
      van-button(
        type="info"
        block
        plain
        size="small"
      )
        | Logout

</template>

<script>
import { Cell, CellGroup, Grid, GridItem, Popup, Field, Rate, Picker } from 'vant'
import { convertBadge } from '@/utilities'

export default {
  name: 'Account',

  components: {
    Cell,
    Rate,
    Grid,
    Field,
    Popup,
    Picker,
    GridItem,
    CellGroup
  },

  data: () => ({
    userImage: {
      loginIcon: 'https://vuesax.com/avatars/avatar-2.png',
      noLoginIcon: 'https://vuesax.com/avatars/avatar-3.png',
      female: 'https://vuesax.com/avatars/avatar-2.png',
      male: 'https://vuesax.com/avatars/avatar-6.png'
    },
    userInfo: {
      sex: 1,
      user_name: 'yuki',
      token: 'wqrqrqwr'
    },
    showFeedBack: false,
    feedback: {
      rate: null,
      comment: '',
      type: null
    },
    columns: ['Dịch vụ', 'Báo lỗi', 'Tính năng'],
    showFeedbackPicker: false
  }),

  computed: {
    orderData () {
      return [
        { icon: 'cart-circle-o', title: this.$t('pages.my_order.received'), total: 0, name: 'received' },
        { icon: 'logistics', title: this.$t('pages.my_order.transport'), total: 20, name: 'transport' },
        { icon: 'completed', title: this.$t('pages.my_order.successed'), total: 4, name: 'successed' },
        { icon: 'failure', title: this.$t('pages.my_order.failed'), total: 1, name: 'failed' }
      ]
    }
  },

  methods: {
    convertBadge,
    onConfirm (value) {
      this.feedback.type = value
      this.showFeedbackPicker = false
    }
  }
}
</script>

<style lang="scss" scoped>
::v-deep#account {
  .personMsg {
    display: flex;
    align-items: center;
    .sex {
      position: absolute;
      top: 3.5rem;
      left: 3.8rem;
      width: 0.1rem;
      height: 0.1rem;
      img {
        width: 1rem;
        height: 1rem;
      }
    }
    // img {
    //   width: 4rem;
    //   height: 4rem;
    //   border-radius: 50%;
    // }
    .personInfo {
      display: flex;
      flex-direction: column;
      margin-left: 0.8rem;
    }
  }
  .cell__left-icon {
    color: #45c763;
    font-size: 1.2rem;
  }
}
</style>
