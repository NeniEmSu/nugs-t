<template>
  <div class="home">
    <TheHero />
    <Benefits />
    <Extension />
    <div class="articles container">
      <SubsectionHeading :title="title" :desc="desc" />
      <ArticleList :articles="[...articlesList]" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'News & Updates',
      desc:
        'The National union of Ghana students does it’s best to keep you updated, apprised and in the know about all relevant information.',
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
      const { data } = await this.$axios.get(`/wp/v2/posts?orderby=date&per_page=4&_embed`)
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
</style>
