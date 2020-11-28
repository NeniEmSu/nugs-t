<template>
  <section class="hero">
    <div class="banner_part">
      <div class="coverer container">
        <div class="row align-items-center">
          <div class="col-lg-6 col-xl-6">
            <div class="banner_text">
              <div class="banner_text_iner">
                <h5 class="sup-title">{{ supHeading }}</h5>
                <h1>{{ heading }}</h1>
                <p>
                  {{ subHeading }}
                </p>
                <div class="action_btn">
                  <div v-if="firstLink.display" class="first-btn">
                    <a v-if="firstLink.blank === true" :href="firstLink.link" class="btn_white">
                      {{ firstLink.name }}
                    </a>
                    <nuxt-link v-else :to="firstLink.link" class="btn_white">
                      {{ firstLink.name }}
                    </nuxt-link>
                  </div>

                  <div v-if="secondLink.display" class="second-btn">
                    <a v-if="secondLink.blank === true" :href="secondLink.link" class="btn_white">
                      {{ secondLink.name }}
                    </a>
                    <nuxt-link v-else :to="secondLink.link" class="btn_white">
                      {{ secondLink.name }}
                    </nuxt-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  mixins: {
    shortTimestamp: Function,
  },
  props: {
    heading: {
      type: String,
      default: 'National Union Of Ghana Students Ternopol',
    },
    supHeading: {
      type: String,
      default: 'ALUTA CONTINUA , VICTORIA ASCERTA.',
    },
    subHeading: {
      type: String,
      default:
        'We are a Democratic, nonpartisan and progressive mass movement comprising of ghanaian students in Ternopol, ukraine with the primary aim of protecting and safeguarding the rights and interests of ghanaian students in ternopol.',
    },
    firstLink: {
      type: Object,
      default: () => {
        return { name: 'Get Started!', link: '/sign-up', blank: false, display: true }
      },
    },
    secondLink: {
      type: Object,
      default: () => {
        return { name: 'Contact Us', link: '/contact', blank: false, display: true }
      },
    },
  },
  computed: {},
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/variables.scss';
@import '~/assets/scss/_extends.scss';
.hero {
  height: 650px;
  background: var(--base-gradient);

  @media #{$small_mobile} {
    height: 700px;
  }
  @media #{$large_mobile} {
    height: 750px;
  }
  @media #{$tab_device} {
    height: 750px;
  }
  @media #{$medium_device} {
    height: 650px;
  }
  @media (min-width: 1400px) {
    background: linear-gradient(
        90.17deg,
        rgba(27, 10, 43, 0.5) 2.56%,
        rgba(228, 83, 223, 0.1) 98.31%
      ),
      url(~assets/img/banner_bg.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }
}

.banner_part {
  height: 650px;
  position: relative;

  @media #{$small_mobile} {
    height: 700px;
  }
  @media #{$large_mobile} {
    height: 750px;
  }
  @media #{$tab_device} {
    height: 800px;
  }
  @media #{$medium_device} {
    height: 650px;
  }

  .banner_text {
    display: table;
    width: 100%;
    height: 650px;
    .banner_text_iner {
      display: table-cell;
      vertical-align: middle;
      @media #{$small_mobile} {
        vertical-align: bottom;
      }
      @media #{$large_mobile} {
        vertical-align: bottom;
      }
      @media #{$tab_device} {
        vertical-align: bottom;
      }
      @media #{$medium_device} {
        vertical-align: bottom;
      }
    }
    @media #{$small_mobile} {
      text-align: center;
      padding-top: 0px;
      height: 700px;
    }
    @media #{$large_mobile} {
      text-align: center;
      padding-top: 0px;
      height: 750px;
    }
    @media #{$tab_device} {
      text-align: center;
      padding-top: 0px;
      height: 750px;
    }
    @media #{$medium_device} {
      height: 650px;
    }

    h5 {
      font-size: 14px;
      text-transform: uppercase;
      font-weight: 500;
      color: #e1d3f0;
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
      color: #e1d3f0;
    }
    .action_btn {
      display: flex;
      gap: 25px;
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
      }
    }
  }

  &:after {
    position: absolute;
    top: 0px;
    width: 50%;
    height: 104%;
    content: '';
    background-image: url(~assets/img/banner_bg.jpg);
    background-size: cover;
    right: 0%;
    border-top-left-radius: 50%;
    border-bottom-left-radius: 50%;
    z-index: 5;
    @media #{$small_mobile} {
      position: absolute;
      top: 48px;
      width: 200px;
      height: 200px;
      content: '';
      background-image: url(~assets/img/banner_bg.jpg);
      background-size: cover;
      right: 0;
      left: 0;
      text-align: center;
      margin: 0 auto;
      background-repeat: no-repeat;
      border-radius: 50%;
    }
    @media #{$large_mobile} {
      position: absolute;
      top: 80px;
      width: 250px;
      height: 250px;
      content: '';
      background-image: url(~assets/img/banner_bg.jpg);
      background-size: cover;
      right: 0;
      left: 0;
      text-align: center;
      margin: 0 auto;
      background-repeat: no-repeat;
      border-radius: 50%;
    }
    @media #{$tab_device} {
      position: absolute;
      top: 50px;
      width: 300px;
      height: 300px;
      content: '';
      background-image: url(~assets/img/banner_bg.jpg);
      background-size: cover;
      right: 0;
      left: 0;
      text-align: center;
      margin: 0 auto;
      background-repeat: no-repeat;
      border-radius: 50%;
    }
    @media #{$medium_device} {
      position: absolute;
      max-width: 50%;
      max-height: 100%;
      content: '';
      background-image: url(~assets/img/banner_bg.jpg);
      background-size: cover;
      right: 0;
      bottom: 0;
      top: 0;
      background-repeat: no-repeat;
    }
    @media (min-width: 1400px) {
      display: none;
    }
  }
}
</style>
