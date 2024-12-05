<template>
  <Loading :active="isLoading"></Loading>
  <UserBanner
    :title="'購物車'"
    :image-url="'https://images.unsplash.com/photo-1488477081514-c6da99e85213?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'"
  ></UserBanner>
  <div class="container">
    <div class="mt-5 ps-2">
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
          <li class="breadcrumb-item active text-secondary" aria-current="page">購物車</li>
        </ol>
      </nav>
    </div>
    <div class="row my-4">
      <div class="col-md-8">
        <div v-if="cart?.carts?.length === 0">
          <div class="empty-cart-container text-center py-5">
            <div class="empty-cart-icon mb-4 pe-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="120"
                height="120"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                class="text-gray-400"
              >
                <circle cx="9" cy="21" r="1"></circle>
                <circle cx="20" cy="21" r="1"></circle>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
              </svg>
            </div>
            <h4 class="mb-3">您的購物車還是空的</h4>
            <p class="text-muted mb-4">趕快來挑選喜歡的商品吧！</p>
            <router-link to="/user/products" class="btn btn-primary btn-lg px-5">
              開始購物
            </router-link>
          </div>
        </div>
        <div class="table-responsive" v-else>
          <table class="table align-middle">
            <thead class="text-primary">
              <tr>
                <th>商品名稱</th>
                <th>數量</th>
                <th>價格</th>
                <th>操作</th>
              </tr>
            </thead>
            <tbody v-for="item in cart.carts" :key="item.id">
              <tr>
                <td>
                  <img
                    :src="item.product.imageUrl"
                    style="width: 150px; height: 150px; object-fit: cover"
                  />
                  <router-link
                    :to="`/user/product/${item.product.id}`"
                    class="mb-0 fw-bold ms-3 d-inline-block text-secondary text-decoration-none link-primary"
                  >
                    {{ item.product.title }}
                    <span v-if="item.coupon" class="text-success fw-normal d-block"
                      >已套用優惠券</span
                    >
                  </router-link>
                </td>
                <td>
                  <div class="input-group w-50 w-sm-auto" style="min-width: 120px">
                    <button
                      class="btn btn-outline-dark border-0 py-2"
                      :disabled="item.qty <= 1 || cartLoadingItem === item.id"
                      type="button"
                      id="button-addon1"
                      @click.prevent="
                        () => {
                          item.qty--
                          updateCartCount(item.id, item.qty)
                        }
                      "
                    >
                      <i class="bi bi-dash"></i>
                    </button>
                    <input
                      type="text"
                      :disabled="cartLoadingItem === item.id"
                      class="form-control border-0 text-center bg-light text-dark shadow-none"
                      placeholder=""
                      v-model.number="item.qty"
                      @change="updateCartCount(item.id, item.qty)"
                    />
                    <button
                      class="btn btn-outline-dark border-0 py-2"
                      type="button"
                      id="button-addon1"
                      :disabled="cartLoadingItem === item.id"
                      @click.prevent="
                        () => {
                          item.qty++
                          updateCartCount(item.id, item.qty)
                        }
                      "
                    >
                      <i class="bi bi-plus"></i>
                    </button>
                  </div>
                </td>
                <td v-if="item.total === item.final_total">NT${{ item.total }}</td>
                <td v-else>
                  <del>NT${{ item.total }} </del
                  ><span class="text-success d-block">NT${{ item.final_total }}</span>
                </td>
                <td>
                  <button
                    class="btn btn-outline-primary border-0"
                    :disabled="cartLoadingItem === item.id"
                    @click="deleteOneProduct(item.id)"
                  >
                    <div
                      class="spinner-border text-primary spinner-border-sm me-1"
                      role="status"
                      v-if="cartLoadingItem === item.id"
                    >
                      <span class="visually-hidden">Loading...</span>
                    </div>
                    <i class="bi bi-x-lg" v-else></i>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="col-md-4">
        <div class="sticky-top">
          <div class="border p-4 mb-4">
            <h4 class="mb-4 text-primary">訂單詳情</h4>
            <table class="table text-muted">
              <tbody>
                <tr>
                  <td class="border-0 px-0 pt-4 text-start fw-bold">小計</td>

                  <td class="border-0 px-0 pt-4 text-end" v-if="cart.final_total !== cart.total">
                    <del>NT${{ cart.total }}</del>
                  </td>
                  <td class="border-0 px-0 pt-4 text-end" v-else>NT${{ cart.total }}</td>
                </tr>
                <tr>
                  <td class="border-0 px-0 text-start fw-bold">付款方式</td>
                  <td class="border-0 px-0 text-end">Apple Pay</td>
                </tr>
              </tbody>
            </table>
            <div class="d-flex justify-content-between mt-4">
              <template v-if="cart.final_total !== cart.total">
                <p class="mb-0 h4 fw-bold text-success">優惠價</p>
                <p class="mb-0 h4 fw-bold text-success">NT${{ cart.final_total }}</p>
              </template>
              <template v-else>
                <p class="mb-0 h4 fw-bold">總計</p>
                <p class="mb-0 h4 fw-bold">NT${{ cart.final_total }}</p>
              </template>
            </div>
            <router-link
              to="/user/checkout"
              class="btn btn-outline-primary w-100 mt-4"
              :class="{ disabled: cart?.carts?.length === 0 }"
              >前往付款</router-link
            >
          </div>
          <div class="input-group w-100 mb-3">
            <input
              type="text"
              class="form-control rounded-0 border-bottom border-top-0 border-start-0 border-end-0 shadow-none bg-light text-primary"
              placeholder="Coupon Code"
              v-model="couponCode"
            />
            <div class="input-group-append">
              <button
                class="btn btn-outline-none border-bottom rounded-0"
                type="button"
                id="button-addon2"
                @click="handleCoupon"
              >
                <i class="bi bi-send text-primary"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <UserProductSwiper></UserProductSwiper>
  </div>
</template>

<script>
import UserBanner from '@/components/UserBanner.vue'
import statusStore from '@/stores/statusStore'
import cartStore from '@/stores/cartStore'
import { mapState, mapActions } from 'pinia'
import CouponService from '@/services/coupon-service'
import UserProductSwiper from '@/components/UserProductSwiper.vue'

export default {
  data() {
    return {
      couponCode: '',
    }
  },
  methods: {
    ...mapActions(cartStore, ['getCart']),
    ...mapActions(cartStore, ['deleteOneProduct']),
    ...mapActions(cartStore, ['updateCartCount']),
    async handleCoupon() {
      try {
        let res = await CouponService.useCoupon(this.couponCode)
        console.log(res)
        this.$httpMessageState(res, '套用優惠券')
        this.getCart()
      } catch (e) {
        console.log(e)
      }
    },
  },
  computed: {
    ...mapState(statusStore, ['isLoading', 'cartLoadingItem']),
    ...mapState(cartStore, ['cart']),
  },
  components: {
    UserBanner,
    UserProductSwiper,
  },
  created() {
    this.getCart()
  },
}
</script>

<style scoped>
.sticky-top {
  position: sticky;
  top: 70px;
  z-index: 1000;
}
</style>
