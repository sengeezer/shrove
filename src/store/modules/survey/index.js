import actions from './actions'
import mutations from './mutations'
import state from './state'
import getters from './getters'

import { createHelpers } from 'vuex-map-fields'

const { getSurveyField, updateSurveyField } = createHelpers({
  getterType: 'getSurveyField',
  mutationType: 'updateSurveyField'
})

export default {
  namespaced: true,
  state: state(),
  actions,
  mutations: { ...mutations, updateSurveyField },
  getters: { ...getters, getSurveyField }
}
