<template lang="pug">
  component(:is="$mobile ? 'MobileLayout' : 'DesktopLayout'")
    div
      transition(:name="slide")
        Nuxt
</template>

<script>
export default {
  data: () => ({
    slide: 'slide-left'
  }),
  watch: {
    $route (to, from) {
      const toDepth = to.path.split('/').length
      const fromDepth = from.path.split('/').length
      this.slide = toDepth < fromDepth ? 'slide-right' : 'slide-left'
    }
  }
  // head () {
  //   const i18nHead = this.$nuxtI18nHead({ addSeoAttributes: true })
  //   return {
  //     htmlAttrs: {
  //       myAttribute: 'My Value',
  //       ...i18nHead.htmlAttrs
  //     },
  //     meta: [
  //       {
  //         hid: 'description',
  //         name: 'description',
  //         content: 'My Custom Description'
  //       },
  //       ...i18nHead.meta
  //     ],
  //     link: [
  //       {
  //         hid: 'apple-touch-icon',
  //         rel: 'apple-touch-icon',
  //         sizes: '180x180',
  //         href: '/apple-touch-icon.png'
  //       },
  //       ...i18nHead.link
  //    ]
  //   }
  // }
}
</script>

<style>
html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}

.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition-duration: 0.05s;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.55, 0, 0.1, 1);
  overflow: hidden;
}

.slide-left-enter,
.slide-right-leave-active {
  opacity: 0;
  transform: translateX(2em);
}

.slide-left-leave-active,
.slide-right-enter {
  opacity: 0;
  transform: translateX(-2em);
}
</style>
