<template>
  <section class="hero">
    <div class="hero-parts">
      <div class="coverer container">
        <div class="row align-items-center">
          <div class="col-lg-6 col-xl-6">
            <div class="hero-text">
              <div class="hero-text-inner">
                <h5 class="sup-title">{{ supHeading }}</h5>
                <h1>{{ heading }}</h1>
                <p>
                  {{ desc }}
                </p>
                <cite v-if="president.display">- {{ president.cite }}</cite>
                <div class="action_btn">
                  <div v-if="firstLink.display" class="first-btn">
                    <a
                      v-if="firstLink.blank === true"
                      :href="firstLink.link"
                      :target="firstLink.newTab === true ? '_blank' : ''"
                      class="btn_white"
                    >
                      {{ firstLink.name }}
                    </a>
                    <nuxt-link v-else :to="firstLink.link" class="btn_white">
                      {{ firstLink.name }}
                    </nuxt-link>
                  </div>

                  <div v-if="secondLink.display" class="second-btn">
                    <a
                      v-if="secondLink.blank === true"
                      :href="secondLink.link"
                      :target="secondLink.newTab === true ? '_blank' : ''"
                      class="btn_white"
                    >
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
          <div class="col-lg-6 col-xl-6 hero-image">
            <div class="lazy-hero">
              <img v-lazy="heroImg" :alt="`Image for ${heading}`" />
              <Spinner1 class="spinner" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Spinner1 from '~/components/Spinner1'
export default {
  components: {
    Spinner1,
  },
  mixins: {
    shortTimestamp: Function,
  },
  props: {
    heading: {
      type: String,
      default: 'National Union Of Ghanaian Students Ternopol',
    },
    supHeading: {
      type: String,
      default: 'ALUTA CONTINUA , VICTORIA ASCERTA.',
    },
    desc: {
      type: String,
      default:
        'We are a Democratic, nonpartisan and progressive mass movement comprising of ghanaian students in Ternopol, ukraine with the primary aim of protecting and safeguarding the rights and interests of ghanaian students in ternopol.',
    },
    president: {
      type: Object,
      default: () => {
        return {
          cite: 'Mr president',
          display: false,
        }
      },
    },
    heroImg: {
      type: String,
      default: require('~/assets/img/hero_img.jpg'),
    },
    firstLink: {
      type: Object,
      default: () => {
        return {
          name: 'Get Started!',
          link: '/sign-up',
          blank: false,
          newTab: false,
          display: true,
        }
      },
    },
    secondLink: {
      type: Object,
      default: () => {
        return { name: 'Contact Us', link: '/contact', blank: false, newTab: false, display: true }
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
}

.hero-parts {
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
  .hero-text {
    display: table;
    width: 100%;
    height: 650px;
    z-index: 1;
    .hero-text-inner {
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

    cite {
      color: #e1d3f0;
      display: flex;
      justify-content: flex-end;
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
}

.hero-image {
  height: 650px;
  z-index: 0;
  @media #{$small_mobile} {
    height: 250px;
    position: absolute;
    top: 48px;
    right: 0;
    left: 0;
    margin: 0 auto;
    text-align: center;
  }
  @media #{$large_mobile} {
    height: 300px;
    position: absolute;
    top: 80px;
    right: 0;
    left: 0;
    margin: 0 auto;
    text-align: center;
  }
  @media #{$tab_device} {
    height: 350px;
    position: absolute;
    top: 50px;
    right: 0;
    left: 0;
    margin: 0 auto;
    text-align: center;
  }

  .lazy-hero {
    position: relative;
    height: 100%;
    img {
      border-top-left-radius: 50%;
      border-bottom-left-radius: 50%;
      backface-visibility: hidden;
      opacity: 0;
      transition: opacity 1s;
      height: 106%;
      object-fit: cover;
      object-position: center;
      @media #{$small_mobile} {
        border-radius: 50%;
        width: 200px;
        height: 200px;
      }
      @media #{$large_mobile} {
        width: 250px;
        height: 250px;
        border-radius: 50%;
      }
      @media #{$tab_device} {
        width: 300px;
        height: 300px;
        border-radius: 50%;
      }
      @media #{$medium_device} {
        height: 104%;
      }
      @media (min-width: 1390px) {
        border-radius: 50%;
      }
    }
    .spinner {
      left: 50%;
      opacity: 0;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
    }
    [lazy='loading'] {
      opacity: 0;
    }
    [lazy='loaded'] {
      opacity: 1;
    }
    [lazy='loading'] + .spinner {
      opacity: 1;
    }
  }
}
</style>
