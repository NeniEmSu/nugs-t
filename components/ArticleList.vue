<template>
  <div class="article-list">
    <article v-for="article in articles" :key="article.id">
      <div class="date">
        <span v-html="shortTimestamp(article.date)"></span>
        &nbsp;–&nbsp;
        <span class="topics">
          <span
            v-for="(topic, index) in article._embedded['wp:term'][0]"
            :key="index"
            class="topic"
          >
            <nuxt-link
              :key="topic.id"
              class="fancy"
              :to="`/topics/${topic.slug}`"
              v-html="topic.name"
            ></nuxt-link>
          </span>
        </span>
      </div>
      <nuxt-link :to="`/news-blogs/${article.slug}`" class="row">
        <div class="">
          <div v-if="article._embedded['wp:featuredmedia']" class="lazy thumbnail">
            <img
              v-lazy="
                article._embedded['wp:featuredmedia'][0].media_details.sizes.thumbnail.source_url
              "
              :alt="article._embedded['wp:featuredmedia'][0].alt_text"
            />
            <Spinner1 class="spinner" />
          </div>
          <div v-if="article._embedded['wp:featuredmedia']" class="lazy medium">
            <img
              v-lazy="
                article._embedded['wp:featuredmedia'][0].media_details.sizes.medium.source_url
              "
              :alt="article._embedded['wp:featuredmedia'][0].alt_text"
            />
            <Spinner1 class="spinner" />
          </div>
        </div>
        <div class="col">
          <h2 v-html="article.title.rendered"></h2>
          <div class="excerpt" v-html="article.excerpt.rendered"></div>
        </div>
      </nuxt-link>
    </article>
  </div>
</template>

<script>
import Spinner1 from '~/components/Spinner1'
export default {
  components: {
    Spinner1,
  },
  mixins: {
    shortTimestamp: Function,
  },
  props: {
    articles: Array,
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/variables.scss';
.article-list {
  article + article {
    border-top: 1px dotted lighten($primary, 20%);
    margin-top: 32px;
    padding-top: 32px;
  }
  .row {
    display: flex;
    @media (max-width: 700px) {
      flex-direction: column;
    }
    & + .row {
      margin-top: 16px;
    }
    .col-3 {
      display: flex;
      flex-direction: column;
      @media (max-width: 700px) {
        & + .col-3 {
          margin-top: 16px;
        }
      }
    }
  }
  .no-flex-shrink {
    flex-shrink: 0;
  }
  .date {
    font-family: 'Roboto', sans-serif;
    font-size: 0.75rem;
    font-weight: 400;
    margin-bottom: 12px;
    text-transform: uppercase;
    .topic:not(:last-child) {
      margin-right: 4px;
      &::after {
        content: ', ';
        color: $primary;
      }
    }
    a:hover {
      color: $accent;
    }
  }
  h2 {
    color: #111;
    font-size: 1.2rem;
    margin-bottom: 8px;
    margin-top: -6px;
  }
  .excerpt {
    @media (max-width: 500px) {
      // display: none;
    }
  }
  .lazy {
    margin: 0 22px 0 0;
    &.thumbnail {
      display: block;
    }
    &.medium {
      display: none;
    }
    @media (max-width: 700px) {
      margin: 0;
      &.thumbnail {
        display: none;
      }
      &.medium {
        display: block;
      }
    }
    img {
      display: block;
      height: 144px;
      width: 144px;
      object-fit: cover;
      @media (max-width: 1200px) {
        height: 96px;
        width: 96px;
      }
      @media (max-width: 700px) {
        height: 200px;
        object-fit: cover;
        width: 100%;
      }
    }
    .spinner {
      @media (max-width: 500px) {
        transform: scale(0.4);
      }
    }
  }
  a {
    color: $primary;
    transition: 0.2s;
    text-decoration: none;
    &:hover {
      color: #000;
      transform: translateX(4px);
    }
  }
  p {
    margin: 0;
  }
}
</style>