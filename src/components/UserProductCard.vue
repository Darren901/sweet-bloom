<template>
  <div class="card position-relative mb-4">
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
      <button class="btn btn-outline-primary w-100">加入購物車</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style scoped>
.card-img-top {
  height: 200px;
  object-fit: cover;
}
</style>
