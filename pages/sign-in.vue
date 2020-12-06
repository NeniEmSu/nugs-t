<template>
  <div class="sign-in">
    <BaseHero :heading="heading" :sup-heading="supHeading" :has-btn="false" :has-desc="false" />
    <div class="container">
      <div class="container">
        <div class="row p-0">
          <div class="offset-lg-1"></div>

          <div class="form-card col-lg-6 col-md-7">
            <AuthForm :sign-up-page="false" />
          </div>

          <div class="offset-md-1"></div>
          <div class="side-content col-lg-3 col-md-4">
            <b-alert
              v-if="$auth.$state.redirect"
              show
              class="position-fixed fixed-top m-0 rounded-0"
              style="z-index: 11"
              variant="info"
              dismissible
            >
              You have to be login before accessing to
              <strong>{{ $auth.$state.redirect }}</strong>
            </b-alert>
            <q>
              {{ randomQuote }}
            </q>
            <br />
            <cite class="ml-auto">— {{ quoteAuthor }}</cite>
          </div>
          <div class="offset-lg-1"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SignIn',
  middleware: ['auth'],
  data() {
    return {
      heading: 'Sign In',
      supHeading: 'Welcome Back!',
      desc: '',
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
@import '~/assets/scss/variables.scss';
@import '~/assets/scss/_extends.scss';
.sign-in {
  padding-bottom: 130px;
  @media #{$small_mobile} {
    padding-bottom: 25px;
  }
  @media #{$large_mobile} {
    padding-bottom: 40px;
  }
  @media #{$tab_device} {
    padding-bottom: 50px;
  }
}

.form-card {
  margin-top: -100px;
}

.side-content {
  margin-top: 60px;
}

q {
  font-size: 20px;
  quotes: '\201C''\201D''\2018''\2019';
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
  color: var(--black);
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
  color: var(--black);
  font-size: 1.5em;
}
</style>
