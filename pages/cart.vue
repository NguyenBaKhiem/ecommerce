<template lang="pug">
  #cart.container-without-nav
    nav-bar(
      fixed
      left-arrow
      :border="false"
      :z-index="2001"
      :title="$t('pages.my_order.title')"
      @click-left="onClickLeft"
      style="height: 48px"
    )
    checkbox-group.card-goods(
      v-model="checkedGoods"
    )
      checkbox.card-goods__item(
        v-for="item in cartList"
        :key="item.Goodid"
        :name="item.Goodid"
      )
        card(
          :title="item.Goodname"
          :desc="item.Gooddescribe"
          :num="item.Cartcount"
          :thumb="item.GoodImg"
        )
          template(slot="price")
            div(class="van-card__price")
              div
                span(class="van-card__price-integer") {{ item.GoodPriceaftersale }}
                span(class="van-card__price-currency") &nbsp;VND
          template(slot="price")
            div(class="van-card__origin-price")
                | 100000
                span(class="van-card__price-currency") &nbsp;VND
          div.footer(slot="footer")
            span.add(
              @click.stop="reduceCount(item,item.Cartcount)"
            )
              van-button.btn(size="mini")
                | -
            span.input(
              @click.stop="showModal(item)"
            )
              span.input-edit
                | {{item.Cartcount}}
            span.reduce(
              @click.stop="addCount(item,item.Cartcount)"
            )
              van-button.btn(size="mini")
                | +

    dialog(
      v-model="modalShow"
      show-cancel-button
      :before-close="beforeClose"
      title="数量修改"
    )
      .modal-box
        span.add(
          @click.stop="reduceEditCount"
        )
          van-button.btn(size="mini")
            | -
        span.input
          input(
            type="number"
            v-model.number="editNum"
          )
        span.reduce(@click.stop="addEditCount")
          van-button.btn(size="mini")
            | +
    submit-bar(
      cart-bar
      currency="VND"
      :decimal-length="0"
      v-if="this.cartList.length"
      :label="isEdit ? '': 'Tất cả'"
      :price="isEdit ? undefined : totalPrice"
      :button-text="isEdit ? 'Xóa' : 'Đặt hàng'"
      @submit="onSubmit"
    )
      span.selectAll(@click="selectAll")
        checkbox(v-model="checkedAll")
          | {{checkedAllMsg}}
