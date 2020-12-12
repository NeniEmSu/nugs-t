<template>
  <div class="news-blogs">
    <div class="articles">
      <TheBlogHero :hero-article="articlesList[0]" />
      <ArticleList :articles="[...articlesList].slice(1)" />
      <client-only>
        <InfiniteLoading ref="infiniteLoading" @infinite="moreArticles">
          <span slot="spinner">
            <Spinner1 />
          </span>
          <span slot="no-results">
            <Smile />
            <div>No more articles!</div>
          </span>
          <span slot="no-more">
            <Smile />
            <div>No more articles!</div>
          </span>
        </InfiniteLoading>
      </client-only>
    </div>
    <TheSidebar />
  </div>
</template>

<script>
import InfiniteLoading from 'vue-infinite-loading'
export default {
  components: {
    InfiniteLoading,
  },
  async asyncData({ app, store, params }) {
    const { data } = await app.$axios.get(
      `/wp/v2/posts?${
        app.$auth.$state.loggedIn && app.$auth.user.roles.includes('member')
          ? 'status=publish,private'
          : ''
      }&orderby=date&per_page=10&_embed`
    )
    return { articles: data }
  },
  data() {
    return {
      infiniteLoadingPage: 1,
    }
  },
  head() {
    return {
      title: `News & Blogs | ${this.$store.state.meta.name}`,
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
  methods: {
    moreArticles($state) {
      this.$axios
        .get(`/wp/v2/posts`, {
          params: {
            orderby: 'date',
            per_page: 10,
            categories_exclude: process.env.FEATURED_CATEGORY_ID,
            page: this.infiniteLoadingPage + 1,
            _embed: true,
          },
        })
        .then((response) => {
          this.articles = [...this.articles, ...response.data]
          this.infiniteLoadingPage++
          $state.loaded()
        })
        .catch(() => $state.complete())
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/variables.scss';
@import '~/assets/scss/_extends.scss';
.news-blogs {
  display: flex;
  padding: 0 calc((100vw - 1200px) / 2);
  padding-bottom: 130px;
  @media #{$small_mobile} {
    padding-bottom: 25px;
  }
  @media #{$large_mobile} {
    padding-bottom: 40px;
  }
  @media #{$tab_device} {
    padding-bottom: 50px;
  }
  @media (max-width: 1000px) {
    flex-direction: column;
  }
  .hero {
    margin: 0 -32px;
  }
  .articles {
    background-color: var(--bg);
    padding: 0 32px;
    max-width: 900px;
    width: 100%;
    @media (max-width: 1000px) {
      max-width: none;
    }
    @media (max-width: 700px) {
      padding: 0 16px;
    }
    .article-list {
      margin: 32px 0;
      @media (max-width: 700px) {
        margin: 16px 0;
      }
    }
  }
}
</style>
