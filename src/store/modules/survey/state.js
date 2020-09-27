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
  },
  goalsSelected: {
    keys: [],
    numberSelected: 0
  },
  diets: {
    no: {
      name: 'No',
      isSelected: false
    },
    coeliac: {
      name: 'Coeliac',
      isSelected: false
    },
    lowCarbHighFat: {
      name: 'Low-carb, high-fat',
      isSelected: false
    },
    paleo: {
      name: 'Paleo',
      isSelected: false
    },
    pescatarian: {
      name: 'Pescatarian',
      isSelected: false
    },
    plantBased: {
      name: 'Plant-based',
      isSelected: false
    },
    other: {
      name: 'Other',
      isSelected: false
    }
  },
  dietsSelected: {
    keys: [],
    numberSelected: 0
  },
  dob: null
})

export default state
