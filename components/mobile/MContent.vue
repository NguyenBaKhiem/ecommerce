<template lang="pug">
  .container
    notice-bar(:text="notification" left-icon="volume-o" mode="closeable")
    swipe(:autoplay="2000")
      swipe-item(v-for='(image, index) in images' :key='index')
        img(v-lazy='image')
    //- nuxt-link(v-for="locale in availableLocales" :key="locale.code" :to="switchLocalePath(locale.code)")
    //-   | {{ locale.name }}
</template>
<script>
import { Icon, Swipe, SwipeItem, NoticeBar } from 'vant'

export default {
  name: 'MobileAppHeader',

  components: {
    Icon,
    Swipe,
    SwipeItem,
    NoticeBar
  },

  data: () => ({
    notification: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    images: [
      'https://img01.yzcdn.cn/vant/apple-1.jpg',
      'https://img01.yzcdn.cn/vant/apple-2.jpg'
    ]
  }),

  methods: {}
}
</script>

<style lang="scss" scoped>
.van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
  img {
    display: block;
    box-sizing: border-box;
    width: 100%;
    height: 240px;
    padding: 30px 60px;
    background-color: #fff;
    pointer-events: none;
  }
}
</style>

<style lang="scss" scoped module>

</style>
