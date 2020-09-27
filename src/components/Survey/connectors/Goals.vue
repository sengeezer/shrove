<script>
  import { createHelpers } from 'vuex-map-fields'
  import CheckButton from '@/components/Survey/components/CheckButton'
  import ThvButton from '@/components/Shared/Button'

  const { mapFields } = createHelpers({
    getterType: 'survey/getSurveyField',
    mutationType: 'survey/updateSurveyField'
  })

  export default {
    name: 'Goals',
    components: {
      ThvButton,
      CheckButton
    },
    computed: {
      ...mapFields([
        'name',
        'goals',
        'goalsSelected'
      ])
    },
    data () {
      return {
        maxGoals: 4
      }
    },
    methods: {
      submit () {
        this.$router.push('/diet')
      },
      back () {
        this.$router.push('/name')
      },
      toggleSelected (key) {
        if (this.$store.state.survey.goalsSelected.numberSelected <= this.maxGoals - 1) {
          this.$store.commit('survey/updateGoalState', key)

          if (this.$store.state.survey.goals[key].isSelected) {
            this.$store.commit('survey/addGoal', key)
          } else {
            this.$store.commit('survey/removeGoal', key)
          }

          // console.log('selected:', key, this.$store.state.survey.goalsSelected.numberSelected, this.maxGoals)
        }
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
          :selected='goal.isSelected'
          @click.native='toggleSelected(key)'
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
