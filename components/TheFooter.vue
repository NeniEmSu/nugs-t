<template>
  <footer>
    <section class="container">
      <section class="top">
        <div class="row">
          <div class="col-6 col-lg-3 discover">
            <h6>Discover</h6>
            <nuxt-link to="/dashboard">Dashboard</nuxt-link>
            <nuxt-link to="/topics">Topics</nuxt-link>
            <nuxt-link to="/authors">Authors</nuxt-link>
          </div>
          <div class="col-6 col-lg-3 resources">
            <h6>Resources</h6>
            <nuxt-link to="/library">Online Library</nuxt-link>
            <nuxt-link to="/new-blogs">News & Blogs</nuxt-link>
            <nuxt-link to="/gallery">Gallery</nuxt-link>
          </div>
          <div class="col-6 col-lg-3 support">
            <h6>Support</h6>
            <nuxt-link to="/"></nuxt-link>
            <nuxt-link to="/contact">Contact</nuxt-link>
            <nuxt-link to="/faqs">Faqs</nuxt-link>
          </div>
          <div class="col-6 col-lg-3 legal">
            <h6>Legal</h6>
            <nuxt-link to="/privacy-policy">Privacy Policy</nuxt-link>
            <nuxt-link to="/terms">Terms of Service</nuxt-link>
          </div>
        </div>
        <ColorModePicker />
      </section>
      <hr />
      <section class="credits">
        <p>
          © 2018 - {{ year }} NUGS-TERNOPIL Proudly Created By
          <a href="https://neniemsu.com" rel="author">NeniEmsu</a>
        </p>
        <div class="to-right">
          <a href="#"
            ><svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.25 2.5H8.75C5.29822 2.5 2.5 5.29822 2.5 8.75V21.25C2.5 24.7018 5.29822 27.5 8.75 27.5H21.25C24.7018 27.5 27.5 24.7018 27.5 21.25V8.75C27.5 5.29822 24.7018 2.5 21.25 2.5Z"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M19.9996 14.2129C20.1539 15.2532 19.9762 16.3156 19.4918 17.2491C19.0074 18.1826 18.2411 18.9396 17.3017 19.4125C16.3623 19.8853 15.2977 20.0499 14.2594 19.8828C13.221 19.7157 12.2618 19.2255 11.5182 18.4818C10.7745 17.7382 10.2843 16.779 10.1172 15.7406C9.95014 14.7023 10.1147 13.6377 10.5875 12.6983C11.0604 11.7589 11.8174 10.9926 12.7509 10.5082C13.6844 10.0238 14.7468 9.84611 15.7871 10.0004C16.8483 10.1577 17.8307 10.6522 18.5892 11.4108C19.3478 12.1693 19.8423 13.1517 19.9996 14.2129Z"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M21.875 8.125H21.8875"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </a>
          <a href="#">
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22.5 2.5H18.75C17.0924 2.5 15.5027 3.15848 14.3306 4.33058C13.1585 5.50269 12.5 7.0924 12.5 8.75V12.5H8.75V17.5H12.5V27.5H17.5V17.5H21.25L22.5 12.5H17.5V8.75C17.5 8.41848 17.6317 8.10054 17.8661 7.86612C18.1005 7.6317 18.4185 7.5 18.75 7.5H22.5V2.5Z"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </a>
          <nuxt-link to="/" @click.prevent="homeScrollTop">
            <svg
              width="130"
              height="30"
              viewBox="0 0 130 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M50.4317 22.37C50.1517 22.65 49.7417 22.86 49.2017 23C48.6817 23.16 48.0517 23.24 47.3117 23.24C46.5717 23.24 45.8717 23.13 45.2117 22.91C44.5517 22.69 44.0117 22.16 43.5917 21.32L40.6217 15.26C40.3217 14.64 40.0517 14.06 39.8117 13.52C39.5717 12.96 39.3117 12.32 39.0317 11.6L38.8517 11.63C38.9317 12.71 38.9717 13.81 38.9717 14.93C38.9917 16.05 39.0017 17.15 39.0017 18.23V22.88C38.7817 22.94 38.4417 23 37.9817 23.06C37.5417 23.12 37.1017 23.15 36.6617 23.15C36.2217 23.15 35.8317 23.12 35.4917 23.06C35.1517 23 34.8717 22.88 34.6517 22.7C34.4317 22.52 34.2617 22.28 34.1417 21.98C34.0217 21.66 33.9617 21.25 33.9617 20.75V5.75C34.2417 5.35 34.6717 5.05 35.2517 4.85C35.8317 4.65 36.4517 4.55 37.1117 4.55C37.8517 4.55 38.5517 4.67 39.2117 4.91C39.8917 5.13 40.4317 5.65 40.8317 6.47L43.8317 12.53C44.1317 13.15 44.4017 13.74 44.6417 14.3C44.8817 14.84 45.1417 15.47 45.4217 16.19L45.5717 16.16C45.4917 15.08 45.4417 14 45.4217 12.92C45.4017 11.84 45.3917 10.76 45.3917 9.68V4.82C45.6117 4.76 45.9417 4.7 46.3817 4.64C46.8417 4.58 47.2917 4.55 47.7317 4.55C48.6117 4.55 49.2817 4.71 49.7417 5.03C50.2017 5.33 50.4317 5.97 50.4317 6.95V22.37ZM53.933 8.63C54.133 8.57 54.443 8.51 54.863 8.45C55.303 8.39 55.753 8.36 56.213 8.36C56.653 8.36 57.043 8.39 57.383 8.45C57.743 8.51 58.043 8.63 58.283 8.81C58.523 8.99 58.703 9.24 58.823 9.56C58.963 9.86 59.033 10.26 59.033 10.76V17.21C59.033 18.03 59.233 18.62 59.633 18.98C60.033 19.32 60.613 19.49 61.373 19.49C61.833 19.49 62.203 19.45 62.483 19.37C62.783 19.29 63.013 19.21 63.173 19.13V8.63C63.373 8.57 63.683 8.51 64.103 8.45C64.543 8.39 64.993 8.36 65.453 8.36C65.893 8.36 66.283 8.39 66.623 8.45C66.983 8.51 67.283 8.63 67.523 8.81C67.763 8.99 67.943 9.24 68.063 9.56C68.203 9.86 68.273 10.26 68.273 10.76V19.88C68.273 20.88 67.853 21.63 67.013 22.13C66.313 22.57 65.473 22.9 64.493 23.12C63.533 23.36 62.483 23.48 61.343 23.48C60.263 23.48 59.263 23.36 58.343 23.12C57.443 22.88 56.663 22.51 56.003 22.01C55.343 21.51 54.833 20.87 54.473 20.09C54.113 19.29 53.933 18.33 53.933 17.21V8.63ZM78.504 7.97C79.644 7.97 80.674 8.12 81.594 8.42C82.534 8.7 83.324 9.07 83.964 9.53C84.364 9.81 84.674 10.12 84.894 10.46C85.134 10.8 85.254 11.24 85.254 11.78V22.28C85.254 23.34 85.054 24.25 84.654 25.01C84.254 25.79 83.704 26.43 83.004 26.93C82.324 27.45 81.514 27.83 80.574 28.07C79.654 28.31 78.664 28.43 77.604 28.43C75.784 28.43 74.354 28.18 73.314 27.68C72.274 27.2 71.754 26.41 71.754 25.31C71.754 24.85 71.844 24.44 72.024 24.08C72.224 23.74 72.444 23.48 72.684 23.3C73.264 23.62 73.914 23.89 74.634 24.11C75.374 24.33 76.134 24.44 76.914 24.44C77.994 24.44 78.854 24.26 79.494 23.9C80.134 23.54 80.454 22.96 80.454 22.16V21.68C79.634 22.04 78.634 22.22 77.454 22.22C76.554 22.22 75.694 22.09 74.874 21.83C74.074 21.55 73.364 21.13 72.744 20.57C72.144 19.99 71.654 19.25 71.274 18.35C70.914 17.45 70.734 16.38 70.734 15.14C70.734 13.92 70.924 12.86 71.304 11.96C71.704 11.06 72.244 10.32 72.924 9.74C73.624 9.14 74.444 8.7 75.384 8.42C76.344 8.12 77.384 7.97 78.504 7.97ZM80.364 12.32C80.224 12.24 80.014 12.16 79.734 12.08C79.474 12 79.144 11.96 78.744 11.96C77.764 11.96 77.024 12.24 76.524 12.8C76.044 13.34 75.804 14.12 75.804 15.14C75.804 16.3 76.044 17.14 76.524 17.66C77.024 18.16 77.654 18.41 78.414 18.41C79.234 18.41 79.884 18.22 80.364 17.84V12.32ZM100.715 18.65C100.715 20.17 100.145 21.36 99.0055 22.22C97.8655 23.08 96.1855 23.51 93.9655 23.51C93.1255 23.51 92.3455 23.45 91.6255 23.33C90.9055 23.21 90.2855 23.03 89.7655 22.79C89.2655 22.53 88.8655 22.21 88.5655 21.83C88.2855 21.45 88.1455 21 88.1455 20.48C88.1455 20 88.2455 19.6 88.4455 19.28C88.6455 18.94 88.8855 18.66 89.1655 18.44C89.7455 18.76 90.4055 19.05 91.1455 19.31C91.9055 19.55 92.7755 19.67 93.7555 19.67C94.3755 19.67 94.8455 19.58 95.1655 19.4C95.5055 19.22 95.6755 18.98 95.6755 18.68C95.6755 18.4 95.5555 18.18 95.3155 18.02C95.0755 17.86 94.6755 17.73 94.1155 17.63L93.2155 17.45C91.4755 17.11 90.1755 16.58 89.3155 15.86C88.4755 15.12 88.0555 14.07 88.0555 12.71C88.0555 11.97 88.2155 11.3 88.5355 10.7C88.8555 10.1 89.3055 9.6 89.8855 9.2C90.4655 8.8 91.1555 8.49 91.9555 8.27C92.7755 8.05 93.6755 7.94 94.6555 7.94C95.3955 7.94 96.0855 8 96.7255 8.12C97.3855 8.22 97.9555 8.38 98.4355 8.6C98.9155 8.82 99.2955 9.11 99.5755 9.47C99.8555 9.81 99.9955 10.22 99.9955 10.7C99.9955 11.16 99.9055 11.56 99.7255 11.9C99.5655 12.22 99.3555 12.49 99.0955 12.71C98.9355 12.61 98.6955 12.51 98.3755 12.41C98.0555 12.29 97.7055 12.19 97.3255 12.11C96.9455 12.01 96.5555 11.93 96.1555 11.87C95.7755 11.81 95.4255 11.78 95.1055 11.78C94.4455 11.78 93.9355 11.86 93.5755 12.02C93.2155 12.16 93.0355 12.39 93.0355 12.71C93.0355 12.93 93.1355 13.11 93.3355 13.25C93.5355 13.39 93.9155 13.52 94.4755 13.64L95.4055 13.85C97.3255 14.29 98.6855 14.9 99.4855 15.68C100.305 16.44 100.715 17.43 100.715 18.65ZM103.091 17.42C102.951 17.2 102.821 16.91 102.701 16.55C102.581 16.19 102.521 15.81 102.521 15.41C102.521 14.67 102.691 14.14 103.031 13.82C103.371 13.48 103.811 13.31 104.351 13.31H110.771C110.891 13.53 111.011 13.82 111.131 14.18C111.271 14.54 111.341 14.92 111.341 15.32C111.341 16.06 111.171 16.6 110.831 16.94C110.491 17.26 110.051 17.42 109.511 17.42H103.091ZM112.428 9.02C112.288 8.8 112.158 8.5 112.038 8.12C111.918 7.74 111.858 7.34 111.858 6.92C111.858 6.14 112.028 5.58 112.368 5.24C112.728 4.9 113.188 4.73 113.748 4.73H126.828C126.968 4.95 127.098 5.25 127.218 5.63C127.338 6.01 127.398 6.41 127.398 6.83C127.398 7.61 127.218 8.17 126.858 8.51C126.518 8.85 126.068 9.02 125.508 9.02H122.178V22.88C121.958 22.94 121.608 23 121.128 23.06C120.668 23.12 120.208 23.15 119.748 23.15C119.288 23.15 118.878 23.11 118.518 23.03C118.178 22.97 117.888 22.85 117.648 22.67C117.408 22.49 117.228 22.24 117.108 21.92C116.988 21.6 116.928 21.18 116.928 20.66V9.02H112.428Z"
                fill="white"
              />
              <path
                d="M11.8177 3.42552C13.8293 1.53366 16.9936 1.63068 18.8855 3.64223L26.5745 11.8177C28.4664 13.8293 28.3693 16.9936 26.3578 18.8855L18.1823 26.5745C16.1708 28.4663 13.0064 28.3693 11.1146 26.3578L3.42554 18.1823C1.53368 16.1707 1.6307 13.0064 3.64225 11.1145L11.8177 3.42552Z"
                fill="white"
              />
              <circle cx="26.6798" cy="25.9372" r="2.6529" fill="white" />
            </svg>
          </nuxt-link>
        </div>
      </section>
    </section>
  </footer>
