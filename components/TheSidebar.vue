<template>
  <aside>
    <div class="inner-container">
      <h4>Top Articles From NUGS Ukraine</h4>
      <article v-for="article in featuredArticles" :key="article.id">
        <a
          v-if="getFeaturedImage(article, 'medium')"
          :href="`${nugsUkraineLink}/index.php/${article.date.substring(
            0,
            4
          )}/${article.date.substring(5, 7)}/${article.date.substring(8, 10)}/${article.slug}`"
          target="blank"
          rel=""
          class="image"
        >
          <span class="hidden" v-html="article.title.rendered"></span>
          <div class="featured lazy">
            <div
              class="image-height"
              :style="{
                paddingTop:
                  (getFeaturedImage(article, 'medium').height /
                    getFeaturedImage(article, 'medium').width) *
                    100 +
                  '%',
              }"
            ></div>
            <img
              v-lazy="getFeaturedImage(article, 'medium').source_url"
              :alt="article._embedded['wp:featuredmedia'][0].alt_text"
            />
            <Spinner1 />
          </div>
        </a>
        <div class="content">
          <div class="meta">
            <span v-html="shortTimestamp(article.date)"></span>
          </div>
          <a
            :href="`${nugsUkraineLink}/index.php/${article.date.substring(
              0,
              4
            )}/${article.date.substring(5, 7)}/${article.date.substring(8, 10)}/${article.slug}`"
            class="article"
          >
            <h6 v-html="article.title.rendered"></h6>
            <div class="excerpt" v-html="article.excerpt.rendered"></div>
          </a>
        </div>
      </article>
    </div>
  </aside>
</template>

<script>
import Spinner1 from '~/components/Spinner1'
export default {
  components: {
    Spinner1,
  },
  mixins: {
    shortTimestamp: Function,
    getFeaturedImage: Function,
  },
  data() {
    return {
      nugsUkraineLink: 'https://nugsukraine.com',
      featuredArticles: [],
    }
  },
  mounted() {
    const fetchFeaturedArticles = async () => {
      const { data } = await this.$axios({
        url: `/wp-json/wp/v2/posts?orderby=date&per_page=10&_embed`,
        baseURL: `${this.nugsUkraineLink}`,
      })
      this.featuredArticles = data
    }
    fetchFeaturedArticles()
  },
  methods: {
    notFeatured(id) {
      return process.env.FEATURED_CATEGORY_ID !== id.toString()
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/variables.scss';
aside {
  min-width: 360px;
  flex: 1;
  @media (max-width: 1000px) {
    display: none;
  }
  .inner-container {
    background-color: var(--white);
    padding: 32px;
    h4 {
      margin-top: 0;
    }
    article {
      & + article {
        border-top: 1px dotted lighten($primary, 20%);
        margin-top: 32px;
        padding-top: 32px;
      }
      .featured {
        background-position: center;
        margin-bottom: 12px;
        img {
          position: absolute;
          top: 0;
        }
      }
      .image {
        position: relative;
        .featured {
          overflow: hidden;
          &::before {
            background-color: rgba(var(--black), 0);
            content: '';
            height: 100%;
            position: absolute;
            top: 0;
            transition: 0.4s;
            width: 100%;
            z-index: 1;
          }
          img {
            transition: 0.4s;
          }
        }
        &:hover {
          .featured {
            &::before {
              background-color: rgba(var(--black), 0.25);
            }
            img {
              transform: scale(1.0125);
            }
          }
        }
      }
      .content {
        transition: 0.2s;
        p {
          margin: 0;
        }
        .article {
          display: block;
          transition: 0.2s;
          &:hover {
            transform: translateX(4px);
            h6 {
              color: var(--black);
            }
            .excerpt {
              color: var(--black);
            }
          }
        }
      }
      .meta {
        font-size: 0.75rem;
        font-weight: 400;
        margin-bottom: 12px;
        text-transform: uppercase;
        .topic {
          & + .topic {
            margin-left: 8px;
            &::before {
              content: ', ';
              color: $primary;
              left: -7px;
              position: absolute;
            }
          }
        }
        a:hover {
          color: var(--black);
        }
      }
      h5 {
        margin: 12px 0;
      }
    }
  }
}
</style>
