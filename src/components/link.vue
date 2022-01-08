<template>
  <a :class="[asButton ? $style.button : $style.link]"><span><slot></slot></span></a>
</template>

<script>
export default {
  name: 'EvLink',
  props: {
    asButton: {
      type: Boolean,
      required: false
    }
  }
}
</script>

<style lang="scss" module>
@use '../assets/styles/_buttons';
.link {
  text-decoration: underline;
}
</style>