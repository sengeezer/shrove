<script>
  export default {
    name: 'CheckButton',
    props: {
      text: {
        type: String,
        required: true
      },
      value: {
        type: String,
        required: true
      },
      selected: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<template lang='pug'>
  .check-button(
    :class="{ 'check-button--selected': selected }",
    tabindex='0',
    value=''
  ) {{ text }}

</template>

<style lang='stylus'>
  .check-button
    height: 6.25rem;
    border-radius: 4px;
    border: solid 1px #ced0d9;
    background-color: #ffffff;
    font-size: 1.125rem;
    line-height: 1.5;
    padding: 2.125rem;
    margin-bottom: 0.938rem;
    color: #3d4250;

    @media (min-width: 768px)
      height: 7.5rem;
      padding: 2.5rem;
      font-size: 1.25rem;
      line-height: 1.6;
      margin-bottom: 1.5rem;

    &--selected
      border: solid 2px #3ecadd;
      background-color: #f4fcfd;
</style>
