<script>
  import { createHelpers } from 'vuex-map-fields'
  import CheckButton from '@/components/Survey/components/CheckButton'
  import ThvButton from '@/components/Shared/Button'

  const { mapFields } = createHelpers({
    getterType: 'survey/getSurveyField',
    mutationType: 'survey/updateSurveyField',
  });

  export default {
    name: 'Goals',
    components: {
      ThvButton,
      CheckButton
    },
    props: {
      // name: {
      //   type: String,
      //   default: ''
      // }
    },
    computed: {
      ...mapFields([
        'name',
      ])
    },
    data () {
      return {
        goals: {
          improveEnergy: {
            name: 'Energy'
          },
          improveFitness: {
            name: 'Fitness'
          },
          improveLongTermHealth: {
            name: 'Long-term health'
          },
          improveMood: {
            name: 'Mood'
          },
          improveSleep: {
            name: 'Sleep'
          },
          improveWeight: {
            name: 'Weight'
          }
        }
      }
    },
    methods: {
      submit () {
        this.$router.push('/diet')
      },
      back () {
        this.$router.push('/name')
      },
      selected () {
        console.log('selected')
      }
    }
  }
</script>

<template lang='pug'>
  .grid-x.grid-x-margin
    .cell.small-12.medium-6.medium-offset-3
      .survey-questions__goals.align-center
        h1 Nice to meet you, {{ name }}. What would you like to focus on?
        p.body--large.question-description Choose up to four
        .spacer.sp__top--sm

        check-button(
          v-for='(goal, key) in goals',
          :key='key',
          :text='goal.name',
          :value='goal.name'
        )

        .grid-x.button-container
          .cell.auto
            .back-button-container
              .back-button(@click='back') BACK
          .cell.auto.align-right
            thv-button(
              element='button',
              size='large'
              @click='submit'
            ) Next
</template>
