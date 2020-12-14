<template>
  <div class="event-page">
    <BaseHero :heading="heading" :sup-heading="supHeading" :desc="desc" />
    <div class="container">
      <div class="content">
        <SubsectionHeading :title="title" :sub-title="subTitle" />
        <div v-if="loading" class="collection">
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
        <div v-else class="collection">
          <nuxt-link
            v-for="event in events"
            :key="event.id"
            :to="`/events/${event.slug}`"
            class="event"
          >
            <div v-if="event._embedded['wp:featuredmedia']" class="lazy thumbnail">
              <img
                v-lazy="event._embedded['wp:featuredmedia'][0].media_details.sizes.full.source_url"
                :alt="event._embedded['wp:featuredmedia'][0].alt_text"
              />
              <Spinner1 class="spinner" />
            </div>
            <div v-if="event._embedded['wp:featuredmedia']" class="lazy medium">
              <img
                v-lazy="
                  event._embedded['wp:featuredmedia'][0].media_details.sizes.medium.source_url
                "
                :alt="event._embedded['wp:featuredmedia'][0].alt_text"
              />
              <Spinner1 class="spinner" />
            </div>

            <div class="event-info">
              <div class="date">
                <span>{{ shortTimestamp(event.date) }}</span>
              </div>
              <h6 v-html="event.title.rendered"></h6>
            </div>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SubsectionHeading from '~/components/SubsectionHeading'
export default {
  name: 'Galleries',
  components: {
    SubsectionHeading,
  },
  mixins: {
    shortTimestamp: Function,
  },
  data() {
    return {
      heading: 'Event',
      supHeading: 'Memories captured in time.',
      desc:
        'We are a Democratic, nonpartisan and progressive mass movement comprising of ghanaian students in Ternopol, ukraine with the primary aim of protecting and safeguarding the rights and interests of ghanaian students in ternopol.',
      title: 'Images from our top events',
      subTitle:
        'The National union of Ghanaian students attends regular events and acquires multiple images while doing that and would love you to see them.',
      events: [],
      loading: false,
    }
  },
  head() {
    return {
      title: `${this.heading} | ${this.$store.state.meta.name}`,
      meta: [{ description: this.desc }],
    }
  },
  computed: {
    eventsList() {
      return [...this.events].filter(
        (event) => !event.categories.includes(parseInt(process.env.FEATURED_CATEGORY_ID))
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
        `/wp/v2/events?${
          this.$auth.$state.loggedIn && this.$auth.user.roles.includes('member')
            ? 'status=publish,private'
            : ''
        }&orderby=date&_embed`
      )
      this.events = data
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
.collection {
  display: grid;
  grid-template-columns: repeat(4, minmax(250px, 1fr));
  grid-gap: 1rem;
  @media #{$small_mobile} {
    grid-template-columns: 1fr;
  }
  @media #{$large_mobile} {
    grid-template-columns: 1fr;
  }
  @media #{$tab_device} {
    grid-template-columns: repeat(2, 1fr);
  }
  @media #{$medium_device} {
    grid-template-columns: repeat(3, 1fr);
  }
}
.event {
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
    .event-info {
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
  .event-info {
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
  height: 100%;
  width: 100%;
  img {
    object-fit: cover;
    transition: transform 0.4s, opacity 0.5s;
  }
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
