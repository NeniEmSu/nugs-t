<template>
  <div class="container">
    <div class="sign-up">
      <h1 class="text-center">Sign Up</h1>

      <b-alert v-if="error" show variant="danger">
        <h4 class="alert-heading">Error</h4>
        <!-- eslint-disable-next-line vue/no-v-html -->
        <div v-html="error"></div>
      </b-alert>

      <b-alert
        v-if="$auth.$state.redirect"
        show
        class="position-fixed fixed-top m-0 rounded-0"
        style="z-index: 2000"
        variant="info"
        dismissible
      >
        You have to be login before accessing to
        <strong>{{ $auth.$state.redirect }}</strong>
      </b-alert>

      <b-row align-h="center">
        <b-col lg="6" md="8" sm="9">
          <div class="form-card">
            <busy-overlay />
            <AuthForm :sign-up-page="true" />
          </div>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SignUp',
  middleware: ['auth'],
  auth: 'guest',
  data() {
    return {
      error: null,
    }
  },
  computed: {
    redirect() {
      return this.$route.query.redirect && decodeURIComponent(this.$route.query.redirect)
    },
    isCallback() {
      return Boolean(this.$route.query.callback)
    },
  },
  methods: {},
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/variables.scss';
@import '~/assets/scss/_extends.scss';
.sign-up {
  padding: 0 0 130px 0;
  @media #{$small_mobile} {
    padding: 0 0 25px 0;
  }
  @media #{$large_mobile} {
    padding: 0 0 40px 0;
  }
  @media #{$tab_device} {
    padding: 0 0 50px 0;
  }
}
</style>
