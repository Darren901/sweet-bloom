<template>
  <Loading :active="isLoading"></Loading>
  <div class="text-center mt-5 mb-5">
    <h2>產品列表</h2>
  </div>
  <div class="text-end">
    <button class="btn btn-primary text-light" type="button" @click="openModal(true)">
      增加一個產品
    </button>
  </div>
  <table class="table mt-4">
    <thead>
      <tr>
        <th width="140">分類</th>
        <th>產品名稱</th>
        <th width="120">原價</th>
        <th width="120">售價</th>
        <th width="100">是否啟用</th>
        <th width="200">編輯</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in products" :key="item.id">
        <td>{{ item.category }}</td>
        <td>{{ item.title }}</td>
        <td class="text-right">{{ $filters.currency(item.origin_price) }}</td>
        <td class="text-right">{{ $filters.currency(item.price) }}</td>
        <td>
          <span :class="item.is_enabled ? 'text-success' : 'text-muted'">{{
            item.is_enabled ? '啟用' : '未啟用'
          }}</span>
        </td>
        <td>
          <div class="btn-group">
            <button class="btn btn-outline-secondary btn-sm" @click="openModal(false, item)">
              編輯
            </button>
            <button class="btn btn-outline-danger btn-sm" @click="openDeleteModal(item)">
              刪除
            </button>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
  <Pagination :pages="pagination" @change-page="getProducts"></Pagination>
  <ProductModal
    ref="productModal"
    :product="tempProduct"
    @update-product="updateProduct"
  ></ProductModal>
  <DeleteModal ref="deleteModal" :item="tempProduct" @delete-product="deleteProduct"></DeleteModal>
</template>

<script>
import ProductModal from '@/components/ProductModal.vue'
import DeleteModal from '@/components/DeleteModal.vue'
import Pagination from '@/components/Pagination.vue'

export default {
  data() {
    return {
      products: [],
      pagination: {},
      tempProduct: {},
      isNew: false,
      isLoading: false,
    }
  },
  components: {
    ProductModal,
    DeleteModal,
    Pagination,
  },
  methods: {
    async getProducts(page = 1) {
      const api = `${import.meta.env.VITE_API}/api/${import.meta.env.VITE_PATH}/admin/products?page=${page}`
      try {
        this.isLoading = true
        let response = await this.axios.get(api)
        if (response.data.success) {
          console.log(response.data)
          this.products = response.data.products
          this.pagination = response.data.pagination
        }
      } catch (e) {
        console.log(e)
      } finally {
        this.isLoading = false
      }
    },
    openModal(isNew, item) {
      if (isNew) {
        this.tempProduct = {}
      } else {
        this.tempProduct = { ...item }
      }
      this.isNew = isNew
      const modalComponent = this.$refs.productModal
      modalComponent.showModal()
    },
    async updateProduct(item) {
      const modalComponent = this.$refs.productModal
      let api = `${import.meta.env.VITE_API}/api/${import.meta.env.VITE_PATH}/admin/product`
      let httpMethod = 'post'
      if (!this.isNew) {
        api = `${import.meta.env.VITE_API}/api/${import.meta.env.VITE_PATH}/admin/product/${item.id}`
        httpMethod = 'put'
      }
      try {
        let res = await this.axios[httpMethod](api, { data: item })
        console.log(res)
        modalComponent.hideModal()
        this.$httpMessageState(res, '更新')
        this.getProducts(this.pagination.current_page)
      } catch (e) {
        console.log(e)
      }
    },
    async deleteProduct(item) {
      const deleteModal = this.$refs.deleteModal
      let api = `${import.meta.env.VITE_API}/api/${import.meta.env.VITE_PATH}/admin/product/${item.id}`
      try {
        let res = await this.axios.delete(api)
        console.log(res)
        deleteModal.hideModal()
        this.$httpMessageState(res, '刪除')
        this.getProducts(this.pagination.current_page)
      } catch (e) {
        console.log(e)
      }
    },
    openDeleteModal(item) {
      this.tempProduct = { ...item }
      const deleteModal = this.$refs.deleteModal
      deleteModal.showModal()
    },
  },
  created() {
    this.getProducts()
  },
}
</script>
