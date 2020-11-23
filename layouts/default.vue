<template>
  <div id="app" class="app">
    <div class="interface">
      <TheHeader />
      <main role="main">
        <nuxt />
      </main>
      <TheFooter />
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
@import '~/assets/scss/variables.scss';
@import '~/assets/scss/_extends.scss';
html {
  background-color: #f5f5f5;
  // background-color: #f6f9fc;
  box-sizing: border-box;
  color: $primary;
  font-family: 'Roboto Slab', serif;
  font-kerning: normal;
  font-size: 19px;
  font-weight: 400;
  overflow-y: scroll;
  transition: background-color 0.8s;
  transition-timing-function: cubic-bezier(0.11, 0.89, 0.31, 0.99);
  @media (max-width: 500px) {
    font-size: 18px;
  }
}
*,
*::before,
*::after {
  box-sizing: inherit;
}
body {
  background-color: #f5f5f5;
  // background-color: #f6f9fc;
  font-size: 0.85rem;
  line-height: 1.765em;
}
#app {
  > .interface {
    display: flex;
    flex-direction: column;
    overflow: hidden;
    padding-top: 80px;
    @media (max-width: 991.98px) {
      padding-top: 100px;
    }
  }
}
.app * {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  background-repeat: no-repeat;
  box-sizing: border-box;
  position: relative;
  transition-timing-function: cubic-bezier(0.11, 0.89, 0.31, 0.99);
}
h1,
h2,
h3,
h4,
h5 {
  color: #333;
  font-weight: 500;
}
.spinner {
  position: relative;
  margin: auto;
}
.lazy {
  background-color: #555;
  position: relative;
  img {
    backface-visibility: hidden;
    height: 100%;
    opacity: 0;
    transition: opacity 0.5s;
    width: 100%;
  }
  .spinner {
    left: 50%;
    margin: -20px;
    opacity: 0;
    position: absolute;
    top: 50%;
  }
  [lazy='loading'] {
    opacity: 0;
  }
  [lazy='loaded'] {
    opacity: 1;
  }
  [lazy='loading'] + .spinner {
    opacity: 1;
  }
}
html.wf-active #app,
html.wf-inactive #app {
  > .interface {
    transition: 0.5s;
    opacity: 1;
  }
  > .spinner {
    display: none;
  }
}
.page-enter-active {
  transition: opacity 0.2s;
}
.page-enter,
.page-leave-active {
  opacity: 0;
}
.page-title {
  border-bottom: 1px dotted lighten($primary, 20%);
  margin-top: 32px;
  margin-bottom: 32px;
  h1 {
    margin-bottom: 12px;
    margin-top: 0;
    padding-bottom: 0;
    @media (max-width: 500px) {
      font-size: 2rem;
    }
  }
}
a {
  color: $primary;
  font-weight: 400;
  position: relative;
  text-decoration: none;
  transition: 0.1s;
}
.fancy {
  cursor: pointer;
  &::after {
    background: rgba($accent, 0.5);
    content: '';
    height: 1px;
    left: 0;
    opacity: 0;
    position: absolute;
    top: 100%;
    transform: translateY(-4px);
    transition: height 0.1s, opacity 0.1s, transform 0.1s;
    width: 100%;
  }
  &:hover {
    color: $accent;
  }
  &:hover,
  &:focus {
    &::after {
      height: 2px;
      opacity: 1;
      transform: translateY(0);
    }
  }
}
pre {
  white-space: pre-wrap;
}
.infinite-loading-container {
  min-height: calc(64px * 2 + 40px) !important;
  padding: 64px;
}
.infinite-status-prompt {
  padding: 0 !important;
  position: relative;
  span {
    display: block;
  }
  svg {
    display: block;
    fill: rgba($primary, 0.45);
    width: 40px;
    height: 40px;
    position: relative;
    margin: auto;
  }
  div {
    bottom: -26px;
    color: rgba($primary, 0.65);
    font-size: 14px;
    left: 0;
    position: absolute;
    text-align: center;
    width: 100%;
  }
}
.hidden {
  opacity: 0;
  position: absolute;
  pointer-events: none;
}
</style>
