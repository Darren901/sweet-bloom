<template>
  <div class="bg-wrapper">
    <img
      class="fixed-image"
      src="https://images.unsplash.com/photo-1516919549054-e08258825f80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt="fixed-image"
    />
    <div class="content-wrapper">
      <div class="bg-light">
        <div class="position-relative mb-3" style="height: 85vh">
          <img
            src="/images/cake.png"
            alt="甜點特寫"
            style="height: 100%; width: 100%; object-fit: cover; object-position: right"
            data-aos="fade-down"
            data-aos-duration="1500"
          />
          <div
            class="position-absolute top-50 translate-middle-y p-5 ms-md-5 text-dark bg-light bg-opacity-75 rounded-4"
            style="max-width: 600px; left: 5%"
          >
            <h1
              class="display-5 fw-normal mb-4"
              data-aos="fade-right"
              data-aos-delay="100"
              data-aos-duration="1500"
            >
              用甜點，傳遞幸福
            </h1>
            <p
              class="lead mb-4 text-secondary"
              data-aos="fade-right"
              data-aos-delay="400"
              data-aos-duration="1500"
            >
              每一份甜點都是我們用心製作的成果， 嚴選食材、手工製作，為您獻上最純粹的甜蜜。
            </p>
            <router-link
              to="/user/products"
              class="btn btn-primary btn-lg w-50 text-light"
              data-aos="fade-right"
              data-aos-delay="600"
              data-aos-duration="1500"
            >
              立即選購
            </router-link>
          </div>
        </div>

        <div class="container my-md-5 pt-md-5 pt-4">
          <div class="row">
            <div class="col-md-3 col-6" data-aos="zoom-in" data-aos-duration="500">
              <div class="text-center">
                <i class="bi bi-truck text-primary fs-1"></i>
                <h3 class="h3">甜點宅配</h3>
                <p class="text-secondary">滿千免運，專業保冷配送，新鮮送到府</p>
              </div>
            </div>
            <div class="col-md-3 col-6" data-aos="zoom-in" data-aos-duration="500">
              <div class="text-center">
                <i class="bi bi-cake text-primary fs-1"></i>
                <h3 class="h3">新鮮製作</h3>
                <p class="text-secondary">當日現做限量供應，確保最佳品質</p>
              </div>
            </div>
            <div class="col-md-3 col-6" data-aos="zoom-in" data-aos-duration="500">
              <div class="text-center">
                <i class="bi bi-gift text-primary fs-1"></i>
                <h3 class="h3">精美包裝</h3>
                <p class="text-secondary">精緻禮盒包裝，適合送禮或收藏</p>
              </div>
            </div>
            <div class="col-md-3 col-6" data-aos="zoom-in" data-aos-duration="500">
              <div class="text-center">
                <i class="bi bi-telephone text-primary fs-1"></i>
                <h3 class="h3">預購服務</h3>
                <p class="text-secondary">提供客製化預購服務，為您打造專屬甜點</p>
              </div>
            </div>
          </div>
          <hr class="text-primary" />
        </div>
        <div class="bg-light">
          <div class="container py-5">
            <div class="row">
              <div class="col-md-6">
                <img
                  src="https://images.unsplash.com/photo-1488474339733-16a5dd4ba5e6?q=80&w=2053&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                  class="img-fluid rounded-4 shadow"
                  data-aos="flip-left"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="1000"
                />
              </div>
              <div
                class="col-md-4 m-auto text-center"
                data-aos="fade-left"
                data-aos-duration="1000"
              >
                <h4 class="mt-4">「每一口，都是幸福的滋味」</h4>
                <p class="text-muted">
                  我們專注於手工蛋糕的每一個細節，讓香甜與柔軟完美<span
                    >交融，為你的每一天增添更多美好與甜蜜。</span
                  >
                </p>
              </div>
            </div>
            <div class="row flex-row-reverse justify-content-between mt-4">
              <div class="col-md-6">
                <img
                  src="https://plus.unsplash.com/premium_photo-1671212748162-d7bdb9d4f5ec?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                  class="img-fluid rounded-4 shadow"
                  data-aos="flip-right"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="1000"
                />
              </div>
              <div
                class="col-md-4 m-auto text-center"
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                <h4 class="mt-4">「品味生活，從這裡開始」</h4>
                <p class="text-muted">
                  無論是慶祝時刻還是平凡日常，我們的蛋糕都能成為最甜美<span
                    >的陪伴，用心製作每一份驚喜與感動。</span
                  >
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="empty-div py-5 d-flex align-items-center">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-md-8 text-center text-white">
              <h2 class="mb-4" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="50">
                為生活增添甜蜜
              </h2>
              <p class="lead" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
                在這裡，每一道甜點都是我們對美好生活的追求
              </p>
              <p class="lead" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="150">
                我們用心對待每一位顧客
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-light">
        <div class="container p-md-4 p-3">
          <p class="text-center product-title" data-aos="fade-up">SweetBloom</p>
          <UserProductCaousel></UserProductCaousel>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UserProductCaousel from '@/components/UserProductCaousel.vue'
export default {
  components: {
    UserProductCaousel,
  },
}
</script>

<style scoped>
.product-title {
  font-family: 'Dancing Script', cursive !important;
  font-size: 4rem;
  color: var(--bs-primary);
}

.empty-div {
  background-color: rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(3px);
  min-height: 400px;
}

.bg-wrapper {
  position: relative;
  min-height: 100vh;
  width: 100%;
  overflow: hidden;
}
.fixed-image {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  object-fit: cover;
  z-index: -5;
}

.content-wrapper {
  position: relative;
  z-index: 1;
}
</style>
