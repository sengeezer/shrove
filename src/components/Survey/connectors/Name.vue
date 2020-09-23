<script>
  // import { mapGetters, mapState } from 'vuex'
  import { createHelpers } from 'vuex-map-fields'
  import TextInput from '@/components/Shared/TextInput'
  import ThvButton from '@/components/Shared/Button'

  const { mapFields } = createHelpers({
    getterType: 'survey/getSurveyField',
    mutationType: 'survey/updateSurveyField',
  });

  export default {
    name: 'Name',
    components: {
      TextInput,
      ThvButton
    },
    // data () {
    //   return {
    //     name: ''
    //   }
    // },
    // computed: {
    //   name: {
    //     get () {
    //       return this.$store.state.survey.firstName
    //     },
    //     set (value) {
    //       this.$store.commit('updateFirstName', value)
    //     }
    //   }
    // },
    computed: {
      ...mapFields([
        'name',
      ])
    },
    methods: {
      // updateFirstName (e) {
      //   this.$store.commit('updateFirstName', e.target.value)
      // },
      submit () {
        this.$router.push('/goals')
      }
    }
  }
</script>

<template lang='pug'>
  .grid-x.grid-x-margin
    .cell.small-12.medium-6.medium-offset-3
      .survey-questions__name.align-center
        h1 Hey! We're Thriva. What’s your first name?
        .spacer.sp__top--sm

        text-input.survey-input(
          type='text',
          name='name',
          v-model='name'
          @keyup.enter='submit'
        )

        .grid-x.button-container
          .cell.auto.align-right
            thv-button(
              element='button',
              size='large'
              :disabled='!name'
              @click='submit'
            ) Next

</template>
