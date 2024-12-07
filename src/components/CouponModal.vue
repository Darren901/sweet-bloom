<template>
  <div
    class="modal fade"
    id="couponModal"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
    ref="modal"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header bg-primary text-light">
          <h5 class="modal-title" id="exampleModalLabel">
            <span>{{ tempCoupon.id ? '編輯優惠券' : '新增優惠券' }}</span>
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="mb-3">
            <label for="title" class="form-label">名稱</label>
            <input
              type="text"
              class="form-control"
              id="title"
              placeholder="請輸入名稱"
              v-model="tempCoupon.title"
            />
          </div>
          <div class="mb-3">
            <label for="coupon_code" class="form-label">優惠碼</label>
            <input
              type="text"
              class="form-control"
              id="coupon_code"
              placeholder="請輸入優惠碼"
              v-model="tempCoupon.code"
            />
          </div>
          <div class="mb-3">
            <label for="due_date" class="form-label">到期日</label>
            <input type="date" class="form-control" id="due_date" v-model="due_date" />
          </div>
          <div class="mb-3">
            <label for="price" class="form-label">折扣百分比</label>
            <input
              type="number"
              class="form-control"
              id="price"
              placeholder="請輸入折扣百分比"
              v-model="tempCoupon.percent"
            />
          </div>
          <div class="mb-3">
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                id="is_enabled"
                :true-value="1"
                :false-value="0"
                v-model="tempCoupon.is_enabled"
              />
              <label class="form-check-label" for="is_enabled"> 是否啟用 </label>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
            取消
          </button>
          <button
            type="button"
            class="btn btn-primary text-light"
            @click="$emit('update-coupon', tempCoupon)"
          >
            更新優惠券
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import modalMixins from '@/mixins/modalMixins'
export default {
  props: ['coupon'],
  data() {
    return {
      tempCoupon: {},
      due_date: '',
    }
  },
  watch: {
    due_date() {
      this.tempCoupon.due_date = Math.floor(new Date(this.due_date) / 1000)
    },
    coupon() {
      this.tempCoupon = this.coupon
      const dateAndTime = (new Date(this.tempCoupon.due_date * 1000).toISOString().split('T')[
        this.due_date
      ] = dateAndTime)
    },
  },
  mixins: [modalMixins],
}
</script>
