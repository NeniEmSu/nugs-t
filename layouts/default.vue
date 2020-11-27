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
export default {
  async mounted() {
    const workbox = await window.$workbox
    if (workbox) {
      workbox.addEventListener('installed', (event) => {
        // If we don't do this we'll be displaying the notification after the initial installation, which isn't perferred.
        if (event.isUpdate) {
          // whatever logic you want to use to notify the user that they need to refresh the page.
          if (confirm(`New content is available!. Click OK to refresh`)) {
            window.location.reload()
          }
        }
      })
    }
  },
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700&family=Overpass&family=Roboto&display=swap');
@import '~/assets/scss/variables.scss';
@import '~/assets/scss/_extends.scss';
*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto Slab', serif;
  box-sizing: border-box;
  background-color: var(--bg);
  color: var(--color);
  font-kerning: normal;
  font-size: 19px;
  font-weight: 400;
  overflow-y: scroll;
  overflow-x: hidden;
  transition: background-color 350ms, all 350ms ease-in-out;
  transition-timing-function: cubic-bezier(0.11, 0.89, 0.31, 0.99);

  @media (max-width: 500px) {
    font-size: 18px;
  }
}

body {
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 0.85rem;
  line-height: 1.765em;
  transition: background-color 350ms, all 350ms ease-in-out;
  background-color: var(--bg);
  color: var(--color);
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
h5,
h6 {
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 700;
}

h1 {
  font-size: 55px;
  text-transform: capitalize;
  font-weight: 700;
  line-height: 1.18;
  @media #{$small_mobile} {
    font-size: 25px;
    line-height: 1.3;
  }
  @media #{$large_mobile} {
    font-size: 32px;
    line-height: 1.3;
  }
  @media #{$tab_device} {
    font-size: 40px;
    line-height: 1.3;
  }
  @media #{$medium_device} {
    font-size: 36px;
    line-height: 1.4;
  }
}

p {
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 19px;
  @media #{$small_mobile} {
    font-size: 14px;
    line-height: 16px;
  }
  @media #{$large_mobile} {
    font-size: 16px;
    line-height: 17px;
  }
  @media #{$tab_device} {
    font-size: 16px;
    line-height: 18px;
  }
  @media #{$medium_device} {
    font-size: 16px;
    line-height: 18px;
  }
}

.sup-title {
  font-family: 'Overpass', sans-serif;
  font-style: normal;
  font-weight: 400;
}

.form-card {
  background-color: var(--bg-secondary);
  box-shadow: 4px 8px 10px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
}

.form-group {
  transition: ease-in-out all 300ms;

  > label {
    width: max-content;
    background-color: var(--white);
    padding: 0px 5px;
    border: none;
    border-radius: 5px;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 19px;
    pointer-events: none;
    display: block;
    opacity: 1;
    transform: translate(1em, -1.7em);
    transform-origin: 0 0;
    transition: all 300ms ease-in-out;
  }

  > input {
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 19px;
    background-color: var(--white);
    color: var(--black);

    padding: 8px 25px;
    border: 2px solid var(--border-color);
    box-sizing: border-box;
    border-radius: 10px;
    box-shadow: none;
  }

  .form-control {
    &::placeholder {
      color: transparent;
    }
    &:focus {
      background-color: var(--white);
      box-shadow: none;
      outline: none;
      color: var(--color);
      border-color: #506076;
      &::placeholder {
        color: var(--color);
      }
    }

    &:focus + .form-label,
    &:not(:placeholder-shown) + .form-label {
      transform: translate(1em, -2.8em) scale(0.8);
    }
  }
}

pre {
  color: var(--color);
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
  font-weight: 400;
  position: relative;
  text-decoration: none !important;
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
