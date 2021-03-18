export const actions = {
  nuxtServerInit ({ commit }, { app, store, params, $mobile }) {
    _getAppData(app, store, $mobile)
  }
}

function _getAppData (app, store, mobile) {
  try {
    store.commit('app/sync', {
      mobile
    })
  } catch (err) {
    store.commit('app/sync', {})
  }
}
