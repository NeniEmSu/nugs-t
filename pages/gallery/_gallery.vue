<template>
  <Article :data="article" type="article" />
</template>

<script>
import Article from '~/components/ArticleAndPage.vue'
export default {
  components: {
    Article,
  },
  async asyncData({ app, store, params }) {
    const { data } = await app.$axios.get(
      `/wp/v2/gallery?${
        app.$auth.$state.loggedIn && app.$auth.user.roles.includes('member')
          ? 'status=publish,private'
          : ''
      }`,
      {
        params: {
          slug: params.article,
          _embed: true,
        },
      }
    )
    return { article: data[0] }
  },
}
</script>
