<template>
  <div class="container">
    <div class="sign-out">
      <b-alert show variant="info">You have been signed out!</b-alert>
      <div class="action_btn">
        <nuxt-link to="/sign-in" class="btn_black">Sign Back In</nuxt-link>

        <nuxt-link to="/" class="btn_black">Go to home page</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  middleware: ['auth'],
  options: {
    auth: false,
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/variables.scss';
@import '~/assets/scss/_extends.scss';
.sign-out {
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

  .action_btn {
    display: flex;
    .btn_black {
      @extend %custom_btn_outline_black;
      & + a {
        margin-left: 1rem;
      }
    }
  }
}
</style>
