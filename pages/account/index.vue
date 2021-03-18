<template>
  <div
    id="account"
    class="container"
  >
    <cell-group>
      <cell
        style="background-color: #dce6ff;color:#000000;"
        label-class="labelClass"
        is-link
        center
      >
        <template slot="title">
          <div
            v-if="userInfo.token"
            class="personMsg"
          >
            <vs-avatar size="40">
              <img :src="userImage.loginIcon" alt="">
              <!--               <template #icons>
                <img src="/social/facebook.svg" alt="">
                <img src="/social/google.svg" alt="">
                <img src="/social/zalo.svg" alt="">
              </template> -->
            </vs-avatar>
            <!--             <div
              v-if="userInfo.sex"
              class="sex"
            >
              <img
                :src="userInfo.sex === 1 ? userImage.female : userImage.male"
                alt=""
              >
            </div> -->
            <div
              v-if="userInfo.token"
              class="personInfo"
            >
              <span>{{ userInfo.user_name }}</span>
              <span>Tel: 0124214</span>
            </div>
          </div>
          <div
            v-if="!userInfo.token"
            class="personMsg"
          >
            <vs-avatar>
              <template #text>
                Customer
              </template>
            </vs-avatar>
            <div
              v-if="!userInfo.token"
              class="personInfo"
            >
              <div>Login</div>
            </div>
          </div>
        </template>
      </cell>
    </cell-group>
    <cell-group>
      <cell
        title="My order"
        icon="label-o"
        :value="'View all orders'"
        is-link
      />
      <grid :border="false" :column-num="3">
        <grid-item
          v-for="(order,index) in orderData"
          :key="index"
          :icon="order.icon"
          :text="$t(order.title)"
        />
      </grid>
    </cell-group>
    <cell-group style="margin-top:0.4rem">
      <cell
        title="My Coupons"
        icon="coupon-o"
        :value="userInfo.token ? '2' : ''"
        is-link
        :to="{ name: 'account-my-coupon' }"
      />
      <cell
        title="My shipping address"
        icon="todo-list-o"
        is-link
        :to="{ name: 'account-my-address' }"
      />
    </cell-group>
    <cell-group style="margin-top:0.4rem">
      <cell
        title="benefits of bank card holders"
        icon="good-job-o"
        is-link
        :to="{ name: 'account-language' }"
      />
      <cell
        title="Payment"
        icon="idcard"
        is-link
        :to="{ name: 'account-my-address' }"
      />
    </cell-group>

    <cell-group style="margin-top:0.4rem">
      <cell
        title="Gavo gem"
        icon="gem-o"
        is-link
        :to="{ name: 'account-language' }"
      />
      <cell
        title="bounty hunting"
        icon="gift-o"
        is-link
        :to="{ name: 'account-language' }"
      />
    </cell-group>

    <cell-group style="margin-top:0.4rem">
      <cell
        title="setting"
        icon="setting-o"
        is-link
      />
      <cell
        title="feedback"
        icon="comment-o"
        is-link
      />
      <cell
        title="Language"
        icon="/language.svg"
        is-link
        :to="{ name: 'account-language' }"
      />
    </cell-group>

    <div
      class="version text-center"
      style="margin: 10px 0"
    >
      version 1.4.3
    </div>
    <div style="padding: 0 10px;">
      <van-button
        type="info"
        block
        plain
        size="small"
      >
        Logout
      </van-button>
    </div>
  </div>
</template>

<script>
import { Cell, CellGroup, Grid, GridItem } from 'vant'
export default {
  name: 'Account',

  components: {
    Cell,
    CellGroup,
    Grid,
    GridItem
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
    }
  }),

  computed: {
    orderData () {
      return [
        { icon: 'cart-circle-o', title: this.$t('pages.my_order.received') },
        { icon: 'logistics', title: this.$t('pages.my_order.transport') },
        { icon: 'completed', title: this.$t('pages.my_order.successed') },
        { icon: 'pending-payment', title: this.$t('pages.my_order.pending') },
        { icon: 'failure', title: this.$t('pages.my_order.failed') }
      ]
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
