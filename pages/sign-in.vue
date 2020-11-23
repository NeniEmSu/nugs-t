<template>
  <div>
    <h1 class="text-center">Sign In</h1>

    <b-alert v-if="error" show variant="danger">
      <h4 class="alert-heading">Error!</h4>
      {{ error.response.data.message || error.response.data.error.message }}
    </b-alert>
    <b-alert v-if="$auth.$state.redirect" show dismissible>
      You have to sign in before accessing to
      <strong>{{ $auth.$state.redirect }}</strong>
    </b-alert>
    <b-row align-h="center">
      <b-col lg="4" md="6">
        <b-card bg-variant="light" class="p-1 p-sm-3 p-md-4">
          <busy-overlay />
          <AuthForm :sign-up-page="false" />
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import busyOverlay from '~/components/busy-overlay'
export default {
  name: 'SignIn',
  components: { busyOverlay },
  middleware: ['auth'],
  data() {
    return {
      email: '',
      password: '',
      error: null,
      hidePassword: true,
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

<style lang="scss" scoped></style>
