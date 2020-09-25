export default {
  updateGoalState (state, key) {
    state.goals[key].isSelected = !state.goals[key].isSelected
  }
}
