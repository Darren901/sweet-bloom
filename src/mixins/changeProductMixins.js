export default {
  methods: {
    changeProduct(product) {
      this.$router.push(`/user/product/${product.id}`)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    },
  },
}
