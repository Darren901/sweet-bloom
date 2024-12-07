<template>
  <Loading :active="isLoading"></Loading>
  <UserBanner
    :title="'訂單詳細'"
    :imageUrl="'https://images.unsplash.com/photo-1519340333755-56e9c1d04579?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'"
  ></UserBanner>
  <div class="container mt-md-5 mt-3 mb-3" v-if="order">
    <div class="row flex-row justify-content-center p-3 g-md-5 g-3">
      <div class="col-md-5">
        <h5 class="text-start text-dark" v-if="!order?.is_paid">訂單已送出</h5>
        <h5 class="text-start text-dark" v-else>訂單已完成</h5>
        <UserCheckTable2 :order="order"></UserCheckTable2>
      </div>
      <div class="col-md-6">
        <h5 class="text-start text-dark">訂單資訊</h5>
        <table class="table border-top">
          <tbody>
            <tr>
              <th>訂購日期</th>
              <td>{{ this.$filters.date(order?.create_at) }}</td>
            </tr>
            <tr>
              <th>訂單編號</th>
              <td class="text-secondary">{{ order?.id }}</td>
            </tr>
            <tr>
              <th>付款狀態</th>
              <td class="text-success" v-if="order?.is_paid">付款完成</td>
              <td class="text-danger" v-else>待付款</td>
            </tr>
          </tbody>
        </table>

        <h5 class="text-start text-dark">訂購人資訊</h5>
        <table class="table border-top">
          <tbody>
            <tr>
              <th>姓名</th>
              <td>{{ order?.user.name }}</td>
            </tr>
            <tr>
              <th>Email</th>
              <td>{{ order?.user.email }}</td>
            </tr>
            <tr>
              <th>地址</th>
              <td>{{ order?.user.address }}</td>
            </tr>
            <tr>
              <th>電話</th>
              <td>{{ order?.user.tel }}</td>
            </tr>
            <tr v-if="order?.message">
              <th>備註</th>
              <td>{{ order?.message }}</td>
            </tr>
          </tbody>
        </table>
        <button
          class="btn btn-outline-primary w-100"
          v-if="!order?.is_paid"
          type="button"
          @click.prevent="payOrder(order?.id)"
          :disabled="cartLoadingItem === order?.id || !order?.user.name"
        >
          <div
            class="spinner-border text-primary spinner-border-sm me-1"
            role="status"
            v-if="cartLoadingItem === order?.id"
          >
            <span class="visually-hidden">Loading...</span>
          </div>
          前往付款
        </button>
        <router-link to="/user/index" class="btn btn-primary w-100 text-light" v-else
          >回到首頁</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
import UserBanner from '@/components/UserBanner.vue'
import UserCheckTable2 from '@/components/UserCheckTable2.vue'
import orderStore from '@/stores/orderStore'
import statusStore from '@/stores/statusStore'
import { mapState, mapActions } from 'pinia'

export default {
  methods: {
    ...mapActions(orderStore, ['getOrder', 'payOrder']),
  },
  computed: {
    ...mapState(statusStore, ['isLoading', 'cartLoadingItem']),
    ...mapState(orderStore, ['order']),
  },
  async created() {
    await this.getOrder(this.$route.params.orderId)
  },
  components: {
    UserBanner,
    UserCheckTable2,
  },
}
</script>

<style scoped>
.table th {
  min-width: 100px;
  width: 25%;
}

.table td {
  width: 75%;
}
</style>
