<template>
  <section class="extension">
    <div class="container">
      <div class="row">
        <div class="col-lg-7 col-md-6">
          <h2>Application and follow up on school fee extension process.</h2>
          <p>
            Given the financial situation of the world we live in today and the situation of thing
            back home i.e Ghana, it has become a necessity to opt for extensions on the payment of
            fees and NUGS-T has been able to provide valuable help in this area and intends to make
            it as easy as possible to acquire help. <br />
            The process of registering, submitting requests and getting added to the list of fee
            extenders is easy and requires a few simple steps.
          </p>
          <nuxt-link to="" class="btn_white">Apply for extension</nuxt-link>
        </div>
        <div class="col-lg-5 col-md-6 img">
          <img src="~/assets/svg/extension.svg" alt="" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/variables.scss';
@import '~/assets/scss/_extends.scss';
$min-width: 15rem;
.extension {
  background-color: #7625bc;
  padding: 130px 0;
  @media #{$small_mobile} {
    padding: 25px 0;
  }
  @media #{$large_mobile} {
    padding: 40px 0;
  }
  @media #{$tab_device} {
    padding: 50px 0;
  }

  h2 {
    font-size: 36px;
    line-height: 40px;

    color: #fefdfe;
    @media #{$small_mobile} {
      text-align: center;
      font-size: 22px;
      line-height: 24px;
    }
    @media #{$large_mobile} {
      text-align: center;
      font-size: 24px;
      line-height: 22px;
    }
    @media #{$tab_device} {
      font-size: 30px;
      line-height: 32px;
    }
  }
  p {
    font-size: 18px;
    line-height: 150.7%;

    color: #faf6fc;
    @media #{$small_mobile} {
      text-align: center;
      font-size: 16px;
    }
    @media #{$large_mobile} {
      text-align: center;
      font-size: 16px;
    }
    @media #{$tab_device} {
      font-size: 18px;
    }
  }
  .btn_white {
    @extend %custom_btn_outline_white;
  }

  .col-md-6 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media #{$small_mobile} {
      align-items: center;
    }
    @media #{$large_mobile} {
      align-items: center;
    }
    &.img {
      align-items: center;
      img {
        height: 350px;
        width: auto;
        @media #{$small_mobile} {
          height: 200px;
          width: auto;
        }
        @media #{$large_mobile} {
          height: 250px;
          width: auto;
        }
        @media #{$tab_device} {
          height: 300px;
          width: auto;
        }
      }
    }
  }
}
</style>
