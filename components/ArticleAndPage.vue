/* eslint-disable vue/no-v-html */
<template>
  <article class="single">
    <FeaturedImage
      v-if="getFeaturedImage(data, 'full')"
      :expanded="expanded"
      :article="data"
      :featured-image="getFeaturedImage(data, 'full')"
    />
    <transition name="slide-fade">
      <div
        class="narrow"
        :class="{ expanded: expanded, 'no-featured-image': !getFeaturedImage(data, 'full') }"
      >
        <button
          v-if="getFeaturedImage(data, 'full')"
          v-b-tooltip.hover
          class="expand-featured-image"
          :title="expanded ? 'Collapse image' : 'Show full image'"
          :class="{ expanded: expanded }"
          @click.prevent="expanded = !expanded"
        >
          <svg
            fill="#000000"
            height="24"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" />
            <path d="M0 0h24v24H0z" fill="none" />
          </svg>
        </button>
        <div class="meta">
          <h1 class="title" v-html="data.title.rendered"></h1>
          <div class="details">
            <span>{{ longTimestamp(data.date) }}</span>
            <span class="separator">|</span>
            <nuxt-link class="author fancy" :to="`/authors/${data._embedded.author[0].slug}`">
              <span>{{ data._embedded.author[0].name }}</span>
            </nuxt-link>
          </div>
        </div>
        <div class="content" v-html="data.content.rendered"></div>
        <Comments v-if="$store.state.enableComments && type === 'article'" :article="data" />
      </div>
    </transition>
    <div v-if="colorAccentStyles" v-html="colorAccentStyles"></div>
  </article>
</template>

<script>
import * as Vibrant from 'node-vibrant'
import Comments from '~/components/Comments'
export default {
  components: { Comments },
  mixins: {
    getFeaturedImage: Function,
    longTimestamp: Function,
  },
  props: {
    data: Object,
    type: String,
  },
  data() {
    return {
      expanded: false,
      colorAccentStyles: null,
    }
  },
  mounted() {
    this.initGallery()
    // if (this.getFeaturedImage(this.data, 'thumbnail')) {
    //   this.getColorAccentStyles(this.data).then((styles) => (this.colorAccentStyles = styles))
    // }
  },
  methods: {
    initGallery() {
      const galleries = document.querySelectorAll('.content > .gallery')
      if (galleries.length) {
        if (process.browser) {
          require('lightgallery.js')
          require('lg-zoom.js')
          require('lg-thumbnail.js')
          require('lg-share.js')
          require('lg-autoplay.js')
        }
        for (let i = 0; i < galleries.length; i++) {
          // eslint-disable-next-line no-undef
          lightGallery(galleries[i], {
            download: true,
            selector: 'a',
          })
        }
      }
    },
    getColorAccentStyles(article) {
      return new Promise(function (resolve, reject) {
        const image = article._embedded['wp:featuredmedia'][0].media_details.sizes.full.source_url
        Vibrant.from(image).getPalette((err, palette) => {
          if (!err && palette.DarkMuted) {
            const { r, g, b } = palette.DarkMuted
            resolve(`
              <style>
                html,
                .featured-image .image-height {
                  background: rgb(${r},${g},${b}) !important
                }
                main a {
                  color: rgb(${r},${g},${b}) !important
                }
                main a:hover {
                  color: rgb(${r},${g},${b}) !important
                }
                main a::after {
                  background: rgb(${r},${g},${b}) !important
                }
              </style>
            `)
          } else {
            reject(err)
          }
        })
      })
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/variables.scss';
article {
  background-color: var(--bg);
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100%;
  .narrow {
    background-color: var(--bg-secondary);
    margin: 0 auto;
    max-width: 842px;
    min-height: calc(100vh - 80px - 96px - 200px);
    padding: 0 96px 96px 96px;
    position: relative;
    transition: min-height 1s, transform 1s;
    transform: translateY(0);
    width: 100%;
    box-shadow: 4px 8px 10px rgba($color: var(--black), $alpha: 0.25);
    &.expanded {
      min-height: 0;
    }
    @media (max-width: 900px) {
      margin-top: 0 !important;
      max-width: 100%;
      min-height: initial;
    }
    @media (max-width: 700px) {
      max-width: none;
      padding: 0 16px 16px 16px;
    }
    .expand-featured-image {
      background-color: transparent;
      border: 0;
      cursor: pointer;
      outline: 0;
      position: absolute;
      right: 32px;
      top: 32px;
      transition: 1s;
      z-index: 1;
      @media (max-width: 900px) {
        display: none;
      }
      svg {
        fill: var(--color);
        height: 24px;
        opacity: 0.7;
        transition: 0.1s;
        width: 24px;
      }
      &.expanded {
        transform: rotate(180deg);
      }
      &:hover {
        svg {
          opacity: 1;
        }
      }
    }
    &.no-featured-image {
      margin: 0 auto;
    }
  }
  &.page-enter-active .narrow {
    transition: transform 1s cubic-bezier(0.11, 0.89, 0.31, 0.99), opacity 0.75s ease-out;
  }
  &.page-enter .narrow,
  .page-leave-to .narrow {
    transform: translateY(16px);
  }
  .meta {
    .title {
      font-size: 40px;
      line-height: 1;
      margin-bottom: 16px;
      margin-top: 0;
      padding-top: 64px;
      @media (max-width: 700px) {
        padding-top: 48px;
      }
      @media (max-width: 500px) {
        padding-top: 32px;
      }
    }
    .details {
      font-size: 0.8rem;
      .separator {
        padding: 0 0.5rem;
      }
    }
  }
}
</style>

<style lang="scss">
@import '../node_modules/lightgallery.js/dist/css/lightgallery.css';
@import '~/assets/scss/variables.scss';
.lg-backdrop {
  background-color: #111;
}
#lg-counter {
  font-family: 'Roboto', sans-serif;
}
.lg-toolbar,
.lg-actions .lg-next,
.lg-actions .lg-prev,
.lg-outer .lg-thumb-outer,
.lg-outer .lg-toggle-thumb {
  background-color: #1a1a1a;
}
#lg-actual-size::after {
  content: '\E311';
}
#lg-zoom-in,
#lg-zoom-out {
  display: none;
}
.lg-outer .lg-thumb-item {
  border-radius: 2px;
  border-color: #aaa;
}
.lg-outer .lg-thumb-item.active,
.lg-outer .lg-thumb-item:hover {
  border-color: var(--white);
}

