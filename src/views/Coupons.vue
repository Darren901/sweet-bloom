<template>
  <div>
    <Loading :active="isLoading"></Loading>
    <div class="text-center mt-5 mb-5">
      <h2>優惠券</h2>
    </div>
    <div class="text-end mt-4">
      <button class="btn btn-primary text-light" @click="openModal(true)">建立新的優惠券</button>
    </div>
    <div class="table-responsive">
      <table class="table mt-4">
        <thead>
          <tr>
            <th>名稱</th>
            <th>優惠碼</th>
            <th>折扣百分比</th>
            <th>到期日</th>
            <th>是否啟用</th>
            <th>編輯</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, key) in coupons" :key="'coupon' + key">
            <td>{{ item.title }}</td>
            <td class="text-info">{{ item.code }}</td>
            <td>{{ item.percent }}%</td>
            <td>{{ $filters.date(item.due_date) }}</td>
            <td>
              <span class="text-success" v-if="item.is_enabled">啟用</span>
              <span class="text-muted" v-else>未起用</span>
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
    </div>
    <CouponModal ref="couponMoal" @update-coupon="updateCoupon" :coupon="tempCoupon"></CouponModal>
    <DeleteModal ref="deleteModal" :item="tempCoupon" @delete-product="deleteCoupon"></DeleteModal>
    <Pagination :pages="pagination" @change-page="getCoupons"></Pagination>
  </div>
</template>

<script>
import CouponModal from '@/components/CouponModal.vue'
import DeleteModal from '@/components/DeleteModal.vue'
import Pagination from '@/components/Pagination.vue'

export default {
  data() {
    return {
      isLoading: false,
      coupons: [],
      pagination: {},
      isNew: false,
      tempCoupon: {},
    }
  },
  methods: {
    async deleteCoupon(coupon) {
      const api = `${import.meta.env.VITE_API}/api/${import.meta.env.VITE_PATH}/admin/coupon/${coupon.id}`
      this.isLoading = true
      try {
        const res = await this.axios.delete(api)
        this.$httpMessageState(res, '刪除優惠券')
        this.getCoupons()
      } catch (e) {
        console.log(e)
      } finally {
        this.isLoading = false
        this.$refs.deleteModal.hideModal()
      }
    },
    openDeleteModal(item) {
      this.tempCoupon = { ...item }
      this.$refs.deleteModal.showModal()
    },
    openModal(isNew, item) {
      this.isNew = isNew
      if (this.isNew) {
        this.tempCoupon = {
          is_enabled: 1,
          due_date: new Date().getTime() / 1000,
        }
      } else {
        this.tempCoupon = { ...item }
      }
      this.$refs.couponMoal.showModal()
    },
    async getCoupons(page = 1) {
      const api = `${import.meta.env.VITE_API}/api/${import.meta.env.VITE_PATH}/admin/coupons?page=${page}`
      this.isLoading = true
      try {
        let res = await this.axios.get(api)
        this.coupons = res.data.coupons
        this.pagination = res.data.pagination
      } catch (e) {
        console.log(e)
      } finally {
        this.isLoading = false
      }
    },
    async updateCoupon(coupon) {
      const modalComponent = this.$refs.couponMoal
      let api = `${import.meta.env.VITE_API}/api/${import.meta.env.VITE_PATH}/admin/coupon`
      let httpMethod = `post`
      if (!this.isNew) {
        api = `${import.meta.env.VITE_API}/api/${import.meta.env.VITE_PATH}/admin/coupon/${coupon.id}`
        httpMethod = `put`
      }
      this.isLoading = true
      try {
        let res = await this.axios[httpMethod](api, { data: coupon })
        this.$httpMessageState(res, '更新優惠券')
        this.getCoupons()
      } catch (e) {
        console.log(e)
      } finally {
        this.isLoading = false
        modalComponent.hideModal()
      }
    },
  },
  components: {
    CouponModal,
    DeleteModal,
    Pagination,
  },
  created() {
    this.getCoupons()
  },
}
</script>
