import { createStore } from 'vuex'

export default createStore({
  state: {
    ctx:null
  },
  getters:{
    getColorByIndex:(state)=>(index)=>{
      return state.ctx.getImageData(index[0], index[1], 1, 1).data
    }
  },
  mutations: {
    setCtx(state,payload){
        state.ctx=payload
        
    }
  },
  actions: {
  },
  modules: {
  }
})
