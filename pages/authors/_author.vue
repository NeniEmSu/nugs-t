<template>
  <div class="author">
    <div class="articles">
      <div class="page-title">
        <h1>{{ author.name }}</h1>
        <p v-if="author.description">{{ author.description }}</p>
      </div>
      <ArticleList :articles="authorArticles.articles" />
      <client-only>
        <InfiniteLoading v-if="isLoadingMore" ref="infiniteLoading" :on-infinite="moreArticles">
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
    <TheSidebar :featured-articles="$store.state.featuredArticles" />
  </div>
</template>

<script>
import find from 'lodash/find'
import InfiniteLoading from 'vue-infinite-loading'
export default {
  components: {
    InfiniteLoading,
  },
  async asyncData({ app, store, params }) {
    if (!store.state.featuredArticles.length) {
      const articles = await app.$axios.get(
        `${process.env.WORDPRESS_API_URL}/wp/v2/posts?orderby=date&per_page=10&categories=${process.env.FEATURED_CATEGORY_ID}&_embed`
      )
      store.commit('setFeaturedArticles', articles.data)
    }
    if (!store.state.authors) {
      const authors = await app.$axios.get(
        `${process.env.WORDPRESS_API_URL}/wp/v2/users?per_page=100`
      )
      store.commit('setAuthors', authors.data)
    }
    if (!find(store.state.authorArticles, { slug: params.author })) {
      const author = find(store.state.authors, { slug: params.author })
      const authorArticles = await app.$axios.get(
        `${process.env.WORDPRESS_API_URL}/wp/v2/posts?orderby=date&per_page=10&author=${author.id}&_embed`
      )
      store.commit('setAuthorArticles', {
        slug: params.author,
        articles: authorArticles.data,
        infiniteLoading: true,
        page: 1,
      })
    }
  },
  head() {
    return {
      title: `${this.author.name} | ${this.$store.state.meta.name}`,
      meta: [{ description: this.$store.state.meta.description }],
    }
  },
  computed: {
    author() {
      return find(this.$store.state.authors, {
        slug: this.$route.params.author,
      })
    },
    authorArticles() {
      return find(this.$store.state.authorArticles, {
        slug: this.$route.params.author,
      })
    },
    isLoadingMore() {
      return this.authorArticles.infiniteLoading && this.authorArticles.articles.length >= 10
    },
  },
  methods: {
    moreArticles() {
      this.authorArticles.page++
      this.$axios
        .get(
          `${this.$process.env.WORDPRESS_API_URL}/wp/v2/posts?orderby=date&per_page=10&author=${this.author.id}&_embed&page=${this.authorArticles.page}`
        )
        .then((response) => {
          this.authorArticles.articles = this.authorArticles.articles.concat(response.data)
          // eslint-disable-next-line vue/custom-event-name-casing
          this.$refs.infiniteLoading.$emit('$InfiniteLoading:loaded')
        })
        .catch(() => {
          // eslint-disable-next-line vue/custom-event-name-casing
          this.$refs.infiniteLoading.$emit('$InfiniteLoading:complete')
        })
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/variables.scss';
.author {
  display: flex;
  .articles {
    background-color: #efefef;
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
    }
  }
}
</style>
