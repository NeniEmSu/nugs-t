<template>
  <section class="extension">
    <div class="layout container">
      <div class="layout__item layout__item--body">
        <h2>Application and follow up on school fee extension process.</h2>
        <p>
          Given the financial situation of the world we live in today and the situation of thing
          back home i.e Ghana, it has become a necessity to opt for extensions on the payment of
          fees and NUGS-T has been able to provide valuable help in this area and intends to make it
          as easy as possible to acquire help. The process of registering, submitting requests and
          getting added to the list of fee extenders is easy and requires a few simple steps.
        </p>
        <nuxt-link to="" class="btn_white">Apply for extension</nuxt-link>
      </div>
      <div class="layout__item layout__item--figure">
        <img src="~/assets/svg/extension.svg" alt="" />
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
}
.layout {
  display: flex;
  flex-wrap: wrap;
  // margin-top: -1em; // 1
  // margin-left: -3.5em; // 1
  align-items: center;

  &:not(:first-of-type) {
    margin-top: 3em; // 2
  }

  &:nth-child(even) {
    flex-direction: row-reverse; // 3
  }

  &__item {
    padding-top: 1em; // 1
    padding-left: 3.5em; // 1

    &--body {
      flex-grow: 9999; // 4
      flex-basis: $min-width; // 5
    }

    &--figure {
      margin-right: auto; // 6
      flex-grow: 1; // 7

      // By using `max-content` we can get a little
      // nicer responsive behavior because the image
      // automatically shrinks if not enough space is
      // available, but also the column is not getting
      // to large than the image if a lot of space
      // is available.
      @supports (max-width: max-content) {
        min-width: $min-width; // 5
        max-width: max-content;
        flex-basis: $min-width; // 5
        flex-grow: 99999;
      }
    }
  }
}

h2 {
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 48px;
  line-height: 59px;

  color: #fefdfe;
}
p {
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 150.7%;
  /* or 27px */

  color: #faf6fc;
}
.btn_white {
  @extend %custom_btn_outline_white;
  padding: 10px 40px;
  display: block;
  @media #{$small_mobile} {
    margin-top: 20px;
    margin-bottom: 70px;
    padding: 8px 16px;
  }
  @media #{$large_mobile} {
    margin-top: 25px;
    margin-bottom: 70px;
    padding: 10px 25px;
  }
  @media #{$tab_device} {
    margin-top: 25px;
    margin-bottom: 70px;
    padding: 10px 25px;
  }
  @media #{$medium_device} {
    margin-top: 25px;
    margin-bottom: 70px;
    padding: 10px 25px;
  }
  & + a {
    margin-left: 25px;
  }
}

img {
  max-width: 100%;
  max-height: 100%;
  width: auto;
  height: auto;
  vertical-align: middle;
}

.layout {
  &__item {
    * + * {
      margin-top: 1em;
    }
  }
}
</style>
