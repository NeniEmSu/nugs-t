<template>
  <section class="benefits">
    <div class="container">
      <SubsectionHeading :title="title" :desc="desc" />
      <div class="col-3-layout row">
        <div v-for="(item, index) in 4" :key="index" class="col-12 col-md-6 col-lg-4">
          <div class="col-3-layout-heading">
            <b-icon icon="book-fill" font-scale="1.5"> </b-icon>
            <h3>Educational content</h3>
          </div>

          <p>
            We also advocate to inculcate in them high sense of responsibility,
            patriotism,discipline and for that matter Nationalism with the ultimate aim of
            integrating them.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      title: 'Nugs-T Benefits',
      desc:
        'Every once in a while we all need a helping hand to dig through the hard parts and fish us out, enter Nugs Ternopol.',
    }
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/variables.scss';
@import '~/assets/scss/_extends.scss';
.benefits {
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

  .col-3-layout {
    @media #{$small_mobile} {
      text-align: center;
    }
    @media #{$large_mobile} {
      text-align: center;
    }
    &-heading {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      @media #{$small_mobile} {
        text-align: center;
        justify-content: center;
      }
      @media #{$large_mobile} {
        text-align: center;
        justify-content: center;
      }

      svg {
        fill: var(--dark-accent);
        height: 40px;
        margin-right: 10px;
      }

      h3 {
        font-size: 20px;
        line-height: 24px;
        display: flex;
        align-items: center;
        margin-bottom: 0;

        color: var(--black);
      }
    }
    P {
      font-size: 18px;
      line-height: 120%;
    }
  }
}
</style>
