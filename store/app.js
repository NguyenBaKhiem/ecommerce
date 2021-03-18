const initState = () => {
  return {
    mobile: null
  }
}
export const state = initState

export const getters = {
  updatedAt: (s) => s.updatedAt,
  mobile: (s) => s.mobile || []
}

export const mutations = {
  sync (state, payload) {
    state.updatedAt = new Date()
    state.mobile = payload.mobile
  }
}

export const actions = {
  // something action
}
