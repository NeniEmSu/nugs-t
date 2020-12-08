<template>
  <section class="hero">
    <div class="inner-content container">
      <h5 class="sup-title">{{ supHeading }}</h5>
      <h1>{{ heading }}</h1>
      <p v-if="hasDesc">
        {{ desc }}
      </p>
      <div v-if="hasBtn" class="action_btn">
        <nuxt-link to="/practice" class="btn_white">Vote Now!</nuxt-link>

        <nuxt-link to="/login" class="btn_white">Get Started </nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'BaseHero',
  props: {
    hasDesc: {
      type: Boolean,
      default: false,
    },
    hasBtn: {
      type: Boolean,
      default: false,
    },
    heading: {
      type: String,
      default: 'National Union of Ghanaian Students Ternopol',
    },
    supHeading: {
      type: String,
      default: 'Nugs-T',
    },
    desc: {
      type: String,
      default:
        'We are a Democratic, Nonpartisan and Progressive mass movement comprising of Ghanaian students in Ternopol, Ukraine with the primary aim of protecting and safeguarding the rights and interests of Ghanaian students in ternopol.',
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/variables.scss';
@import '~/assets/scss/_extends.scss';
.hero {
  height: 60vh;
  background: var(--base-gradient);
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  @media #{$small_mobile} {
  }
  @media #{$large_mobile} {
  }
  @media #{$tab_device} {
  }
  @media #{$medium_device} {
  }
  .inner-content {
    h5 {
      font-size: 14px;
      text-transform: uppercase;
      color: #cdb8e7;
      margin-bottom: 14px;
      @media #{$small_mobile} {
        margin-bottom: 12px;
      }
    }
    h1 {
      font-size: 55px;
      text-transform: capitalize;
      font-weight: 700;
      margin-top: 0;
      margin-bottom: 27px;
      line-height: 1.18;
      color: #fefdfe;
      @media #{$small_mobile} {
        font-size: 25px;
        margin-bottom: 15px;
        line-height: 1.3;
      }
      @media #{$large_mobile} {
        font-size: 32px;
        margin-bottom: 15px;
        line-height: 1.3;
      }
      @media #{$tab_device} {
        font-size: 40px;
        margin-bottom: 15px;
        line-height: 1.3;
      }
      @media #{$medium_device} {
        font-size: 36px;
        margin-bottom: 15px;
        line-height: 1.4;
      }
    }

    p {
      font-size: 15px;
      line-height: 1.8;
      font-family: $font_stack_1;
      color: $font_7;
    }
    .action_btn {
      display: flex;
      @media #{$small_mobile} {
        justify-content: center;
      }
      @media #{$large_mobile} {
        justify-content: center;
      }
      @media #{$tab_device} {
        justify-content: center;
      }
      .btn_white {
        @extend %custom_btn_outline_white;
        color: #ffffff;
        border-color: #ffffff;

        @media #{$small_mobile} {
          margin-top: 20px;
          margin-bottom: 70px;
        }
        @media #{$large_mobile} {
          margin-top: 25px;
          margin-bottom: 70px;
        }
        @media #{$tab_device} {
          margin-top: 25px;
          margin-bottom: 70px;
        }
        @media #{$medium_device} {
          margin-top: 25px;
          margin-bottom: 70px;
        }
        & + a {
          margin-left: 25px;
        }
      }
    }
  }
}
</style>
