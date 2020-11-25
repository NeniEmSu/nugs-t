<template>
  <div>
    <TheHero :heading="heading" :sup-title="supTitle" :sub-title="subTitle" />
  </div>
</template>

<script>
export default {
  name: 'About',
  data() {
    return {
      heading: 'About Us',
      supTitle: 'Executives 2020-2021',
      subTitle:
        'We are a Democratic, nonpartisan and progressive mass movement comprising of ghanaian students in Ternopol, ukraine with the primary aim of protecting and safeguarding the rights and interests of ghanaian students in ternopol.',
    }
  },
}
</script>

<style lang="scss" scoped></style>
