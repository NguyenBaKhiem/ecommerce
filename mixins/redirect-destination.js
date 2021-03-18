import { cloneDeep } from 'lodash'

export default {
  name: 'RedirectDestination',

  methods: {
    redirectDestination (dd = '/') {
      const destination = cloneDeep(this.$auth.$storage.getUniversal('redirect')) || dd
      this.$auth.$storage.setUniversal('redirect', null)
      this.$router.push(destination)
    }
  }
}
