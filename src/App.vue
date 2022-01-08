<template>
  <router-view/>
</template>

<style lang="scss">
// @import './assets/styles/normalize.scss';
@import './assets/styles/reset.scss';
</style>

<style lang="scss">
@use './assets/styles/themeVars.scss' as *;

/** Native CSS Vars **/
// default theme
:root {
  --heading-font-family: #{$headingFontFamily};
  --body-font-family: #{$bodyFontFamily};
  --base-font-color: #{$baseFontColor};
  --base-font-size: #{$baseFontSize}px;
  --app-background-color: #{$appBackgroundColor};
  --primary-branding-color:#{$primaryBrandingColor};
  --secondary-branding-color:#{$secondaryBrandingColor};
}

// dark theme
@media (prefers-color-scheme: dark) {
  :root {
  --base-font-color: #{$baseFontColorDark};
  --app-background-color: #{$appBackgroundColorDark};
  }
}
body {
  background-color: var(--app-background-color);
  font-family: var(--body-font-family);
  font-size: var(--base-font-size);
  color: var(--base-font-color);
  margin: 16px;
}

p {
  line-height: 1.5;
  margin-bottom: 1em;
}
</style>
