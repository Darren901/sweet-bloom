<template>
  <div>{{ order }}</div>
</template>

<script>
import orderService from '@/services/order-service'

export default {
  data() {
    return {
      order: {},
    }
  },
  methods: {
    async getOrder() {
      try {
        let res = await orderService.getOrder(this.$route.params.orderId)
        this.order = res.data.order
        console.log(this.order)
      } catch (e) {
        console.log(e)
      }
    },
  },
  created() {
    this.getOrder()
  },
}
</script>
