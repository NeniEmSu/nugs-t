<template>
  <div class="sign-in">
    <BaseHero :heading="heading" :sup-heading="supHeading" :has-btn="false" :has-desc="false" />
    <div class="container">
      <div class="row">
        <div class="offset-lg-1"></div>

        <div class="form-card col-lg-6 col-md-7">
          <busy-overlay />
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
</template>

<script>
import busyOverlay from '~/components/busy-overlay'
export default {
  name: 'SignIn',
  components: { busyOverlay },
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
