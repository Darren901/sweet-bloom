export default {
  methods: {
    changeProduct(product) {
      this.$router.push(`/user/product/${product.id}`)
    },
  },
}
