<template>
  <Loading :active="isLoading"></Loading>
  <div class="container">
    <div class="mt-5 ps-1">
      <nav aria-label="breadcrumb ">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <router-link class="text-decoration-none text-primary" to="/user/index"
              >首頁</router-link
            >
          </li>
          <li class="breadcrumb-item">
            <router-link to="/user/products" class="text-decoration-none text-primary"
              >產品列表</router-link
            >
          </li>
          <li class="breadcrumb-item active text-secondary" aria-current="page">產品資訊</li>
        </ol>
      </nav>
    </div>
    <div class="row">
      <div class="col-md-6 pb-5 px-3">
        <img
          :src="product.imageUrl"
          class="img-fluid rounded"
          style="height: 400px; width: 600px; object-fit: cover"
        />
      </div>
      <div class="col-md-6 text-start px-3">
        <h2>{{ product.title }}</h2>
        <hr />
        <p class="text-muted">{{ product.category }}</p>
        <p>
          {{ product.description }}
        </p>
        <p class="fs-5 text-primary">{{ product.content }}</p>
        <div class="d-flex justify-content-between mb-3">
          <del class="fs-6">原價: NT${{ product.origin_price }}</del>
          <span class="fs-3">NT${{ product.price }}</span>
        </div>

        <div class="row mt-5">
          <div class="col-6">
            <div class="input-group mb-3">
              <button
                class="btn btn-outline-primary"
                :disabled="qty <= 1"
                type="button"
                id="button-addon1"
                @click.prevent="this.qty--"
              >
                <i class="bi bi-dash"></i>
              </button>
              <input
                type="text"
                class="form-control border-primary text-center bg-light text-primary shadow-none"
                value="1"
                placeholder=""
                v-model="qty"
              />
              <button
                class="btn btn-outline-primary"
                type="button"
                id="button-addon1"
                @click.prevent="this.qty++"
              >
                <i class="bi bi-plus"></i>
              </button>
            </div>
          </div>
          <div class="col-6">
            <a href="#" class="text-primary float-end">
              <i class="bi bi-heart fs-4"></i>
            </a>
          </div>
        </div>

        <button
          class="btn btn-primary w-100 text-light"
          :disabled="cartLoadingItem === product.id"
          @click.prevent.stop="addToCart(product.id, this.qty)"
        >
          <div
            class="spinner-border text-light spinner-border-sm me-1"
            role="status"
            v-if="cartLoadingItem === product.id"
          >
            <span class="visually-hidden">Loading...</span>
          </div>
          加入購物車
        </button>
      </div>
    </div>
    <hr />
    <div class="row py-5">
      <div class="col-md-8">
        <h3 class="mb-4 text-secondary">購買須知</h3>
        <hr class="text-secondary" />
        <UserProductAccordion></UserProductAccordion>
      </div>
    </div>
  </div>

  <UserProductSwiper @change-product="changeProduct"></UserProductSwiper>
</template>

<script>
import UserProductAccordion from '@/components/UserProductAccordion.vue'
import UserProductSwiper from '@/components/UserProductSwiper.vue'
import productService from '@/services/product-service'
import statusStore from '@/stores/statusStore'
import cartStore from '@/stores/cartStore'
import { mapState, mapActions } from 'pinia'

export default {
  data() {
    return {
      product: {},
      isLoading: false,
      qty: 1,
    }
  },
  computed: {
    ...mapState(statusStore, ['cartLoadingItem']),
  },
  components: {
    UserProductAccordion,
    UserProductSwiper,
  },
  methods: {
    ...mapActions(cartStore, ['addToCart']),
    async getProduct() {
      this.isLoading = true
      const id = this.$route.params.productId
      try {
        let res = await productService.getProduct(id)
        this.product = res.data.product
      } catch (e) {
        console.log(e)
      } finally {
        this.isLoading = false
      }
    },
    changeProduct(product) {
      this.product = product
      this.$router.push(`/user/product/${product.id}`)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    },
  },
  created() {
    this.getProduct()
  },
}
</script>
