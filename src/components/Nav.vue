<template>
  <Loading :active="isLoading"></Loading>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <router-link class="navbar-brand text-primary" to="/dashboard/products"
        >Sweet Bloom</router-link
      >
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item me-3">
            <router-link class="nav-link" to="/dashboard/products">產品列表</router-link>
          </li>
          <li class="nav-item me-3">
            <router-link class="nav-link" to="/dashboard/orders">訂單列表</router-link>
          </li>
          <li class="nav-item me-3">
            <router-link class="nav-link" to="/dashboard/coupons">優惠券</router-link>
          </li>
          <li class="nav-item me-3">
            <a class="nav-link" href="#" @click="logout">登出</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isLoading: false,
    }
  },
  methods: {
    async logout() {
      const api = `${import.meta.env.VITE_API}/logout`
      this.isLoading = true
      let response = await this.axios.post(api)
      this.isLoading = false
      if (response.data.success) {
        this.$router.push('/login')
      }
    },
  },
}
</script>

<style>
.navbar-brand {
  font-family: 'Dancing Script', cursive !important;
  font-size: 2rem;
}
</style>
