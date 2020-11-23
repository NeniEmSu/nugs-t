<template>
  <div>
    <BaseHero :hero-title="title" :sup-title="supTitle" :has-btn="false" :has-desc="false" />
    <div class="container">
      <div class="row">
        <div class="offset-lg-1"></div>
        <b-card bg-variant="light" class="form-card col-lg-6 col-md-7 p-1 p-sm-3 p-md-4">
          <busy-overlay />
          <AuthForm :sign-up-page="true" />
        </b-card>
        <div class="offset-md-1"></div>
        <div class="side-content col-lg-3 col-md-4">
          <p class="text-left text-center-md">
            Have questions or need help? Use the form to reach out and we will be in touch with you
            as quickly as possible.
          </p>
        </div>
        <div class="offset-lg-1"></div>
      </div>

      <div class="more row text-center">
        <div class="col-md-5">
          <div class="text-content">
            <h2>Technical Support</h2>
            <p>Need Help? Our community is here to support you!</p>
            <nuxt-link class="btn_black" to="#">Join Today!</nuxt-link>
          </div>
        </div>

        <div class="col-md-5">
          <div class="text-content">
            <h2>FAQs</h2>
            <p>Get help with the most common questions.</p>

            <nuxt-link class="btn_black" to="#">Checkout FAQs</nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SignIn',
  data() {
    return {
      title: 'Contact Us',
      supTitle: 'Get In Touch!',
    }
  },
  computed: {},
  methods: {},
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/variables.scss';
@import '~/assets/scss/_extends.scss';
.form-card {
  margin-top: -100px;
}

.side-content {
  margin-top: 60px;
}

.more {
  margin-top: 130px;
  @media #{$small_mobile} {
    margin-top: 25px;
  }
  @media #{$large_mobile} {
    margin-top: 40px;
  }
  @media #{$tab_device} {
    margin-top: 50px;
  }
  .link {
    color: #757575;
    font-weight: 400;
  }

  .col-md-5 {
    margin: 25px auto;
    border: 3px solid;
    border-color: rgb(77, 66, 255);
    border-radius: 10px;
    background: #f8f9fa;
    padding: 30px 30px 30px 30px;
    border-width: 3px 3px 3px 3px;

    &:first-of-type {
      border: 3px solid;
      border-color: #e21e51;
    }
  }

  .btn_black {
    @extend %custom_btn_outline_black;
    margin: auto;
  }
}
</style>
