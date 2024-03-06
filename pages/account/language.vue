<template lang="pug">
  #switch-language.container-without-nav
    nav-bar(
      fixed
      left-arrow
      :border="false"
      :z-index="2001"
      :title="$t('pages.language.title')"
      :right-text="$t('common.confirm')"
      @click-left="onClickLeft"
      @click-right="onClickSave"
    )

    .content
      radio-group(v-model="radio")
        cell-group
          cell(
            v-for="locale in availableLocales"
            :key="locale.code"
            :title="$t(`pages.language.${locale.code}`)"
            clickable
            @click="radio = locale.code"
          )
            radio(
              slot="right-icon"
              :name="locale.code"
            )
</template>

<script>
import { RadioGroup, CellGroup, Cell, Radio, NavBar } from 'vant'

export default {
  name: 'Language',

  components: {
    RadioGroup,
    CellGroup,
    NavBar,
    Radio,
    Cell
  },

  asyncData ({ app }) {
    return {
      availableLocales: app.i18n.locales,
      radio: app.i18n.locale
    }
  },

  methods: {
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

<style lang="scss" scoped>
</style>
