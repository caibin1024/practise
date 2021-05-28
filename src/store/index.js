import { createStore } from 'vuex'

export default createStore({
  state: {
    ctx: null,
  },
  getters: {
    getColorByIndex: (state) => (index) => {
      if (state.ctx==null) {
        return [238, 238, 238, 1]
      } else {
        return state.ctx.getImageData(index[0], index[1], 1, 1).data
      }
    }
  },
  mutations: {
    setCtx(state, payload) {
      state.ctx = payload
    },
  },
  actions: {
  },
  modules: {
  }
})
