<template>
  <div>
    <BaseHero :hero-title="title" :sup-title="supTitle" :has-btn="false" :has-desc="false" />
    <div class="container">
      <div class="row">
        <div class="offset-lg-1"></div>

        <b-card bg-variant="light" class="form-card col-lg-6 col-md-7 p-1 p-sm-3 p-md-4">
          <busy-overlay />
          <AuthForm :sign-up-page="false" />
        </b-card>

        <div class="offset-md-1"></div>
        <div class="side-content col-lg-3 col-md-4">
          <b-alert v-if="error" show variant="danger">
            <h4 class="alert-heading">Error!</h4>
            {{ error.response.data.message || error.response.data.error.message }}
          </b-alert>
          <b-alert v-if="$auth.$state.redirect" show dismissible>
            You have to sign in before accessing to
            <strong>{{ $auth.$state.redirect }}</strong>
          </b-alert>
          <q>
            {{ randomQuote }}
          </q>
          <br />
          <cite class="ml-auto">- {{ quoteAuthor }}</cite>
        </div>
        <div class="offset-lg-1"></div>
      </div>
    </div>
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
      title: 'Sign In',
      supTitle: 'Welcome Back!',
      randomQuote:
        'The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty.',
      quoteAuthor: 'Winston Churchill',
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
.form-card {
  margin-top: -100px;
}

.side-content {
  margin-top: 60px;
}

q {
  font-size: 20px;
  quotes: '\201C''\201D''\2018''\2019';
  // padding: 10px 20px;
  line-height: 1.4;
}

q:before {
  content: open-quote;
  display: inline;
  height: 0;
  line-height: 0;
  left: -10px;
  position: relative;
  top: 5px;
  color: #000;
  font-size: 1.5em;
}
q:after {
  content: close-quote;
  display: inline;
  height: 0;
  line-height: 0;
  left: 10px;
  position: relative;
  top: 5px;
  color: #000;
  font-size: 1.5em;
}
</style>
