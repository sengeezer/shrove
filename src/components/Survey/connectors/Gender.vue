<script>
  import { createHelpers } from 'vuex-map-fields'
  import CheckButton from '@/components/Survey/components/CheckButton'
  import ThvButton from '@/components/Shared/Button'

  const { mapFields } = createHelpers({
    getterType: 'survey/getSurveyField',
    mutationType: 'survey/updateSurveyField'
  })

  export default {
    name: 'Gender',
    components: {
      ThvButton,
      CheckButton
    },
    computed: {
      ...mapFields([
        'genders'
      ])
    },
    data () {
      return {
        maxGenders: 1
      }
    },
    methods: {
      submit () {
        alert('Survey complete!')
      },
      back () {
        this.$router.push('/dob')
      },
      toggleSelected (key) {
        if (this.$store.state.survey.gendersSelected.numberSelected <= this.maxGenders - 1) {
          this.$store.commit('survey/updateGenderState', key)

          if (this.$store.state.survey.genders[key].isSelected) {
            this.$store.commit('survey/addGender', key)
          } else {
            this.$store.commit('survey/removeGender', key)
          }
        }
      }
    }
  }
</script>

<template lang='pug'>
  .grid-x.grid-x-margin
    .cell.small-12.medium-6.medium-offset-3
      .survey-questions__gender.align-center
        h1 Are you…
        .spacer.sp__top--sm
        p.body--large.question-description We need your biological sex to process your tests
        .spacer.sp__top--sm

        check-button(
          v-for='(gender, key) in genders',
          :key='key',
          :text='gender.name',
          :value='gender.name'
          :selected='gender.isSelected'
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
