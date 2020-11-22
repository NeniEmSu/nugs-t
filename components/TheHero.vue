<template>
  <section class="hero">
    <div class="banner_part">
      <div class="coverer container">
        <div class="row align-items-center">
          <div class="col-lg-6 col-xl-6">
            <div class="banner_text">
              <div class="banner_text_iner">
                <h5>Aluta Continua , Victoria Ascerta.</h5>
                <h1>National Union of Ghana Students Ternopol</h1>
                <p>
                  We are a Democratic, Nonpartisan and Progressive mass movement comprising of
                  Ghanaian students in Ternopol, Ukraine with the primary aim of protecting and
                  safeguarding the rights and interests of Ghanaian students in ternopol.
                </p>
                <div class="action_btn">
                  <nuxt-link to="/practice" class="btn_white">Vote Now!</nuxt-link>

                  <nuxt-link to="/login" class="btn_white">Get Started </nuxt-link>
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
  computed: {},
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/variables.scss';
@import '~/assets/scss/_extends.scss';
.hero {
  height: 650px;
  background: linear-gradient(90.17deg, #7625bc 2.56%, #e453df 98.31%);

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

.banner_part {
  height: 650px;
  position: relative;
  // overflow: hidden;

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
    height: 100vmin;
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
      span {
        color: $btn_bg;
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
        padding: 10px 40px;
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
      max-width: 102%;
      max-height: 100%;
      content: '';
      background-image: url(~assets/img/banner_bg.jpg);
      background-size: cover;
      right: 0;
      bottom: 0;
      top: 0;
      background-repeat: no-repeat;
    }
  }
}
</style>
