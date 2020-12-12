<template>
  <div class="about">
    <TheHero
      :heading="heading"
      :sup-heading="supHeading"
      :desc="desc"
      :president="president"
      :hero-img="heroImg"
      :first-link="firstLink"
      :second-link="secondLink"
    />
    <section class="content">
      <div class="container">
        <div class="next-execs text-center">
          <h2>Consider serving as an executive in the Year 2020-2021</h2>
          <p class="w-75 mx-auto">
            To become an executive and serve in the multiple capacities under NUGS-Ternopil, certain
            criteria and mandates must be met by said prospective aspirant who ...
          </p>
          <button class="btn_black mx-auto">Read More!</button>
        </div>

        <div class="exec-info">
          <div class="row p-0">
            <div class="col-md-8">
              <h3 class="mb-3">
                The great men and women who took the mantle of leadership for the year 2018 - 2019
              </h3>
              <p>
                The union would like to say a big thank you for the time and energy spent to make it
                what it is today.
              </p>
              <div class="lazy">
                <img v-lazy="require('~/assets/img/execs.jpg')" alt="image of all past execs" />
                <Spinner1 class="spinner" />
              </div>
            </div>
          </div>
        </div>
        <div id="achievements" class="achievements text-center">
          <h3>Our Top Achievements</h3>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'PastExecutivesSinglePage',
  data() {
    return {
      settings: {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true,
      },
      executives: [],
      loading: false,
      heading: 'Executives for the Year 2018 - 2019',
      supHeading: 'Aluta Continua , Victoria Ascerta.',
      desc:
        'The opportunity to serve the union and it’s members was a great privilege and I commend the great men and women that worked hand in hand with me to bring our vision, hopes and dreams of making Nugs a home to light thank you and God Bless.',
      heroImg: require('~/assets/img/zackFull.jpg'),
      president: {
        cite: 'President Dr Zachariah Gyetuah',
        display: true,
      },
      firstLink: {
        name: 'Achievements of Note',
        link: '#achievements',
        blank: true,
        newTab: false,
        display: true,
      },
      secondLink: {
        name: 'Achievements of Note',
        link: '#achievements',
        blank: true,
        newTab: false,
        display: false,
      },
    }
  },
  head() {
    return {
      title: `About Us | ${this.$store.state.meta.name}`,
      meta: [{ description: this.$store.state.meta.description }],
    }
  },
  created() {
    this.getExecs()
  },
  methods: {
    async getExecs() {
      this.loading = true
      try {
        const data = await this.$axios.get('/wp/v2/executives?_embed&per_page=25')
        this.executives = data.data
      } catch (error) {
        console.log(error)
      } finally {
        this.loading = false
      }
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/variables.scss';
@import '~/assets/scss/_extends.scss';
.content {
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
}

.btn_black {
  @extend %custom_btn_outline_black;
}

.next-execs {
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

.exec-info {
  width: 100%;
  min-height: 620px;
  background: #7625bc;
  border-radius: 15px;
  padding: 50px;

  @media #{$small_mobile} {
    padding: 20px;
  }
  @media #{$large_mobile} {
    padding: 30px;
  }
  @media #{$tab_device} {
    padding: 40px;
  }

  .lazy {
    border-radius: 15px;
  }

  h3 {
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
    color: #ffffff;
    border-color: #ffffff;
  }

  img {
    height: 100%;
    max-height: 330px;
    object-fit: cover;
    object-position: center;
    border-radius: 15px;
  }
}

.achievements {
  padding: 130px 0 0;
  @media #{$small_mobile} {
    padding: 25px 0 0;
  }
  @media #{$large_mobile} {
    padding: 40px 0 0;
  }
  @media #{$tab_device} {
    padding: 50px 0 0;
  }
}

.carousel-wrapper {
  padding: 40px;
}
.img-wrapper img {
  margin: auto;
  width: 200px;
  height: 100px;
  background-image: linear-gradient(gray 100%, transparent 0);
}
</style>
