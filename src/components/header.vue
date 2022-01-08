<template>
  <component :is="`h${ semanticLevel }`" :class="$style[displayAs]" ><slot></slot></component>
</template>

<script>
export default {
  name: 'EvHeader',
  props: {
    // semantic level
    semanticLevel: {
      type: Number,
      required: true,
      validator(value) {
        return [1,2,3,4,5,6].includes(value)
      }
    },
    // visual sizing
    displayAs: {
      type: String,
      required: true,
      validator(value) {
        return ['heading1', 'heading2', 'heading3', 'heading4', 'heading5', 'heading6'].includes(value)
      }
    }
  }
}
</script>

<style lang="scss" module>
@use '../assets/styles/_functions';
  .heading1 {
    font-family: var(--heading-font-family);
    font-size: functions.fontSize(24);
    line-height: 1.2em;
    margin-bottom: 16px;
  }
  .heading2 {
    font-family: var(--heading-font-family);
    font-size: functions.fontSize(20);
    line-height: 1.2em;
    margin-bottom: 12px;
  }
</style>