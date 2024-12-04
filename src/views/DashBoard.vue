<template>
  <div class="container mt-3 position-relative">
    <Nav></Nav>
    <ToastMessages></ToastMessages>
    <router-view />
  </div>
</template>

<script>
import emitter from '@/methods/emitter'
import Nav from '@/components/Nav.vue'
import ToastMessages from '@/components/ToastMessages.vue'

export default {
  provide() {
    return {
      emitter,
    }
  },
  components: {
    ToastMessages,
    Nav,
  },
  async created() {
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)myToken\s*=\s*([^;]*).*$)|^.*$/, '$1')
    this.axios.defaults.headers.common.Authorization = token
    const api = `${import.meta.env.VITE_API}/api/user/check`
    try {
      let response = await this.axios.post(api)
      console.log(response)
      if (!response.data.success) {
        this.$router.push('/login')
      }
    } catch (e) {
      console.log(e)
    }
  },
}
</script>

<style>
.sidebar {
  position: sticky;
  top: 0;
  z-index: 100;
}
</style>
