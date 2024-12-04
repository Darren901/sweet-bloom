<template>
  <div class="card mb-4" @click.stop="handleProductClick" data-aos="fade-up">
    <img class="card-img-top" :src="product.imageUrl" :alt="product.title" />
    <div class="card-body px-2">
      <h5 class="mb-0 mt-1 card-title">
        <a href="#" class="text-decoration-none text-dark">{{ product.title }}</a>
      </h5>
      <p class="card-text mb-3 mt-1">
        NT${{ product.price }}
        <span v-if="product.origin_price" class="text-muted">
          <del>NT${{ product.origin_price }}</del>
        </span>
        <a href="#" class="text-primary float-end">
          <i class="bi bi-heart"></i>
        </a>
      </p>
      <button
        class="btn btn-outline-primary w-100"
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
</template>

<script>
import cartStore from '@/stores/cartStore'
import statusStore from '@/stores/statusStore'
import { mapActions, mapState } from 'pinia'

export default {
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  methods: {
    handleProductClick() {
      this.$router.push(`product/${this.product.id}`)
    },
    ...mapActions(cartStore, ['addToCart']),
  },
  computed: {
    ...mapState(statusStore, ['cartLoadingItem']),
  },
}
</script>

<style scoped>
.card-img-top {
  height: 200px;
  object-fit: cover;
}

.card {
  cursor: pointer;
}
</style>
