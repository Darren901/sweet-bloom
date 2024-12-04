<template>
  <Loading :active="isLoading"></Loading>
  <UserBanner
    :title="'購物車'"
    :image-url="'https://images.unsplash.com/photo-1488477081514-c6da99e85213?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'"
  ></UserBanner>
  <br />
  <div class="container">
    <div class="row my-4">
      <div class="col-md-8">
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
                <p class="mb-0 fw-bold ms-3 d-inline-block text-secondary">
                  {{ item.product.title }}
                  <span v-if="item.coupon" class="text-success fw-normal d-block"
                    >已套用優惠券</span
                  >
                </p>
              </td>
              <td>
                <div class="input-group w-50">
                  <button
                    class="btn btn-outline-dark border-0 py-2"
                    :disabled="item.qty <= 1"
                    type="button"
                    id="button-addon1"
                    @click.prevent="item.qty--"
                  >
                    <i class="bi bi-dash"></i>
                  </button>
                  <input
                    type="text"
                    class="form-control border-0 text-center bg-light text-dark shadow-none"
                    placeholder=""
                    v-model="item.qty"
                  />
                  <button
                    class="btn btn-outline-dark border-0 py-2"
                    type="button"
                    id="button-addon1"
                    @click.prevent="item.qty++"
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
                <button class="btn btn-outline-primary border-0"><i class="bi bi-x-lg"></i></button>
              </td>
            </tr>
          </tbody>
        </table>
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
              <p class="mb-0 h4 fw-bold text-success" v-if="cart.final_total !== cart.total">
                優惠價
              </p>
              <p class="mb-0 h4 fw-bold text-success" v-if="cart.final_total !== cart.total">
                NT${{ cart.final_total }}
              </p>

              <p class="mb-0 h4 fw-bold" v-else>總計</p>
              <p class="mb-0 h4 fw-bold" v-else>NT${{ cart.final_total }}</p>
            </div>
            <a href="#" class="btn btn-outline-primary w-100 mt-4">前往付款</a>
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
  </div>
</template>

<script>
import UserBanner from '@/components/UserBanner.vue'
import statusStore from '@/stores/statusStore'
import cartStore from '@/stores/cartStore'
import { mapState, mapActions } from 'pinia'
import CouponService from '@/services/coupon-service'

export default {
  data() {
    return {
      qty: 1,
      couponCode: '',
    }
  },
  methods: {
    ...mapActions(cartStore, ['getCart']),
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
    ...mapState(statusStore, ['isLoading']),
    ...mapState(cartStore, ['cart']),
  },
  components: {
    UserBanner,
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
}
</style>
