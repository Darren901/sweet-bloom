<template>
  <Loading :active="isLoading"></Loading>

  <UserCouponModal ref="couponModal" class="bounce"></UserCouponModal>

  <div>
    <UserBanner
      :title="'所有商品'"
      :image-url="'https://images.unsplash.com/photo-1514077583608-aedd9ec18c40?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'"
    />
    <div class="container mt-md-5 mt-3 mb-5">
      <div class="row">
        <div class="col-md-3">
          <UserProductCategories :categories="categories" @change-category="changeCategory" />
        </div>
        <div class="col-md-9 mt-md-5 mt-3">
          <div class="row">
            <div v-if="products.length === 0" class="col-12 text-center">
              <h3>此分類暫無商品</h3>
            </div>
            <div v-for="product in products" :key="product.id" class="col-md-4">
              <UserProductCard :product="product" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UserBanner from '@/components/UserBanner.vue'
import UserCouponModal from '@/components/UserCouponModal.vue'
import UserProductCard from '@/components/UserProductCard.vue'
import UserProductCategories from '@/components/UserProductCategories.vue'
import ProductService from '@/services/product-service'

export default {
  components: {
    UserBanner,
    UserProductCategories,
    UserProductCard,
    UserCouponModal,
  },
  data() {
    return {
      products: [],
      originalProducts: [],
      isLoading: false,
    }
  },
  methods: {
    async getProducts() {
      this.isLoading = true
      try {
        let res = await ProductService.getAllProducts()
        this.products = res.data.products
        this.originalProducts = res.data.products
      } catch (e) {
        console.log(e)
      } finally {
        this.isLoading = false
      }
    },
    changeCategory(category) {
      if (category === 'all') {
        this.products = [...this.originalProducts]
      } else {
        this.products = this.originalProducts.filter((product) => product.category === category)
      }
    },
  },
  computed: {
    categories() {
      return [...new Set(this.originalProducts.map((product) => product.category))]
    },
  },
  async created() {
    await this.getProducts()
  },
  mounted() {
    this.$refs.couponModal.showModal()
  },
}
</script>

<style scoped>
.bounce {
  animation: bounce 2s ease-in-out infinite;
}

@keyframes bounce {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(0);
  }
}
</style>
