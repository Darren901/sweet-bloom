<template>
  <div class="border p-4 mb-4" v-if="order?.products">
    <div class="d-flex mb-3" v-for="item in order.products" :key="item.id">
      <img
        :src="item.product.imageUrl"
        alt=""
        class="me-2"
        style="width: 100px; height: 70px; object-fit: cover; overflow: hidden"
      />
      <div class="w-100">
        <div class="d-flex justify-content-between">
          <div>
            <p class="mb-0 fw-bold text-secondary">{{ item.product.title }}</p>
            <p class="mb-0">數量: {{ item.qty }} {{ item.product.unit }}</p>
          </div>

          <div v-if="item.coupon">
            <del class="mb-0 text-muted">NT${{ formatPrice(item.total) }}</del>
            <p class="mb-0 text-success">NT${{ formatPrice(item.final_total) }}</p>
          </div>
          <p v-else class="mb-0">NT${{ formatPrice(item.total) }}</p>
        </div>
      </div>
    </div>

    <table class="table mt-4 border-top border-bottom text-muted">
      <tbody>
        <tr>
          <th class="border-0 px-0">付款方式</th>
          <td class="text-end border-0 px-0">ApplePay</td>
        </tr>
      </tbody>
    </table>
    <div class="d-flex justify-content-between mt-4">
      <p class="mb-0 h4 fw-bold">總計</p>
      <p class="mb-0 h4 fw-bold">NT${{ formatPrice(order?.total) }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    order: {
      type: Object,
      default: () => ({
        products: [],
        total: 0,
      }),
    },
  },
  methods: {
    formatPrice(price) {
      if (!price) return '0'
      return this.$filters.currency(Number(price).toFixed(0))
    },
  },
}
</script>