</template>

<script>
export default {
  mixins: {
    homeScrollTop: Function,
  },
  computed: {
    year() {
      return new Date().getFullYear()
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/variables.scss';
footer {
  background-color: rgba(27, 25, 45, 1);
  // margin-top: 130px;
  @media #{$small_mobile} {
    // margin-top: 25px;
  }
  @media #{$large_mobile} {
    // margin-top: 40px;
  }
  @media #{$tab_device} {
    // margin-top: 50px;
  }
  .link {
    color: #757575;
    font-weight: 400;
  }
  .top {
    padding: 80px 0;
    @media #{$small_mobile} {
      padding: 25px 0;
    }
    @media #{$large_mobile} {
      padding: 40px 0;
    }
    @media #{$tab_device} {
      padding: 50px 0;
    }
    .row .col-6.col-lg-3 {
      margin: 16px auto;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;

      &.discover {
        text-align: left;
      }
      &.resources {
        text-align: center;
      }
      &.support {
        text-align: center;
      }
      &.legal {
        text-align: right;
      }
      @media #{$small_mobile} {
        &.discover {
          text-align: left;
        }
        &.resources {
          text-align: right;
        }
        &.support {
          text-align: left;
        }
        &.legal {
          text-align: right;
        }
      }
      @media #{$large_mobile} {
        &.discover {
          text-align: left;
        }
        &.resources {
          text-align: right;
        }
        &.support {
          text-align: left;
        }
        &.legal {
          text-align: right;
        }
      }
      @media #{$tab_device} {
        &.discover {
          text-align: left;
        }
        &.resources {
          text-align: right;
        }
        &.support {
          text-align: left;
        }
        &.legal {
          text-align: right;
        }
      }
      h6 {
        color: rgba(255, 255, 255, 0.8);
      }

      a {
        color: rgba(255, 255, 255, 0.5);
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        &:hover {
          color: #e453df;
        }
      }
    }
  }

  hr {
    border: 2px solid rgba(55, 53, 71, 1);
    margin: 0 auto;
  }
  .credits {
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media #{$small_mobile} {
      height: auto;
      padding: 16px 0;
    }
    @media #{$large_mobile} {
      height: auto;
      padding: 20px 0;
    }
    @media #{$tab_device} {
      height: auto;
      padding: 25px 0;
    }

    @media #{$small_mobile} {
      flex-direction: column;
      justify-content: center;
      text-align: center;
    }
    @media #{$large_mobile} {
      flex-direction: column;
      justify-content: center;
      text-align: center;
    }
    @media #{$tab_device} {
      flex-direction: column;
      justify-content: center;
      text-align: center;
    }

    P {
      margin: 0;
      font-size: 16px;
      line-height: 19px;
      align-items: center;

      color: rgba(255, 255, 255, 0.5);

      @media #{$small_mobile} {
        margin-bottom: 16px;
      }
      @media #{$large_mobile} {
        margin-bottom: 20px;
      }
      @media #{$tab_device} {
        margin-bottom: 25px;
      }

      & > a {
        color: #e453df;
      }
    }

    a {
      svg {
        @media #{$small_mobile} {
          height: 20px;
          width: auto;
        }
        @media #{$large_mobile} {
          height: 25px;
          width: auto;
        }
        @media #{$tab_device} {
          height: 25px;
          width: auto;
        }
      }

      & + a {
        margin-left: 32px;
      }
    }
  }
}
</style>
