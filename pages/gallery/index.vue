<template>
  <div class="gallery-page">
    <BaseHero :heading="heading" :sup-heading="supHeading" :desc="desc" />
    <div class="content container">
      <div class="galleries row">
        <nuxt-link
          v-for="gallery in galleries"
          :key="gallery.id"
          :to="`/gallery/${gallery.slug}`"
          class="col-sm-6 col-lg-4 col-xl-3 p-0 gallery"
        >
          <div v-if="gallery._embedded['wp:featuredmedia']" class="lazy thumbnail">
            <img
              v-lazy="gallery._embedded['wp:featuredmedia'][0].media_details.sizes.full.source_url"
              :alt="gallery._embedded['wp:featuredmedia'][0].alt_text"
            />
            <Spinner1 class="spinner" />
          </div>
          <div v-if="gallery._embedded['wp:featuredmedia']" class="lazy medium">
            <img
              v-lazy="
                gallery._embedded['wp:featuredmedia'][0].media_details.sizes.medium.source_url
              "
              :alt="gallery._embedded['wp:featuredmedia'][0].alt_text"
            />
            <Spinner1 class="spinner" />
          </div>

          <div class="gallery-info">
            <div class="date">
              <span>{{ shortTimestamp(gallery.date) }}</span>
            </div>
            <h6 v-html="gallery.title.rendered"></h6>
          </div>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mixins: {
    shortTimestamp: Function,
  },
  data() {
    return {
      heading: 'Gallery',
      supHeading: 'Memories captured in time.',
      desc:
        'We are a Democratic, nonpartisan and progressive mass movement comprising of ghanaian students in Ternopol, ukraine with the primary aim of protecting and safeguarding the rights and interests of ghanaian students in ternopol.',
      galleries: [],
    }
  },
  head() {
    return {
      title: `Gallery | ${this.$store.state.meta.name}`,
      meta: [{ description: this.$store.state.meta.description }],
    }
  },
  computed: {
    galleriesList() {
      return [...this.galleries].filter(
        (gallery) => !gallery.categories.includes(parseInt(process.env.FEATURED_CATEGORY_ID))
      )
    },
  },
  created() {
    this.fetchGalleries()
  },
  methods: {
    async fetchGalleries() {
      const { data } = await this.$axios.get(
        `/wp/v2/gallery?${
          this.$auth.$state.loggedIn && this.$auth.user.roles.includes('member')
            ? 'status=publish,private'
            : ''
        }&orderby=date&_embed`
      )
      this.galleries = data
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
.gallery {
  overflow: hidden;
  position: relative;
  &:hover {
    &::before {
      background-color: rgba(0, 0, 0, 0.25);
    }
    .meta {
      transform: translateX(4px);
    }
  }
  &:before {
    content: '';
    display: block;
    pointer-events: none;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-image: linear-gradient(to top, rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0) 50%);
    transition: 0.4s;
    z-index: 2;
  }
  a {
    align-items: flex-end;
    display: flex;
    &:hover {
      .image {
        transform: scale(1.0125);
      }
    }
  }
  .date {
    color: #eee;
    font-family: 'Roboto', sans-serif;
    font-size: 0.75rem;
    font-weight: 400;
    left: 0;
    text-shadow: 1px 1px 0px rgba(0, 0, 0, 1);
    text-transform: uppercase;
    top: 0;
    z-index: 2;
    a:hover {
      color: $accent;
    }
  }
  .featured-image {
    height: 100%;
    width: 100%;
    img {
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      display: block;
      height: 100%;
      max-width: 100%;
      position: absolute;
      top: 0;
      transition: transform 0.4s, opacity 0.5s;
      width: 100%;
    }
  }
  .gallery-info {
    bottom: 0;
    color: #eee;
    margin: 0 auto 0 0;
    padding: 16px;
    position: absolute;
    text-shadow: 1px 1px 0px rgba(0, 0, 0, 1);
    transition: 0.4s;
    z-index: 2;
    h6 {
      color: #eee;
      margin: 0;
    }
    p {
      margin: 0;
    }
  }
}

.lazy {
  margin: 0;
  &.thumbnail {
    display: block;
  }
  &.medium {
    display: none;
  }
  @media (max-width: 700px) {
    margin: 0px auto;
    &.thumbnail {
      display: none;
    }
    &.medium {
      display: block;
    }
  }
  .spinner {
    @media (max-width: 500px) {
      transform: scale(0.4);
    }
  }
}
</style>
