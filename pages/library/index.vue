<template>
  <div class="library-page">
    <BaseHero :heading="heading" :sup-heading="supHeading" :desc="desc" />
    <div class="container">
      <div class="content">
        <div v-if="loading" class="books">
          <div>
            <b-skeleton-img animation="throb" class="m-auto"></b-skeleton-img>
          </div>
          <div>
            <b-skeleton-img animation="throb" class="m-auto"></b-skeleton-img>
          </div>
          <div>
            <b-skeleton-img animation="throb" class="m-auto"></b-skeleton-img>
          </div>
          <div>
            <b-skeleton-img animation="throb" class="m-auto"></b-skeleton-img>
          </div>
        </div>
        <div v-else class="books">
          <a
            v-for="book in books"
            :key="book.id"
            v-b-tooltip.hover
            :href="`${book.acf.read_online_link}`"
            target="_blank"
            class="library"
            title="Read in new tab"
          >
            <div
              v-if="book._embedded['wp:featuredmedia'][0].code !== 'rest_forbidden'"
              class="lazy thumbnail"
            >
              <img
                v-lazy="book._embedded['wp:featuredmedia'][0].media_details.sizes.full.source_url"
                :alt="book._embedded['wp:featuredmedia'][0].alt_text"
              />
              <Spinner1 class="spinner" />
            </div>
            <div v-else class="lazy thumbnail">
              <img v-lazy="placeHolder" :alt="book._embedded['wp:featuredmedia'][0].alt_text" />
              <Spinner1 class="spinner" />
            </div>
            <div class="library-info">
              <div class="date">
                <span>{{ shortTimestamp(book.date) }}</span>
              </div>
              <h6 v-html="book.title.rendered"></h6>
              <button
                :id="`download-btn-${book.id}`"
                class="btn_white"
                :href="book.acf.download_link"
                download
              >
                <b-icon icon="download" aria-hidden="true"></b-icon>
              </button>
              <b-tooltip :target="`download-btn-${book.id}`" placement="right">
                Download file
              </b-tooltip>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Books',
  mixins: {
    shortTimestamp: Function,
  },
  data() {
    return {
      heading: 'Library',
      supHeading: 'Books',
      desc:
        'We are a Democratic, nonpartisan and progressive mass movement comprising of ghanaian students in Ternopol, ukraine with the primary aim of protecting and safeguarding the rights and interests of ghanaian students in ternopol.',
      title: 'Images from our top events',
      subTitle:
        'The National union of Ghanaian students attends regular events and acquires multiple images while doing that and would love you to see them.',
      books: [],
      loading: false,
      placeHolder: require('../../assets/img/placeHolderImg.jpg'),
    }
  },
  head() {
    return {
      title: `Gallery | ${this.$store.state.meta.name}`,
      meta: [{ description: this.$store.state.meta.description }],
    }
  },
  computed: {
    booksList() {
      return [...this.books].filter(
        (book) => !book.categories.includes(parseInt(process.env.FEATURED_CATEGORY_ID))
      )
    },
  },
  created() {
    this.fetchGalleries()
  },
  methods: {
    async fetchGalleries() {
      this.loading = true
      const { data } = await this.$axios.get(
        `/wp/v2/books?${
          this.$auth.$state.loggedIn && this.$auth.user.roles.includes('member')
            ? 'status=publish,private'
            : ''
        }&per_page=20&_embed`
      )
      this.books = data
      this.loading = false
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
.btn_white {
  @extend %custom_btn_outline_black;
  padding: 5px;
  color: rgb(255, 255, 255);
  z-index: 3;
  :hover {
    color: rgba(255, 255, 255, 0.8);
  }
}
.books {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 1rem;
}
.library {
  border-radius: 15px;
  overflow: hidden;
  position: relative;
  transition: 500ms ease-in-out all;

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
  &:hover {
    &::before {
      background-color: rgba(0, 0, 0, 0.25);
    }
    .library-info {
      transform: translateX(4px);
    }
    img {
      transform: scale(1.0125);
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
  }
  .library-info {
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
  height: 100%;
  width: 100%;
  img {
    object-fit: cover;
    transition: transform 0.4s, opacity 0.5s;
  }
  .spinner {
    @media (max-width: 500px) {
      transform: scale(0.4);
    }
  }
}
</style>
