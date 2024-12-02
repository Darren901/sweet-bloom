<template>
  <Loading :active="isLoading"></Loading>
  <div class="container mt-5">
    <form class="row justify-content-center">
      <div class="col-md-6">
        <h1 class="mb-3 text-center">後臺管理</h1>
        <div class="mb-2">
          <label for="inputEmail" class="sr-only">Email address</label>
          <input
            type="email"
            id="inputEmail"
            class="form-control"
            placeholder="Email address"
            required
            autofocus
            v-model="user.username"
          />
        </div>
        <div class="mb-2">
          <label for="inputPassword" class="sr-only">Password</label>
          <input
            type="password"
            id="inputPassword"
            class="form-control"
            placeholder="Password"
            required
            v-model="user.password"
          />
        </div>

        <div class="text-center mt-4">
          <button
            class="btn btn-lg btn-primary btn-block"
            type="submit"
            @click.prevent="handleLogin"
          >
            登入
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        username: '',
        password: '',
      },
      isLoading: false,
    }
  },
  methods: {
    async handleLogin() {
      const api = `${import.meta.env.VITE_API}/admin/signin`
      try {
        this.isLoading = true
        let response = await this.axios.post(api, this.user)
        console.log(response)
        this.$router.push('/dashboard/products')
        this.$httpMessageState(response, '登入')
      } catch (e) {
        console.log(e)
      } finally {
        this.isLoading = false
      }
    },
  },
}
</script>
