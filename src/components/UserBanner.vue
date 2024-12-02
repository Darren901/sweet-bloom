<template>
  <div
    class="d-flex justify-content-center align-items-center position-relative"
    style="min-height: 400px"
  >
    <div class="position-absolute title-img" :style="backgroundStyle"></div>
    <div style="padding: 5rem; background-color: rgba(255, 255, 255, 0.5); border-radius: 20px">
      <h2 class="fw-bold text-secondary">{{ title }}</h2>
    </div>
  </div>
</template>

<script>
export default {
  props: ['title', 'imageUrl'],
  computed: {
    backgroundStyle() {
      return {
        backgroundImage: `url(${this.imageUrl})`,
      }
    },
  },
}
</script>

<style scoped>
.title-img {
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  z-index: -500;
}
</style>
