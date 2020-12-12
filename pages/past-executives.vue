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
          <div class="col-md-8">
            <h4 class="mb-3">
              The great men and women who took the mantle of leadership for the year 2018 - 2019
            </h4>
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

        <div id="achievements" class="achievements text-center">
          <h3>Our Top Achievements</h3>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'About',
  data() {
    return {
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
  height: 620px;
  background: #7625bc;
  border-radius: 15px;
  padding: 50px;

  img {
    height: 350px;
    object-fit: cover;
    object-position: center;
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
</style>
