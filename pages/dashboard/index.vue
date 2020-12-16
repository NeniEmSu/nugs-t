<template>
  <div class="dashboard-page">
    <div class="container">
      <h1>Dashboard</h1>

      <div class="row">
        <div class="col-md-8 form-card">
          <h2 class="my-4">Account Info</h2>
          <p>
            Name:
            <span class="text-capitalize">{{ state.user.name }}</span>
          </p>
          <p>
            Email:
            <span>{{ state.user.email }}</span>
          </p>
          <p>
            First Name:
            <span class="text-capitalize">{{
              state.user.first_name ? state.user.first_name : '-'
            }}</span>
          </p>
          <p>
            Last Name:
            <span class="text-capitalize">{{
              state.user.last_name ? state.user.last_name : '-'
            }}</span>
          </p>
          <p>Current access Roles:</p>
          <ul v-for="(role, index) in state.user.roles" :key="index" horizontal="md">
            <li class="text-capitalize">{{ role }}</li>
          </ul>
          <p>Description:</p>
          <p>{{ state.user.description ? state.user.description : '-' }}</p>
        </div>
        <div class="col-md-4 text-center mt-3">
          <h3>Settings</h3>
          <b-avatar
            :src="
              $auth.user.simple_local_avatar
                ? $auth.user.simple_local_avatar['192']
                : $auth.user.avatar_urls['96']
            "
            class="my-2"
            :size="180"
          ></b-avatar>
          <p>
            <span>@{{ state.user.username }}</span>
          </p>
          <p>
            Role:
            <span>{{ state.user.roles[0] }}</span>
          </p>
          <div class="text-center w-75 mx-auto">
            <ColorModePicker />
          </div>
          <div class="text-center mx-auto">
            <button class="btn_black" @click="$auth.fetchUser()">Refetch Info</button>
            <a class="btn_black" href="https://api-nugs-t.neniemsu.xyz/wp-login.php" target="_blank"
              >Update Info</a
            >
            <button class="btn_black" @click="$auth.logout()">Logout</button>
          </div>
        </div>
      </div>

      <div class="extenders mt-4">
        <h3>List of students info for extension:</h3>
        <ul v-for="extender in extenders" :key="extender.id.$t">
          <li class="text-capitalize">{{ extender.content.$t }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
  middleware: ['auth'],
  data() {
    return {
      extenders: [],
    }
  },
  computed: {
    state() {
      return this.$auth.$state
    },
  },
  created() {
    this.getExtRequests()
  },
  methods: {
    refreshTokens() {
      this.$auth.refreshTokens().catch((e) => {
        this.error = e + ''
      })
    },
    async getExtRequests() {
      const res = await this.$axios.get(
        'https://spreadsheets.google.com/feeds/list/1sUdqc7xITgLPAIfOz75FkPjfXSSf_rI8kOv9nBYMnNo/1/public/values?alt=json'
      )
      this.extenders = res.data.feed.entry
      console.log(res)
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

.btn_black {
  @extend %custom_btn_outline_black;
  margin: 10px auto;
}
</style>
