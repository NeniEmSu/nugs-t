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
  data() {
    return {
      count: 0,
    }
  },
  mounted() {
    this.serviceWorker()
  },
  methods: {
    serviceWorker: async function () {
      const workbox = await window.$workbox
      if (workbox) {
        workbox.addEventListener('installed', (event) => {
          if (event.isUpdate) {
            this.showUpdateNotification()
          }
        })
      }
    },
    showUpdateNotification() {
      // Use a shorter name for `this.$createElement`
      const h = this.$createElement
      const id = `notification`

      const vNodesTitle = h('p', { class: ['text-center', 'mb-0'] }, [
        // h('b-spinner', { props: { type: 'grow', small: true } }),
        h('strong', ` Update! `),
        h('b-spinner', { props: { type: 'grow', small: true } }),
      ])

      const vNodesMsg = h(
        'div',
        { class: ['d-flex', 'flex-grow-1', 'align-items-baseline', 'mr-2'] },
        [
          h('strong', ` New content is available! `),
          h(
            'b-button',
            {
              class: ['btn-default btn-sm ml-auto'],
              on: {
                click: () => {
                  window.location.reload()
                  this.$bvToast.hide(id)
                },
              },
            },
            'Reload'
          ),
        ]
      )

      this.$bvToast.toast([vNodesMsg], {
        id: id,
        title: [vNodesTitle],
        toaster: 'b-toaster-bottom-center',
        variant: 'info',
        noCloseButton: true,
        noAutoHide: true,
        solid: true,
      })
    },
  },
}
</script>

<style lang="scss">
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
  display: block;
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
  padding: 2rem;
  @media #{$small_mobile} {
    padding: 1rem;
  }
  @media #{$large_mobile} {
    padding: 1.25rem;
  }
  @media #{$tab_device} {
    padding: 1.5rem;
  }
  @media #{$medium_device} {
    padding: 1.75rem;
  }
}

.form-group {
  transition: ease-in-out all 300ms;

  > .form-label {
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

  > .textarea-label {
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
    transform: translate(1em, -6.8em) scale(0.8);
    transform-origin: 0 0;
    transition: all 300ms ease-in-out;
  }

  > textarea {
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 19px;
    background-color: var(--white);
    color: var(--black);
    resize: none;

    padding: 8px 25px;
    border: 2px solid var(--border-color);
    box-sizing: border-box;
    border-radius: 10px;
    box-shadow: none;

    &::placeholder {
      color: transparent;
    }
    &:focus {
      background-color: var(--white);

      box-shadow: none;
      outline: none;
      color: var(--color);
      border-color: #506076;
    }
  }

  .custom-control {
    padding-left: 1.5rem;
    @media #{$small_mobile} {
      padding: 0.5rem;
    }
    @media #{$large_mobile} {
      padding: 1rem;
    }
  }

  .custom-control-input:checked ~ .custom-control-label::before {
    color: var(--color);
    border-color: var(--border-color);
    background-color: var(--dark-accent);
  }
}

textarea > label {
  transform: translate(1em, -10.7em);
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

  :hover {
    color: var(--color);
  }
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
