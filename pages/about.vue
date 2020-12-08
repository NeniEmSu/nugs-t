<template>
  <div class="about">
    <TheHero
      :heading="heading"
      :sup-heading="supHeading"
      :desc="desc"
      :first-link="firstLink"
      :second-link="secondLink"
    />
    <section class="content">
      <div class="container">
        <div v-if="loading" class="executives">
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
        <div v-else class="executives">
          <article v-for="exec in executives" :key="exec.id" class="executive">
            <div v-if="exec._embedded['wp:featuredmedia']" class="lazy thumbnail">
              <img
                v-lazy="exec._embedded['wp:featuredmedia'][0].source_url"
                :alt="exec._embedded['wp:featuredmedia'][0].alt_text"
              />
              <Spinner1 class="spinner" />
            </div>
            <div v-if="exec._embedded['wp:featuredmedia']" class="lazy medium">
              <img
                v-lazy="exec._embedded['wp:featuredmedia'][0].source_url"
                :alt="exec._embedded['wp:featuredmedia'][0].alt_text"
              />
              <Spinner1 class="spinner" />
            </div>

            <div class="exec-info">
              <div class="date">
                <span>{{ exec.acf.position }}</span>
              </div>
              <h6 v-html="exec.title.rendered"></h6>
            </div>
            <div class="call">
              <a
                v-b-tooltip.hover
                :href="`tel:+${exec.acf.contact_number}`"
                :title="`Call me +${exec.acf.contact_number}`"
                style="font-size: 2rem"
              >
                <b-icon
                  icon="telephone-outbound-fill"
                  class="rounded-circle bg-secondary p-2"
                  variant="light"
                ></b-icon>
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'About',
  data() {
    return {
      executives: [],
      loading: false,
      heading: 'About Us',
      supHeading: 'Executives 2020-2021',
      desc:
        'We are a Democratic, nonpartisan and progressive mass movement comprising of ghanaian students in Ternopol, ukraine with the primary aim of protecting and safeguarding the rights and interests of ghanaian students in ternopol.',
      firstLink: {
        name: 'The by Law',
        link: 'https://drive.google.com/file/d/1imfhGJD3cHBugYFhyP7DSoEVli_SYd0b/view',
        blank: true,
        display: true,
      },
      secondLink: {
        name: 'Past Execs',
        link: '/',
        blank: false,
        display: true,
      },
    }
  },
  head() {
    return {
      title: `About Us | ${this.$store.state.meta.name}`,
      meta: [{ description: this.$store.state.meta.description }],
    }
  },
  created() {
    this.getExecs()
  },
  methods: {
    async getExecs() {
      this.loading = true
      try {
        const data = await this.$axios.get('/wp/v2/executives?_embed&per_page=25')
        this.executives = data.data
      } catch (error) {
        console.log(error)
      } finally {
        this.loading = false
      }
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
.executives {
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
.executive {
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
    .exec-info {
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
  .exec-info {
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

  .call {
    position: absolute;
    top: 10px;
    right: 10px;
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
