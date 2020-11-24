<template>
  <div>
    <h1 class="text-center">Sign Up</h1>

    <b-alert v-if="error" show variant="danger">
      <h4 class="alert-heading">Error</h4>
      <!-- eslint-disable-next-line vue/no-v-html -->
      <div v-html="error"></div>
    </b-alert>
    <b-alert v-if="$auth.$state.redirect" show>
      You have to be login before accessing to
      <strong>{{ $auth.$state.redirect }}</strong>
    </b-alert>
    <b-row align-h="center">
      <b-col lg="4" md="6">
        <div class="form-card p-1 p-sm-3 p-md-4">
          <busy-overlay />
          <AuthForm :sign-up-page="true" />
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: 'SignIn',
  data() {
    return {}
  },
  computed: {},
  methods: {},
}
</script>

<style lang="scss" scoped></style>
