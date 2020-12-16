<template>
  <form @submit.prevent="submitForm">
    <busy-overlay :loading="loading" />
    <b-alert
      v-if="error"
      show
      class="position-fixed fixed-top m-0 rounded-0"
      style="z-index: 11"
      dismissible
      variant="danger"
    >
      <h6 class="alert-heading">Error!</h6>
      <p v-text="error.response.data.message.replace('<strong>Error</strong>: ', '')"></p>
    </b-alert>
    <div class="form-group">
      <input
        id="username"
        v-model="username"
        type="text"
        class="form-control"
        required
        name="username"
        :placeholder="`${
          signUpPage ? 'A username of your choosing' : 'Your username or email address'
        } `"
      />
      <label for="username" class="form-label">username*</label>
    </div>
    <div v-if="signUpPage" class="form-group">
      <input
        id="email"
        v-model="email"
        type="email"
        class="form-control"
        required
        name="email"
        placeholder="something@email.com"
      />
      <label for="email" class="form-label">Email*</label>
    </div>

    <div class="form-group password-container">
      <input
        id="password"
        v-model="password"
        class="form-control"
        :type="passwordType"
        placeholder="Your password"
        required
        name="password"
      />
      <label for="password" class="form-label">Password*</label>
      <span class="clickable">
        <b-icon :icon="passwordIcon" font-scale="1.5" @click="hidePassword = !hidePassword">
        </b-icon>
      </span>
    </div>
    <div v-if="signUpPage" class="form-group password-container">
      <input
        id="repeat_password"
        v-model="repeat_password"
        class="form-control"
        :type="passwordType"
        placeholder="Repeat the password"
        required
        name="repeat_password"
      />
      <label for="repeat_password" class="form-label">Confirm password*</label>
      <span class="clickable">
        <b-icon :icon="passwordIcon" font-scale="1.5" @click="hidePassword = !hidePassword">
        </b-icon>
      </span>
    </div>
    <div class="form-group p-0">
      <b-form-checkbox
        id="status"
        v-model="status"
        name="status"
        value="accepted"
        required
        unchecked-value="not_accepted"
      >
        I agree to the <nuxt-link to="/terms">terms and conditions</nuxt-link> of use.
      </b-form-checkbox>
    </div>
    <template v-if="signUpPage">
      <div>
        <button class="btn_black" type="submit">Sign Up</button>
      </div>
      <div style="margin-top: 20px">
        Already got an account? <nuxt-link to="/sign-in">Sign In</nuxt-link>
      </div>
    </template>
    <template v-else>
      <div>
        <button class="btn_black" type="submit">Sign In</button>
      </div>
      <div style="margin-top: 20px">
        Don't have an account yet? <nuxt-link to="/sign-up">Sign Up</nuxt-link>
      </div>
    </template>
  </form>
</template>

<script>
import busyOverlay from '~/components/busy-overlay'
export default {
  name: 'AuthForm',
  components: { busyOverlay },
  props: {
    signUpPage: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      username: '',
      email: '',
      status: '',
      password: '',
      repeat_password: '',
      error: null,
      hidePassword: true,
      loading: false,
    }
  },
  computed: {
    passwordType() {
      return this.hidePassword ? 'password' : 'text'
    },
    passwordIcon() {
      return this.hidePassword ? 'eye-fill' : 'eye-slash-fill'
    },
  },
  methods: {
    submitForm() {
      if (this.signUpPage) this.signUp()
      else this.signIn()
    },
    signIn() {
      this.error = null
      this.loading = true
      return this.$auth
        .loginWith('local', {
          data: {
            username: this.username,
            password: this.password,
          },
        })
        .then((response) => {
          this.$store.dispatch('toast/setToast', {
            title: 'Authenticated',
            variant: 'success',
            append: true,
            text: `Welcome back, ${this.$auth.user.name}`,
            delay: 5000,
          })
          this.loading = false
        })
        .catch((error) => {
          this.$store.dispatch('toast/setToast', {
            title: 'Error',
            variant: 'danger',
            append: true,
            text: error.response.data.message.replace('<strong>Error</strong>: ', ''),
            delay: 5000,
          })
          this.error = error
          this.loading = false
        })
    },
    async signUp() {
      this.error = null
      this.loading = true
      try {
        await this.$axios
          .post('/api/auth/signup', {
            userName: this.userName,
            email: this.email,
            password: this.password,
            repeat_password: this.repeat_password,
          })
          .then((response) => {
            this.$store.dispatch('toast/setToast', {
              title: 'Success',
              append: true,
              variant: response.data.type,
              text: response.data.message,
              delay: 5000,
            })
            this.loading = false
          })
        await this.signIn()
      } catch (error) {
        this.error = error
        this.loading = false
      }
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/variables.scss';
@import '~/assets/scss/_extends.scss';
.password-container {
  position: relative;
  .clickable {
    top: 40%;
    transform: translateY(-50%);
    right: 10px;
    position: absolute;
    cursor: pointer;
    color: #ccc;
  }
}

a {
  color: var(--dark-accent);
}

.btn_black {
  @extend %custom_btn_outline_black;
}
</style>
