<template>
  <swiper
    :modules="modules"
    :slidesPerView="4"
    :spaceBetween="20"
    :navigation="true"
    :autoplay="{
      delay: 2500,
      disableOnInteraction: false,
    }"
    :breakpoints="{
      '0': {
        slidesPerView: 1,
        spaceBetween: 5,
      },
      '768': {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      '1200': {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    }"
  >
    <swiper-slide v-for="product in products" :key="product.id">
      <UserProductCard :product="product"></UserProductCard>
    </swiper-slide>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import UserProductCard from './UserProductCard.vue'
import ProductService from '@/services/product-service'

export default {
  data() {
    return {
      modules: [Navigation, Autoplay],
      products: [],
    }
  },
  methods: {
    async getProducts() {
      this.isLoading = true
      try {
        let res = await ProductService.getAllProducts()
        this.products = res.data.products
      } catch (e) {
        console.log(e)
      } finally {
        this.isLoading = false
      }
    },
  },
  components: {
    Swiper,
    SwiperSlide,
    UserProductCard,
  },
  created() {
    this.getProducts()
  },
}
</script>

<style scoped>
.swiper {
  perspective: 1000px;
  padding: 50px;
}

.swiper-slide {
  transform-style: preserve-3d;
  width: auto;
  height: auto;
}

.swiper-slide-active {
  z-index: 1;
}

.swiper-slide-prev,
.swiper-slide-next {
  opacity: 0.7;
  transform: scale(0.9);
}

:deep(.swiper-button-next),
:deep(.swiper-button-prev) {
  color: var(--bs-primary);
}
</style>
