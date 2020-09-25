const state = () => ({
  name: '',
  goals: {
    improveEnergy: {
      name: 'Energy',
      isSelected: false
    },
    improveFitness: {
      name: 'Fitness',
      isSelected: false
    },
    improveLongTermHealth: {
      name: 'Long-term health',
      isSelected: false
    },
    improveMood: {
      name: 'Mood',
      isSelected: false
    },
    improveSleep: {
      name: 'Sleep',
      isSelected: false
    },
    improveWeight: {
      name: 'Weight',
      isSelected: false
    }
  }
})

export default state