</template>
<script type="text/javascript">
import { NavBar, Checkbox, SubmitBar, Dialog, CheckboxGroup, Toast, Card } from 'vant'
export default {
  name: 'Cart',

  components: {
    Checkbox,
    SubmitBar,
    NavBar,
    Dialog,
    CheckboxGroup,
    Card
  },

  data () {
    return {
      cartList: [],
      checkedGoods: [],
      checkedAll: false,
      checkedAllMsg: 'All',
      isEdit: false,
      modalShow: false,
      editGood: {},
      editNum: 0,
      timer: 0
    }
  },

  computed: {
    totalPrice () {
      let all = 0
      this.cartList.forEach(item => {
        all += this.checkedGoods.includes(item.Goodid) ? item.GoodPrice * item.Cartcount : 0
      })
      return all * 100
    },
    rightText () {
      if (this.cartList.length) {
        return this.isEdit ? 'Thực hiện' : 'Sửa'
      } else {
        return ''
      }
    }
  },

  watch: {
    checkedGoods () {
      if (this.checkedGoods.length === this.cartList.length) {
        this.checkedAll = true
        this.checkedAllMsg = 'Bỏ chọn'
      }
      if (this.checkedGoods.length < this.cartList.length) {
        this.checkedAll = false
        this.checkedAllMsg = 'Chọn tất cả'
      }
    }
  },

  created () {
    this.init()
  },

  methods: {
    onClickLeft () {
      this.$router.back()
    },
    init () {
      this.cartList = [
        {
          Cartcount: 1,
          Goodid: 8,
          Goodname: '小米8',
          GoodPrice: 21999,
          GoodPriceaftersale: 21999,
          Goodcount: 966,
          Gooddescribe: '【全版本买就赠手环2】Xiaomi/小米 小米8年度旗舰全面屏骁龙845双频GPS智能拍照游戏手机刘海屏AI',
          Gooddealprice: 0,
          GoodItem: '1,2,3',
          GoodImg: '/good/pic-2.jpg'
        }
      ]
      this.checkedGoods = []
    },
    editCart () {
      this.isEdit = !this.isEdit
    },
    reduceCount (item, count) {
      if (!count && count !== 0) {
        Toast({
          position: 'bottom',
          message: 'Giá trị không đúng~'
        })
        return
      }
      if (count <= 1) {
        Toast({
          position: 'bottom',
          message: 'Giá trị không được nhỏ hon 1~'
        })
        return
      }
      count--
      item.Cartcount = count
      this.updateCartCountFun(item.Goodid, count)
    },
    addCount (item, count) {
      if (!count && count !== 0) {
        Toast({
          position: 'bottom',
          message: 'Giá trị không đúng~'
        })
        return
      }
      if (count >= item.Goodcount) {
        Toast({
          position: 'bottom',
          message: '只有这么多了~'
        })
        return
      }
      count++
      item.Cartcount = count
      this.updateCartCountFun(item.Goodid, count)
    },
    reduceEditCount () {
      if (!this.editNum && this.editNum !== 0) {
        Toast({
          position: 'bottom',
          message: 'Giá trị không đúng~'
        })
        return
      }
      if (this.editNum <= 1) {
        Toast({
          position: 'bottom',
          message: 'Giá trị không được nhỏ hon 1~'
        })
        return
      }
      this.editNum--
    },
    addEditCount () {
      if (!this.editNum && this.editNum !== 0) {
        Toast({
          position: 'bottom',
          message: 'Giá trị không đúng~'
        })
        return
      }
      if (this.editNum >= this.editGood.Goodcount) {
        Toast({
          position: 'bottom',
          message: '只有这么多了~'
        })
        return
      }
      this.editNum++
    },
    showModal (item) {
      this.modalShow = true
      this.editGood = item
      const count = item.Cartcount
      this.editNum = count
    },
    goHome () {
      this.$router.push('/')
    },
    beforeClose (action, done) {
      if (action === 'confirm') {
        if (!this.editNum) {
          Toast({
            position: 'bottom',
            message: 'Giá trị không đúng~'
          })
          done(false)
          return
        }
        if (this.editNum > this.editGood.Goodcount) {
          Toast({
            position: 'bottom',
            message: 'Hết hàng~'
          })
          done(false)
          return
        }
        if (this.editNum < 1) {
          Toast({
            position: 'bottom',
            message: '数量太少了~'
          })
          done(false)
          return
        }
        this.editGood.Cartcount = this.editNum
        this.updateCartCountFun(this.editGood.Goodid, this.editNum)
        done()
      } else {
        done()
      }
    },
    formatPrice (price) {
      return price.toFixed(2)
    },
    selectAll () {
      if (this.checkedAll) {
        for (let i = 0; i < this.cartList.length; i++) {
          this.checkedGoods.push(this.cartList[i].Goodid)
        }
        this.checkedAllMsg = '全不选'
      } else {
        this.checkedGoods = []
        this.checkedAllMsg = '全选'
      }
    },
    updateCartCountFun (id, count) {
      clearTimeout(this.timer)
      this.timer = setTimeout(() => {
        // updateCartCount({ id: id, num: count })
        //   .then(result => {
        //     console.log(result)
        //   })
        //   .catch(error => {
        //     console.log(error)
        //   })
      }, 500)
    },
    onSubmit () {
      if (this.isEdit) {
        if (!this.checkedGoods.length) {
          Toast({
            position: 'bottom',
            message: '没有选择物品~'
          })
          return
        }
        Dialog.confirm({
          title: '警告',
          message: '确实要删除吗?'
        }).then(() => {
          const params = {
            delId: this.checkedGoods
          }
          // delFromCart(params)
          //   .then(result => {
          //     console.log(result)
          //     this.$toast.success('删除成功')
          //     this.init()
          //   })
          //   .catch(error => {
          //     console.log(error)
          //   })
        })
      } else {
        if (!this.checkedGoods.length) {
          Toast({
            position: 'bottom',
            message: '没有选择物品~'
          })
          return
        }
        const orderGood = this.cartList.filter(item => this.checkedGoods.includes(item.Goodid))
        // this.setOrderGood(orderGood)
        this.$router.push('/Order')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.cart {
  margin-bottom: 120px;
}
::v-deep.card-goods {
  padding-top: 48px;
  padding-bottom: 0;
  background-color: #fff;
  .card-goods__item {
    position: relative;
    background-color: #fafafa;
    border-bottom: 1px solid #e5e5e5;
    .van-checkbox__label {
      width: 100%;
      padding: 0 10px 0 15px;
      box-sizing: border-box;
    }
    .van-checkbox__icon {
      top: 50%;
      left: 10px;
      z-index: 1;
      margin-top: -10px;
      position: absolute;
    }
    .van-card__price {
      color: #f44;
    }
  }
}
.modal-box {
  margin: 20px 0;
}
.footer,
.modal-box {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.footer input,
.modal-box input {
  outline: 0;
  border: 0;
  width: 50px;
  text-align: center;
  border-bottom: 1px solid #f6b539;
  margin: 0 6px;
}
.footer .input .input-edit,
.modal-box .input .input-edit {
  padding: 3px 10px;
  font-size: 14px;
  text-align: center;
  background-color: #fafafa;
  border-bottom: 1px solid #f6b539;
  margin: 0 6px;
}
.footer .btn,
.modal-box .btn {
  width: 30px;
  margin: 0;
}
.nogood {
  position: absolute;
  width: 220px;
  text-align: center;
  color: #666;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  .btn {
    margin-top: 16px;
  }
}
.selectAll {
  margin-left: 10px;
}
.cart-bar {
  bottom: 50px;
}

</style>
