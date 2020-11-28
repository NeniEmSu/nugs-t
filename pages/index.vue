<template>
  <div class="home">
    <TheHero
      :heading="heading"
      :sup-heading="supHeading"
      :desc="desc"
      :first-link="firstLink"
      :second-link="secondLink"
    />
    <Benefits />
    <Extension />
    <div class="container">
      <div class="articles">
        <SubsectionHeading :title="title" :sub-title="subTitle" />
        <ArticleList :articles="[...articlesList]" />
        <div class="more-btn">
          <nuxt-link class="btn_black" to="/news-blogs"> Read More </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      heading: 'National Union Of Ghana Students Ternopol',
      supHeading: 'ALUTA CONTINUA , VICTORIA ASCERTA.',
      desc:
        'We are a Democratic, nonpartisan and progressive mass movement comprising of ghanaian students in Ternopol, ukraine with the primary aim of protecting and safeguarding the rights and interests of ghanaian students in ternopol.',
      title: 'News & Updates',
      subTitle:
        'The National union of Ghana students does it’s best to keep you updated, apprised and in the know about all relevant information.',
      firstLink: {
        name: 'Get Started!',
        link: '/sign-up',
        blank: false,
        display: !this.$auth.loggedIn,
      },
      secondLink: {
        name: 'Contact Us',
        link: '/contact',
        blank: false,
        display: true,
      },
      articles: [],
    }
  },
  head() {
    return {
      title: `Home | ${this.$store.state.meta.name}`,
      meta: [{ description: this.$store.state.meta.description }],
    }
  },
  computed: {
    articlesList() {
      return [...this.articles].filter(
        (article) => !article.categories.includes(parseInt(process.env.FEATURED_CATEGORY_ID))
      )
    },
  },
  created() {
    this.fetchArticles()
  },
  methods: {
    async fetchArticles() {
      const { data } = await this.$axios.get(
        `/wp/v2/posts?${
          this.$auth.$state.loggedIn && this.$auth.user.roles.includes('member')
            ? 'status=publish,private'
            : ''
        }&orderby=date&per_page=3&_embed`
      )
      this.articles = data
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/variables.scss';
@import '~/assets/scss/_extends.scss';
.articles {
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
  @media #{$medium_device} {
    padding: 80px 0;
  }
}

.more-btn {
  text-align: center;
  padding: 50px 0 0;
  @media #{$small_mobile} {
    padding: 25px 0 0;
  }
  @media #{$large_mobile} {
    padding: 40px 0 0;
  }
  .btn_black {
    @extend %custom_btn_outline_black;
    margin: auto;
  }
}
</style>
