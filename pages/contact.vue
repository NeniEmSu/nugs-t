<template>
  <div class="contact-page">
    <BaseHero :heading="heading" :sup-heading="supHeading" :has-btn="false" :has-desc="false" />
    <div class="container">
      <div class="container">
        <div class="row">
          <div class="offset-lg-1"></div>
          <div class="form-card col-lg-6 col-md-7">
            <busy-overlay :loading="loading" />
            <form @submit.prevent="sendMessage">
              <b-alert
                v-if="error"
                show
                class="position-fixed fixed-top m-0 rounded-0"
                style="z-index: 11"
                dismissible
                variant="danger"
              >
                <h6 class="alert-heading">Error!</h6>
                <p v-text="error.response.data.message.replace('<strong>Error</strong>: ', '')"></p>
              </b-alert>
              <div class="form-group">
                <input
                  id="name"
                  v-model="name"
                  type="name"
                  class="form-control"
                  name="name"
                  required
                  placeholder="Your full name"
                />
                <label for="name" class="form-label">Name<span class="text-danger">*</span></label>
              </div>
              <div class="form-group">
                <input
                  id="email"
                  v-model="email"
                  type="email"
                  class="form-control"
                  name="email"
                  required
                  placeholder="something@email.com"
                />
                <label for="email" class="form-label">
                  Email
                  <span class="text-danger">*</span>
                </label>
              </div>
              <div class="form-group">
                <input
                  id="phone"
                  v-model="phone"
                  type="tel"
                  class="form-control"
                  name="phone"
                  required
                  placeholder="+000 00 000 0000"
                />
                <label for="phone" class="form-label">
                  Phone<span class="text-danger">*</span></label
                >
              </div>
              <div class="form-group">
                <input
                  id="subject"
                  v-model="subject"
                  type="text"
                  class="form-control"
                  name="subject"
                  required
                  placeholder="something short"
                />
                <label for="subject" class="form-label">
                  Subject<span class="text-danger">*</span></label
                >
              </div>

              <div class="form-group">
                <textarea
                  id="message"
                  v-model="message"
                  name="message"
                  class="form-control"
                  rows="5"
                  placeholder="Your message here..."
                ></textarea>
                <label for="message" class="textarea-label">Message</label>
              </div>

              <div class="form-group p-0">
                <b-form-checkbox
                  id="status"
                  v-model="status"
                  name="status"
                  value="accepted"
                  required
                  unchecked-value="not_accepted"
                >
                  I agree to the <nuxt-link to="/terms">terms and conditions</nuxt-link> of use.
                </b-form-checkbox>
              </div>

              <div class="text-center">
                <button class="btn_black" type="submit">Send</button>
              </div>
            </form>
          </div>
          <div class="offset-md-1"></div>
          <div class="side-content col-lg-3 col-md-4">
            <p class="text-left text-center-md">
              Have questions or need help? Use the form to reach out and we will be in touch with
              you as quickly as possible.
            </p>
          </div>
          <div class="offset-lg-1"></div>
        </div>

        <div class="more row text-center">
          <div class="col-md-5 more-card">
            <div class="text-content">
              <h2>Technical Support</h2>
              <p>Need Help? Our community is here to support you!</p>
              <nuxt-link class="btn_black" to="/sign-up">Join Today!</nuxt-link>
            </div>
          </div>

          <div class="col-md-5 more-card">
            <div class="text-content">
              <h2>FAQs</h2>
              <p>Get help with the most common questions.</p>

              <nuxt-link class="btn_black" to="/faqs">Checkout FAQs</nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SignIn',
  data() {
    return {
      heading: 'Contact Us',
      supHeading: 'Get In Touch!',
      desc: '',
      error: null,
      loading: false,
      name: '',
      phone: '',
      status: '',
      email: '',
      subject: '',
      message: '',
    }
  },
  computed: {},
  methods: {
    async sendMessage() {
      const formData = new FormData()

      formData.set('your-name', this.name)
      formData.set('email', this.email)
      formData.set('phone', this.phone)
      formData.set('subject', this.subject)
      formData.set('message', this.message)
      this.loading = true
      try {
        await this.$axios
          .post('/contact-form-7/v1/contact-forms/1704/feedback', formData, {
            headers: { 'Content-Type': 'multipart/form-data' },
          })
          .then((response) => {
            this.$store.dispatch('toast/setToast', {
              title: response.data.status,
              append: true,
              variant: response.data.status === 'mail_sent' ? 'success' : 'danger',
              text: response.data.message,
              delay: 5000,
            })
            if (response.data.status === 'mail_sent') {
              this.name = this.email = this.phone = this.subject = this.message = this.status = ''
            }
            this.loading = false
          })
          .catch((response) => {
            console.log(response)
          })
      } catch (error) {
        this.error = error
        this.loading = false
      }
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/variables.scss';
@import '~/assets/scss/_extends.scss';
.contact-page {
  padding: 0 0 130px 0;
  @media #{$small_mobile} {
    padding: 0 0 25px 0;
  }
  @media #{$large_mobile} {
    padding: 0 0 40px 0;
  }
  @media #{$tab_device} {
    padding: 0 0 50px 0;
  }
}

.form-card {
  margin-top: -100px;
}

a {
  color: var(--dark-accent);
}

.btn_black {
  @extend %custom_btn_outline_black;
}

.side-content {
  margin-top: 60px;
}

.more {
  margin-top: 130px;
  @media #{$small_mobile} {
    margin-top: 25px;
  }
  @media #{$large_mobile} {
    margin-top: 40px;
  }
  @media #{$tab_device} {
    margin-top: 50px;
  }

  .more-card {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    margin: 25px auto;
    border: 3px solid;
    border-color: rgb(77, 66, 255);
    border-radius: 10px;
    background: var(--bg-secondary);
    color: var(--color);
    padding: 30px 30px 30px 30px;
    border-width: 3px 3px 3px 3px;

    &:first-of-type {
      border: 3px solid;
      border-color: #e21e51;
    }

    .text-content {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
    }

    .btn_black {
      margin: 0 auto;
    }
  }
}
</style>
