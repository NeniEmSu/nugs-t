<template>
  <div v-if="loading" class="overlay">
    <img src="~/assets/svg/loading.svg" alt="Loading..." />
    <br />
    <h2>Just a sec...</h2>
  </div>
</template>

<script>
export default {
  props: {
    loading: {
      default: false,
      type: Boolean,
      required: true,
    },
  },
}
</script>

<style scoped>
.overlay {
  z-index: 2;
  position: absolute;
  background-color: rgba(255, 255, 255, 0.8);
  color: black;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
}
</style>
