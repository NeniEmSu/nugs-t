<template>
  <div>
    <TheHero
      :heading="heading"
      :sup-heading="supHeading"
      :desc="desc"
      :first-link="firstLink"
      :second-link="secondLink"
    />
  </div>
</template>

<script>
export default {
  name: 'About',
  data() {
    return {
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
}
</script>

<style lang="scss" scoped></style>
