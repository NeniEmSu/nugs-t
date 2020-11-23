<template>
  <div class="__nuxt-error-page">
    <div class="error">
      <img src="~/assets/img/loading.gif" alt="404 image in a house" class="img-fluid" />

      <h1 class="title">404 Not found</h1>
      <p class="description">I'm sorry but i couldn't quite find what you were looking for,</p>
      <nuxt-link to="/" class="error-link nuxt-link-active">Go to home page</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NuxtError',
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  head() {
    return {
      title: this.message,
      meta: [
        {
          name: 'viewport',
          content:
            'width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no',
        },
      ],
    }
  },
  computed: {
    statusCode() {
      return (this.error && this.error.statusCode) || 500
    },
    message() {
      return this.error.message || '<%= messages.client_error %>'
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/variables.scss';
@import '~/assets/scss/_extends.scss';
.__nuxt-error-page {
  padding: 1rem;
  color: #47494e;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: sans-serif;
  font-weight: 100 !important;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -webkit-font-smoothing: antialiased;
}
.__nuxt-error-page .error {
  max-width: 450px;
}
.__nuxt-error-page img {
  width: 150px;
  height: auto;
  margin: 0 auto;
}
.title {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 23px;
  align-items: center;
  text-align: center;
  color: #8b8b8b;
  margin-top: 20px;
  margin-bottom: 8px;
}
.description {
  color: #7f828b;
  line-height: 21px;
  margin-bottom: 10px;
  margin-top: 40px;
}
a {
  @extend %custom_btn_outline_black;
  margin: 16px auto 0;
}
</style>
