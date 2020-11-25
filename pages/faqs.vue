<template>
  <Page :data="page" type="page" />
</template>

<script>
import Page from '~/components/ArticleAndPage.vue'
export default {
  components: {
    Page,
  },
  async asyncData({ app, store, params }) {
    const { data } = await app.$axios.get(`/wp/v2/pages?slug=frequently-asked-questions`, {
      params: {
        slug: params.page,
        _embed: true,
      },
    })
    return { page: data[0] }
  },
}
</script>
