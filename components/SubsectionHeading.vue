<template>
  <div class="heading col-12 col-md-6 col-lg-4 p-0">
    <h2>{{ title }}</h2>
    <p>
      {{ subTitle }}
    </p>
    <hr />
  </div>
</template>

<script>
export default {
  name: 'SubsectionHeading',
  props: {
    title: {
      type: String,
      default: 'National Union of Ghana Students Ternopol',
    },
    subTitle: {
      type: String,
      default:
        'We are a Democratic, Nonpartisan and Progressive mass movement comprising of Ghanaian students in Ternopol, Ukraine with the primary aim of protecting and safeguarding the rights and interests of Ghanaian students in ternopol.',
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/variables.scss';
@import '~/assets/scss/_extends.scss';
.heading {
  margin-left: 50px;
  @media #{$small_mobile} {
    text-align: center;
    margin-left: 0px;
  }
  @media #{$large_mobile} {
    margin-left: 0px;
    text-align: center;
  }
  @media #{$tab_device} {
    margin-left: 25px;
  }
  @media #{$medium_device} {
    margin-left: 40px;
  }

  h2 {
    font-size: 30px;
    line-height: 37px;

    color: var(--black);
  }
  p {
    font-size: 18px;
    line-height: 21px;

    color: var(--color);
  }
  hr {
    border: 2px solid var(--border-color);
    margin-bottom: 50px;
    @media #{$small_mobile} {
      margin-bottom: 16px;
    }
    @media #{$large_mobile} {
      margin-bottom: 20px;
    }
    @media #{$tab_device} {
      margin-bottom: 25px;
    }
  }
}
</style>
