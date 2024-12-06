<template>
  <Loading :active="isLoading"></Loading>
  <UserBanner
    :title="'確認訂單'"
    :imageUrl="'https://images.unsplash.com/photo-1728952387212-850473e6a0c8?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'"
  ></UserBanner>
  <div class="container mt-md-5 mt-3 mb-3">
    <div class="row flex-row justify-content-center p-3 g-md-5 g-3">
      <div class="col-md-5">
        <h5 class="text-start text-dark">確認訂單內容</h5>
        <UserCheckTable :cart="this.cart"></UserCheckTable>
      </div>

      <div class="col-md-6">
        <div class="sticky-top">
          <h5 class="text-start text-dark">訂購人資訊</h5>
          <Form class="p-3 border" v-slot="{ errors }" @submit="handleSubmitOrder">
            <div class="mb-0">
              <label for="ContactMail" class="text-muted mb-0">Email</label>
              <Field
                type="email"
                name="email"
                class="form-control bg-light"
                id="ContactMail"
                placeholder="請輸入信箱"
                :class="{ 'is-invalid': errors['email'] }"
                rules="email|required"
                v-model="user.email"
              ></Field>
              <ErrorMessage name="email" class="invalid-feedback"></ErrorMessage>
            </div>
            <div class="mb-2">
              <label for="ContactName" class="text-muted mb-0">姓名</label>
              <Field
                type="text"
                class="form-control bg-light"
                id="ContactName"
                placeholder="請輸入姓名"
                name="姓名"
                rules="required"
                :class="{ 'is-invalid': errors['姓名'] }"
                v-model="user.name"
              ></Field>
              <ErrorMessage name="姓名" class="invalid-feedback"></ErrorMessage>
            </div>
            <div class="mb-2">
              <label for="ContactPhone" class="text-muted mb-0">電話</label>
              <Field
                type="text"
                class="form-control bg-light"
                id="ContactPhone"
                name="電話"
                :class="{ 'is-invalid': errors['電話'] }"
                :rules="{ required: true, regex: /^09[0-9]{8}$/ }"
                placeholder="請輸入電話"
                v-model="user.tel"
              ></Field>
              <ErrorMessage name="電話" class="invalid-feedback"></ErrorMessage>
            </div>
            <div class="mb-2">
              <label for="ContactAddress" class="text-muted mb-0">地址</label>
              <Field
                type="text"
                class="form-control bg-light"
                name="地址"
                id="ContactAddress"
                placeholder="請輸入地址"
                rules="required"
                :class="{ 'is-invalid': errors['地址'] }"
                v-model="user.address"
              ></Field>
              <ErrorMessage name="地址" class="invalid-feedback"></ErrorMessage>
            </div>
            <div class="mb-2">
              <label for="ContactMessage" class="text-muted mb-0">備註</label>
              <textarea
                class="form-control bg-light shadow-primary"
                rows="3"
                id="ContactMessage"
                placeholder="請填寫想要備註的內容"
                v-model="message"
              ></textarea>
            </div>
            <div
              class="d-flex flex-md-row mt-4 justify-content-between align-items-md-center w-100"
            >
              <router-link
                to="/user/cart"
                class="text-primary mt-md-0 mt-3 text-decoration-none link-secondary"
                ><i class="bi bi-chevron-left"></i> 回到購物車</router-link
              >
              <button
                type="submit"
                class="btn btn-primary px-4 py-2"
                :class="{ disabled: cart?.carts?.length === 0 }"
              >
                送出訂單
              </button>
            </div>
          </Form>
        </div>
      </div>
    </div>
    <UserProductSwiper @change-product="changeProduct"></UserProductSwiper>
  </div>
</template>

<script>
import UserBanner from '@/components/UserBanner.vue'
import statusStore from '@/stores/statusStore'
import cartStore from '@/stores/cartStore'
import { mapState, mapActions } from 'pinia'
import orderService from '@/services/order-service'
import UserCheckTable from '@/components/UserCheckTable.vue'
import UserProductSwiper from '@/components/UserProductSwiper.vue'
import changeProductMixins from '@/mixins/changeProductMixins'

export default {
  data() {
    return {
      user: {},
      message: '',
    }
  },
  mixins: [changeProductMixins],
  methods: {
    ...mapActions(cartStore, ['getCart']),
    async handleSubmitOrder(e) {
      e.preventDefault()
      try {
        let res = await orderService.sendOrder(this.user, this.message)
        console.log(res.data.orderId)
        this.user = {}
        this.message = ''
        this.$router.push(`/user/checkout/${res.data.orderId}`)
      } catch (e) {
        console.log(e)
      }
    },
  },
  computed: {
    ...mapState(cartStore, ['cart']),
    ...mapState(statusStore, ['isLoading']),
  },
  components: {
    UserBanner,
    UserCheckTable,
    UserProductSwiper,
  },
  created() {
    this.getCart()
  },
}
</script>

<style scoped>
.form-control:focus {
  border-color: var(--bs-primary);
  box-shadow: 0 0 0 0.25rem rgba(var(--bs-primary-rgb), 0.25);
}

textarea.form-control:focus {
  border-color: var(--bs-primary);
  box-shadow: 0 0 0 0.25rem rgba(var(--bs-primary-rgb), 0.25);
}

.sticky-top {
  position: sticky;
  z-index: 1000;
  top: 70px;
}
</style>
