export default {
  updateGoalState (state, key) {
    state.goals[key].isSelected = !state.goals[key].isSelected
  },
  addGoal (state, key) {
    state.goalsSelected.numberSelected++
    state.goalsSelected.keys.push(key)
  },
  removeGoal (state, key) {
    state.goalsSelected.numberSelected--
    state.goalsSelected.keys = state.goalsSelected.keys.filter(el => el !== key)
  },
  updateDietState (state, key) {
    state.diets[key].isSelected = !state.diets[key].isSelected
  },
  addDiet (state, key) {
    state.dietsSelected.numberSelected++
    state.dietsSelected.keys.push(key)
  },
  removeDiet (state, key) {
    state.dietsSelected.numberSelected--
    state.dietsSelected.keys = state.dietsSelected.keys.filter(el => el !== key)
  },
  updateDob (state, val) {
    state.dob = val
  }
}
