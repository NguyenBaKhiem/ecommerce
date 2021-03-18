export default {
  mounted () {
    this.$focus()
  },

  methods: {
    $focus () {
      this.$nextTick(() => {
        let e = this.$refs.defaultFocus
        if (Array.isArray(e)) e = e[0]
        if (e && typeof e.focus === 'function') e.focus()
      })
    }
  }
}
