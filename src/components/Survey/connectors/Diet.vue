<script>
  import { createHelpers } from 'vuex-map-fields'
  import CheckButton from '@/components/Survey/components/CheckButton'
  import ThvButton from '@/components/Shared/Button'

  const { mapFields } = createHelpers({
    getterType: 'survey/getSurveyField',
    mutationType: 'survey/updateSurveyField'
  })

  export default {
    name: 'Diet',
    components: {
      ThvButton,
      CheckButton
    },
    computed: {
      ...mapFields([
        'name',
        'diets',
        'dietsSelected'
      ])
    },
    data () {
      return {
        maxDiets: 1
      }
    },
    methods: {
      submit () {
        this.$router.push('/dob')
      },
      back () {
        this.$router.push('/goals')
      },
      toggleSelected (key) {
        if (this.$store.state.survey.dietsSelected.numberSelected <= this.maxDiets - 1) {
          this.$store.commit('survey/updateDietState', key)

          if (this.$store.state.survey.diets[key].isSelected) {
            this.$store.commit('survey/addDiet', key)
          } else {
            this.$store.commit('survey/removeDiet', key)
          }
        }
      }
    }
  }
</script>

<template lang='pug'>
  .grid-x.grid-x-margin
    .cell.small-12.medium-6.medium-offset-3
      .survey-questions__diet.align-center
        h1 Do you follow a particular diet?
        .spacer.sp__top--sm

        check-button(
          v-for='(diet, key) in diets',
          :key='key',
          :text='diet.name'
          :value='diet.name'
          :selected='diet.isSelected'
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