.pdf-viewer .lg-object {
  // Height of the toolbar
  padding-top: 47px;
}
</style>

<style lang="scss">
@import '~/assets/scss/variables.scss';
.single {
  .content {
    border-top: 1px dotted lighten($primary, 20%);
    padding-top: 32px;
    margin-top: 32px;
    > *:first-child {
      margin-top: 0;
    }
    p {
      color: var(--color);
      margin-bottom: 32px;
      margin-top: 0;

      > span,
      strong {
        color: var(--color) !important;
      }
    }
    .wp-caption {
      p {
        margin-bottom: 0;
        & + p {
          margin-top: 16px;
        }
      }
    }
    img {
      height: auto;
      max-width: 100%;
    }
    a {
      color: var(--dark-accent);
      position: relative;
      &:hover {
        color: var(--dark-accent);
      }
      &::after {
        background: rgba($color: var(--dark-accent), $alpha: 0.5);
        content: '';
        height: 1px;
        left: 0;
        opacity: 0;
        position: absolute;
        top: 100%;
        transform: translateY(-4px);
        transition: height 0.1s, opacity 0.1s, transform 0.1s;
        width: 100%;
      }
      &:hover,
      &:focus {
        &::after {
          height: 4px;
          opacity: 1;
          transform: translateY(0);
        }
      }
    }
    .alignnone,
    .size-full,
    .wp-caption {
      background-color: var(--white);
      padding: 16px;
      display: block;
      margin-bottom: 32px;
      img {
        display: block;
        padding: 0;
        margin-bottom: 16px;
      }
      &.alignnone {
        max-width: 100%;
      }
      &.aligncenter {
        margin-left: auto;
        margin-right: auto;
      }
      &.alignleft {
        float: left;
        margin-right: 32px;
        width: initial;
      }
      &.alignright {
        float: right;
        margin-left: 32px;
        width: initial;
      }
    }

    .gallery {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(20%, 1fr));
      grid-column-gap: 8px;
      grid-row-gap: 8px;
      grid-auto-rows: max-content;
      grid-auto-flow: dense;
    }

    .gallery img {
      padding: 0;
      margin: 0;
      max-width: 100%;
      border-radius: 8px;
      box-shadow: 0 0 16px #333;
      transition: all 1.5s ease;
    }
    .gallery img:hover {
      box-shadow: 0 0 32px #333;
    }

    .gallery .gallery-icon {
      padding: 4px;
    }
    .gallery .gallery-item {
      position: relative;
      height: max-content;
      transition: grid-row-start 300ms linear;
      transition: transform 300ms ease;
      transition: all 0.5s ease;
      cursor: pointer;
    }

    .gallery .gallery-item:hover {
      transform: scale(1.025);
    }
    @media (max-width: 900px) {
      .gallery {
        grid-template-columns: repeat(auto-fill, minmax(45%, 1fr));
      }
    }
    @media (max-width: 600px) {
      .gallery {
        grid-template-columns: repeat(auto-fill, minmax(40%, 1fr));
      }
    }
    @media (max-width: 400px) {
      .gallery {
        grid-template-columns: repeat(auto-fill, minmax(50%, 1fr));
      }
    }

    .gallery-caption {
      color: #eee;
      font-size: 14px;
      font-weight: 600;
      margin: 0;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%);
    }
  }
}
</style>
