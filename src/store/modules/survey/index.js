import actions from './actions'
import mutations from './mutations'
import state from './state'
import getters from './getters'

import { createHelpers } from 'vuex-map-fields'

const { getSurveyField, updateSurveyField } = createHelpers({
  getterType: 'getSurveyField',
  mutationType: 'updateSurveyField'
})
// const merged = {...obj1, ...obj2}
export default {
  namespaced: true,
  state: state(),
  actions,
  mutations: { ...mutations, updateSurveyField },
  getters: { ...getters, getSurveyField }
}
