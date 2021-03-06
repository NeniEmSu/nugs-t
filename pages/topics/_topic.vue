<template>
  <div class="topic">
    <div class="articles">
      <div class="page-title">
        <h1>{{ topic.name }}</h1>
        <p v-if="topic.description">{{ topic.description }}</p>
      </div>
      <ArticleList :articles="topicArticles.articles" />
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
/* eslint-disable vue/custom-event-name-casing */
import find from 'lodash/find'
import InfiniteLoading from 'vue-infinite-loading'

export default {
  components: {
    InfiniteLoading,
  },
  async asyncData({ app, store, params }) {
    if (!store.state.featuredArticles.length) {
      const articles = await app.$axios.get(
        `/wp/v2/posts?orderby=date&per_page=10&categories=${process.env.FEATURED_CATEGORY_ID}&_embed`
      )
      store.commit('setFeaturedArticles', articles.data)
    }
    if (!store.state.topics) {
      const topics = await app.$axios.get(`/wp/v2/categories?per_page=100`)
      store.commit('setTopics', topics.data)
    }
    if (!find(store.state.topicArticles, { slug: params.topic })) {
      const topic = find(store.state.topics, { slug: params.topic })
      const topicArticles = await app.$axios.get(
        `/wp/v2/posts?orderby=date&per_page=10&categories=${topic.id}&_embed`
      )
      store.commit('setTopicArticles', {
        slug: params.topic,
        articles: topicArticles.data,
        infiniteLoading: true,
        page: 1,
      })
    }
  },
  head() {
    return {
      title: `${this.topic.name} | ${this.$store.state.meta.name}`,
      meta: [{ description: this.$store.state.meta.description }],
    }
  },
  computed: {
    topic() {
      return find(this.$store.state.topics, {
        slug: this.$route.params.topic,
      })
    },
    topicArticles() {
      return find(this.$store.state.topicArticles, {
        slug: this.$route.params.topic,
      })
    },
    isLoadingMore() {
      return this.topicArticles.infiniteLoading && this.topicArticles.articles.length >= 10
    },
  },
  methods: {
    moreArticles() {
      this.topicArticles.page++
      this.$axios
        .get(
          `/wp/v2/posts?orderby=date&per_page=10&categories=${this.topic.id}&_embed&page=${this.topicArticles.page}`
        )
        .then((response) => {
          this.topicArticles.articles = this.topicArticles.articles.concat(response.data)
          this.$refs.infiniteLoading.$emit('$InfiniteLoading:loaded')
        })
        .catch(() => {
          this.$refs.infiniteLoading.$emit('$InfiniteLoading:complete')
        })
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/variables.scss';
.topic {
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
