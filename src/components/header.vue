<template>
  <component :is="`h${ semanticLevel }`" :class="[$style[displayAs], `evHeader`]" ><slot></slot></component>
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
.heading1 {
  font-family: var(--heading-font-family);
  font-size: var(--heading-one-font-size);
  line-height: var(--heading-one-line-height);
  margin: var(--heading-one-margin);
}
.heading2 {
  font-family: var(--heading-font-family);
  font-size: var(--heading-two-font-size);
  line-height: var(--heading-two-line-height);
  margin: var(--heading-two-margin);
}
</style>

<style lang="scss">
@use '../assets/styles/_functions';
@use '../assets/styles/_themeVars';

.evHeader {
  --heading-font-family: #{themeVars.$headingFontFamily};

  --heading-one-font-size: #{functions.fontSize(themeVars.$headingOneSize)};
  --heading-one-line-height: #{themeVars.$headingOneLineHeight};
  --heading-one-margin: #{themeVars.$headingOneMargin};

  --heading-two-font-size: #{functions.fontSize(themeVars.$headingTwoSize)};
  --heading-two-line-height: #{themeVars.$headingTwoLineHeight};
  --heading-two-margin: #{themeVars.$headingTwoMargin};
}
</style>
