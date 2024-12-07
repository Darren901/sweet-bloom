<template>
  <div class="container">
    <div class="my-5">
      <h3>您可能會喜歡</h3>
      <Swiper
        :modules="modules"
        :slides-per-view="3"
        :space-between="30"
        :navigation="true"
        :loop="true"
        :autoplay="{
          delay: 3000,
          disableOnInteraction: false,
        }"
        :breakpoints="{
          '0': {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          '768': {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          '1200': {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }"
        class="mt-4 mb-5"
      >
        <SwiperSlide v-for="(product, index) in products" :key="index">
          <div class="card border-0 mb-4" @click.stop="$emit('change-product', product)">
            <img :src="product.imageUrl" class="card-img-top rounded-0" />
            <div class="row pe-2">
              <div class="col-md-6">
                <div class="card-body pt-0">
                  <h4 class="mb-0 mt-3">
                    <span href="#" style="text-wrap: nowrap; text-overflow: ellipsis">{{
                      product.title
                    }}</span>
                  </h4>
                  <p class="card-text mb-0">
                    NT${{ this.$filters.currency(product.price) }}
                    <span class="text-muted">
                      <del>NT${{ this.$filters.currency(product.origin_price) }}</del>
                    </span>
                  </p>
                </div>
              </div>
              <div class="col-md-6">
                <button
                  class="btn btn-outline-primary mt-4 w-100"
                  @click.prevent.stop="addToCart(product.id)"
                  :disabled="cartLoadingItem === product.id"
                >
                  <div
                    class="spinner-border text-primary spinner-border-sm me-1"
                    role="status"
                    v-if="cartLoadingItem === product.id"
                  >
                    <span class="visually-hidden">Loading...</span>
                  </div>
                  加入購物車
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import productService from '@/services/product-service'
import cartStore from '@/stores/cartStore'
import statusStore from '@/stores/statusStore'
import { mapActions, mapState } from 'pinia'

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      modules: [Navigation, Autoplay],
      products: [],
    }
  },
  computed: {
    ...mapState(statusStore, ['cartLoadingItem']),
  },
  methods: {
    async getProducts() {
      this.isLoading = true
      try {
        let res = await productService.getAllProducts()
        this.products = res.data.products
      } catch (e) {
        console.log(e)
      } finally {
        this.isLoading = false
      }
    },
    ...mapActions(cartStore, ['addToCart']),
  },
  created() {
    this.getProducts()
  },
}
</script>

<style scoped>
.card {
  cursor: pointer;
}

a {
  text-decoration: none;
  color: inherit;
}

:deep(.swiper-button-next),
:deep(.swiper-button-prev) {
  color: var(--bs-primary);
}

.card-img-top {
  height: 300px;
  object-fit: cover;
}
</style>
