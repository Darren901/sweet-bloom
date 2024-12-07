<template>
  <div class="scroll-to-top">
    <button
      type="button"
      class="btn btn-secondary text-light px-4 py-3 rounded-3"
      @click="scrollToTop"
      v-show="showButton"
    >
      <i class="bi bi-arrow-up"></i>
    </button>
  </div>
</template>

<script>
export default {
  name: 'ScrollToTop',
  data() {
    return {
      showButton: false,
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  unmounted() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      this.showButton = window.scrollY > 500
    },
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    },
  },
}
</script>

<style>
.scroll-to-top {
  position: fixed;
  right: 1rem;
  bottom: 1rem;
  z-index: 1000;
  animation: float 1s ease-in-out infinite;
}

@keyframes float {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0px);
  }
}
</style>
