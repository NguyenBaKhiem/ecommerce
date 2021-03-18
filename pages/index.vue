<template lang="pug">
  MContent
</template>

<script>
import { requestPost } from '@/utilities'
import MContent from '@/components/mobile/MContent'

export default {
  name: 'Home',

  components: {
    MContent
  },

  data: () => ({}),

  mounted () {
    const code = this.$route.query.code
    if (!code) return
    requestPost('http://localhost:3030/stripetoken', {
      code
    })
      .then(data => {
        console.log(data)
      })
  },

  methods: {
    goStripeConnect () {
      const data = {
        client_id: 'ca_J56HIJlXzbNSxX8S9e5GQ5tyUcNM2PAf',
        redirect_uri: 'http://localhost:1411',
        email: 'khiem.nguyen@sotatek.com'
      }
      window.location.href = `https://connect.stripe.com/express/oauth/authorize${this.jsonToQueryString(data)}`
    },

    jsonToQueryString (json) {
      return '?' + Object.keys(json).map(key => {
        return encodeURIComponent(key) + '=' + encodeURIComponent(json[key])
      }).join('&')
    }
  }
}
</script>

<style>
.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 55px;
  color: #35495e;
  letter-spacing: 1px;
  text-transform: capitalize;
  margin: 25px 0;
}

.subtitle {
  font-weight: 300;
  font-size: 1.1rem;
  color: #526488;
  word-spacing: 2px;
  padding-bottom: 15px;
  max-width: 600px;
}

.subtitle a {
  font-weight: 500;
  color: inherit;
}

.links {
  padding-top: 15px;
  margin-bottom: 20px;
}

.content-logos {
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 500px;
}

.plus {
  font-size: 2.5rem;
  margin: 15px;
  color: #35495e;
}

.h3 {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-weight: 400;
  margin: 10px;
}
</style>
