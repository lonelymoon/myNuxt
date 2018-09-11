import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import mutations from './mutations'

Vue.use(Vuex)

export default function () {
  const state = {
    user: null
  }

  return new Vuex.Store({
    state,
    getters,
    mutations
  })
}
