<template>
  <form>
    <div v-if="signUpPage" class="form-group">
      <input
        id="username"
        v-model="username"
        type="username"
        class="form-control"
        email="username"
        placeholder="john"
      />
      <label for="username" class="form-label">username*</label>
    </div>
    <div class="form-group">
      <input
        id="email"
        v-model="email"
        type="email"
        class="form-control"
        email="email"
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
        placeholder="password"
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
        placeholder="repeat_password"
        required
        name="repeat_password"
      />
      <label for="repeat_password" class="form-label">Confirm password*</label>
      <span class="clickable">
        <b-icon :icon="passwordIcon" font-scale="1.5" @click="hidePassword = !hidePassword">
        </b-icon>
      </span>
    </div>
    <template v-if="signUpPage">
      <div class="text-center">
        <button class="btn_black" @click="signUp">Sign Up</button>
      </div>
      <div class="text-center" style="margin-top: 20px">
        Already got an account? <nuxt-link to="/sign-in">Sign In</nuxt-link>
      </div>
    </template>
    <template v-else>
      <div class="text-center">
        <button class="btn_black" @click="signIn">Sign In</button>
      </div>
      <div class="text-center" style="margin-top: 20px">
        Don't have an account yet? <nuxt-link to="/sign-up">Sign Up</nuxt-link>
      </div>
    </template>
  </form>
</template>

<script>
export default {
  name: 'AuthForm',
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
      password: '',
      repeat_password: '',
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
            text: `You have successfully signed in, ${this.$auth.user.username}`,
            delay: 5000,
          })
        })
        .catch((error) => {
          this.error = error
        })
    },
    async signUp() {
      try {
        await this.$axios
          .post('/api/auth/signup', {
            userName: this.userName,
            email: this.email,
            password: this.password,
            repeat_password: this.repeat_password,
          })
          .then((response, append = false) => {
            this.$store.dispatch('toast/setToast', {
              title: 'Success',
              variant: response.data.type,
              text: response.data.message,
              delay: 5000,
            })
          })
        await this.signIn()
      } catch (error) {
        this.error = error.response.data.error
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
    transform: translate(1em, -1.8em);
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
      box-shadow: none;
      outline: none;
      border-color: #506076;
    }

    &:focus + .form-label,
    &:not(:placeholder-shown) + .form-label {
      transform: translate(1em, -2.8em) scale(0.8);
    }
  }
}

.btn_black {
  @extend %custom_btn_outline_black;
  margin: 0 auto;
}
</style>
