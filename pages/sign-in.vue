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
    <b-row align-h="center" class="pt-4">
      <b-col lg="4" md="6">
        <b-card bg-variant="light">
          <busy-overlay />
          <form>
            <b-form-group label="Email">
              <b-input ref="email" v-model="email" autofocus placeholder="Email address" />
            </b-form-group>

            <b-form-group label="Password">
              <b-input-group>
                <b-input-group-prepend is-text class="clickable">
                  <b-icon
                    :icon="passwordIcon"
                    font-scale="1.5"
                    @click="hidePassword = !hidePassword"
                  >
                  </b-icon>
                </b-input-group-prepend>
                <b-input
                  v-model="password"
                  :type="passwordType"
                  placeholder="password"
                  required
                  name="password"
                />
              </b-input-group>
            </b-form-group>

            <div class="text-center">
              <b-btn variant="primary" block @click="signIn"> sign in </b-btn>
            </div>
            <div class="text-center" style="margin-top: 20px">
              Don't have an account yet? <nuxt-link to="/sign-up">Sign Up</nuxt-link>
            </div>
          </form>
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
    passwordType() {
      return this.hidePassword ? 'password' : 'text'
    },
    passwordIcon() {
      return this.hidePassword ? 'eye-fill' : 'eye-slash-fill'
    },
    redirect() {
      return this.$route.query.redirect && decodeURIComponent(this.$route.query.redirect)
    },
    isCallback() {
      return Boolean(this.$route.query.callback)
    },
  },
  methods: {
    signIn() {
      this.error = null
      return this.$auth
        .loginWith('local', {
          data: {
            email: this.email,
            password: this.password,
          },
        })
        .then((response, append = false) => {
          this.$store.dispatch('toast/setToast', {
            title: response.data.message,
            variant: response.data.type,
            text: `You have successfully signed in, ${this.$auth.user.userName}`,
            delay: 5000,
          })
        })
        .catch((error) => {
          this.error = error
        })
    },
  },
}
</script>

<style lang="scss" scoped>
.login-button {
  border: 0;
}
.clickable {
  cursor: pointer;
}

a {
  color: #7625bc;
}
</style>
