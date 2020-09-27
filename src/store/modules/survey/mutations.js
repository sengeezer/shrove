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
  }
}
