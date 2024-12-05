<template>
  <div class="border p-4 mb-4">
    <div class="d-flex mb-3" v-for="item in cart.carts">
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
            <del class="mb-0 text-muted">NT${{ item.total }}</del>
            <p class="mb-0 text-success">NT${{ item.final_total }}</p>
          </div>
          <p v-else class="mb-0">NT${{ item.total }}</p>
        </div>
      </div>
    </div>

    <table class="table mt-4 border-top border-bottom text-muted">
      <tbody>
        <tr>
          <th class="border-0 px-0 pt-4 font-weight-normal">小計</th>
          <td class="text-end border-0 px-0 pt-4" v-if="cart.total === cart.final_total">
            <span>NT${{ cart.total }}</span>
          </td>
          <td class="text-end border-0 px-0 pt-4" v-else>
            <del>NT${{ cart.total }}</del>
          </td>
        </tr>
        <tr>
          <th class="border-0 px-0 pt-0 pb-4 font-weight-normal">付款方式</th>
          <td class="text-end border-0 px-0 pt-0 pb-4">ApplePay</td>
        </tr>
      </tbody>
    </table>
    <div class="d-flex justify-content-between mt-4">
      <template v-if="cart.total === cart.final_total">
        <p class="mb-0 h4 fw-bold">總計</p>
        <p class="mb-0 h4 fw-bold">NT${{ cart.total }}</p>
      </template>
      <template v-else>
        <p class="mb-0 h4 fw-bold text-success">優惠價</p>
        <p class="mb-0 h4 fw-bold">NT${{ cart.final_total }}</p>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  props: ['cart'],
}
</script>
