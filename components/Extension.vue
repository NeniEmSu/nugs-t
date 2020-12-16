<template>
  <section class="extension">
    <div class="container">
      <div class="row">
        <div class="detail col-lg-6 col-md-7">
          <h2>Application and follow up on school fee extension process.</h2>
          <p>
            Given the financial situation of the world we live in today and the situation of thing
            back home i.e Ghana, it has become a necessity to opt for extensions on the payment of
            fees and NUGS-T has been able to provide valuable help in this area and intends to make
            it as easy as possible to acquire help. <br />
            The process of registering, submitting requests and getting added to the list of fee
            extenders is easy and requires a few simple steps.
          </p>
          <button v-b-modal.modal-1 class="btn_white">Apply for extension</button>
        </div>
        <div class="detail col-lg-6 col-md-5 img d-none d-md-block">
          <div class="lazy">
            <img
              v-lazy="require('~/assets/img/hand.jpg')"
              alt="Image describing fees extension process"
            />
            <Spinner1 class="spinner" />
          </div>
        </div>
      </div>
    </div>

    <b-modal
      id="modal-1"
      title="Apply for Extension"
      hide-footer
      @show="resetModal"
      @hidden="resetModal"
      @ok="handleOk"
    >
      <b-form ref="form" @submit="handleOk" @reset="resetModal">
        <b-form-group
          label="Name"
          label-for="name-input"
          invalid-feedback="Name is required"
          :state="nameState"
        >
          <b-form-input
            id="name-input"
            v-model="name"
            :state="nameState"
            placeholder="Your full name"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group
          label="Email"
          label-for="email-input"
          invalid-feedback="Email is required"
          :state="emailState"
        >
          <b-form-input
            id="email-input"
            v-model="email"
            type="email"
            :state="emailState"
            placeholder="your_name@email.com"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group
          label="Phone Number"
          label-for="phone-input"
          invalid-feedback="Phone Number is required"
          :state="phoneState"
        >
          <b-form-input
            id="phone-input"
            v-model="phone"
            type="tel"
            placeholder="+380 00 000 0000"
            :state="phoneState"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group
          label="Faculty"
          label-for="faculty-input"
          invalid-feedback="Faculty is required"
          :state="facultyState"
        >
          <b-form-select
            id="faculty-input"
            v-model="faculty"
            :options="facultyOptions"
            :state="facultyState"
            required
          ></b-form-select>
        </b-form-group>
        <b-form-group
          label="Course"
          label-for="course-input"
          invalid-feedback="Course is required"
          :state="courseState"
        >
          <b-form-select
            id="course-input"
            v-model="course"
            :options="courseOptions"
            :state="courseState"
            required
          ></b-form-select>
        </b-form-group>

        <div class="form-group py-0">
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

        <button type="submit" class="btn_black">Submit</button>
      </b-form>
    </b-modal>
  </section>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      nameState: null,
      email: '',
      emailState: null,
      phone: '',
      phoneState: null,
      status: '',
      submittedNames: [],
      faculty: null,
      facultyState: null,
      facultyOptions: [
        { value: null, text: 'Please select your faculty' },
        { value: 'Medicine', text: 'Medical Faculty' },
        { value: 'Nursing', text: 'Nursing Faculty' },
        { value: 'Pharmacy', text: 'Pharmacy Faculty' },
        { value: 'Dentistry', text: 'Dentistry Faculty' },
      ],
      course: null,
      courseState: null,
      courseOptions: [
        { value: null, text: 'Please select course' },
        { value: '1st', text: 'First course' },
        { value: '2nd', text: 'Second course' },
        { value: '3rd', text: 'Third course' },
        { value: '4th', text: 'Fourth course' },
        { value: '5th', text: 'Fifth course' },
        { value: '6th', text: 'Sixth course' },
      ],
    }
  },
  methods: {
    checkFormValidity() {
      const valid = this.$refs.form.checkValidity()
      this.nameState = valid
      this.emailState = valid
      this.phoneState = valid
      this.facultyState = valid
      this.courseState = valid
      return valid
    },
    resetModal() {
      this.name = ''
      this.nameState = null
      this.email = ''
      this.emailState = null
      this.phone = ''
      this.phoneState = null
      this.faculty = null
      this.facultyState = null
      this.course = null
      this.courseState = null
    },
    handleOk(bvModalEvt) {
      // Prevent modal from closing
      bvModalEvt.preventDefault()
      // Trigger submit handler
      this.handleSubmit()
    },
    handleSubmit() {
      // Exit when the form isn't valid
      if (!this.checkFormValidity()) {
        return
      }
      const formData = new FormData()
      formData.set('name', this.name)
      formData.set('email', this.email)
      formData.set('phone', this.phone)
      formData.set('faculty', this.faculty)
      formData.set('course', this.course)
      let url =
        'https://docs.google.com/forms/u/0/d/e/1FAIpQLSfnZ1OhgP6PwCk8UkXzDCN0YZ8z0eeEmpOeYZ4AFGV7BdM-ig/formResponse?entry.1019439693=course&entry.1045781291=email&entry.1065046570=faculty&entry.1166974658=phone&entry.2005620554=name&submit=SUBMIT'
      for (const [key, value] of formData) {
        url = url.replace(key, value)
      }
      console.log(url)
      const opts = {
        method: 'POST',
        mode: 'no-cors', // apparently Google will only submit a form if "mode" is "no-cors"
        redirect: 'follow',
        referrer: 'no-referrer',
      }
      return fetch(url, opts)
        .then((result) => {
          console.log(result)
          this.$store.dispatch('toast/setToast', {
            title: 'Sent',
            append: true,
            variant: 'success',
            text: 'Thank you for adding your info an executive will contact you if necessary.',
            delay: 5000,
          })
          this.$nextTick(() => {
            this.$bvModal.hide('modal-1')
          })
        })
        .catch((err) => {
          console.log(err)
        })
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/variables.scss';
@import '~/assets/scss/_extends.scss';
$min-width: 15rem;
.extension {
  background-color: #7625bc;
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

  h2 {
    font-size: 36px;
    line-height: 40px;

    color: #fefdfe;
    @media #{$small_mobile} {
      text-align: center;
      font-size: 22px;
      line-height: 24px;
    }
    @media #{$large_mobile} {
      text-align: center;
      font-size: 24px;
      line-height: 22px;
    }
    @media #{$tab_device} {
      font-size: 30px;
      line-height: 32px;
    }
  }
  p {
    font-size: 18px;
    line-height: 150.7%;

    color: #faf6fc;
    @media #{$small_mobile} {
      text-align: center;
      font-size: 16px;
    }
    @media #{$large_mobile} {
      text-align: center;
      font-size: 16px;
    }
    @media #{$tab_device} {
      font-size: 18px;
    }
  }
  .btn_white {
    @extend %custom_btn_outline_white;
    color: #ffffff;
    border-color: #ffffff;
  }

  .detail {
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media #{$small_mobile} {
      align-items: center;
    }
    @media #{$large_mobile} {
      align-items: center;
    }
    &.img {
      align-items: center;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        // height: 350px;
        // width: auto;
        @media #{$small_mobile} {
          margin-top: 20px;
          // height: 200px;
          // width: auto;
        }
        @media #{$large_mobile} {
          margin-top: 25px;
          // height: 250px;
          // width: auto;
        }
        @media #{$tab_device} {
          // margin-top: 50px;
          // height: 300px;
          // width: auto;
        }
      }
    }
  }
}

.btn_black {
  @extend %custom_btn_outline_black;
}

a {
  color: var(--dark-accent);
}
</style>
