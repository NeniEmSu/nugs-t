<template>
  <div class="dashboard-page">
    <div class="container">
      <b-alert show variant="secondary" dismissible> This is a secure page! </b-alert>
      <h1>Dashboard</h1>

      <div class="row">
        <div class="col-md-8 form-card">
          <h2>State</h2>
          <pre>{{ state }}</pre>
        </div>
      </div>
      <hr />
      <b-btn-group>
        <b-button @click="$auth.fetchUser()"> Fetch User </b-button>
        <b-button @click="$auth.logout()"> Logout </b-button>
      </b-btn-group>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
  middleware: ['auth'],
  computed: {
    state() {
      return JSON.stringify(this.$auth.$state, undefined, 2)
    },
  },
  methods: {
    refreshTokens() {
      this.$auth.refreshTokens().catch((e) => {
        this.error = e + ''
      })
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/variables.scss';
@import '~/assets/scss/_extends.scss';
.dashboard-page {
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
