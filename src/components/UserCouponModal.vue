<template>
  <div class="modal fade" id="couponModal" tabindex="-1" ref="modal">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header bg-secondary">
          <h5 class="modal-title text-light">領取優惠券</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
        </div>
        <div class="modal-body">
          <div class="coupon-item p-3 border rounded mb-3" v-for="coupon in coupons">
            <div class="d-flex justify-content-between align-items-center">
              <div>
                <div class="d-flex align-items-center gap-2 mb-2">
                  <h5 class="mb-0">{{ coupon.title }}</h5>
                  <span class="badge bg-primary">{{ coupon.percent }} off</span>
                </div>
                <p class="mb-1 text-primary">{{ coupon.code }}</p>
                <p class="mb-0 text-muted small">有效期至：{{ coupon.due_date }}</p>
              </div>
              <button
                class="btn btn-outline-primary"
                @click="copyCode(coupon.code)"
                :disabled="isCopying === coupon.code"
              >
                {{ isCopying === coupon.code ? '已複製' : '複製' }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import modalMixins from '@/mixins/modalMixins'

export default {
  mixins: [modalMixins],
  data() {
    return {
      coupons: [
        {
          title: '開幕優惠 25%',
          code: 'SWEET25OFF',
          percent: '25%',
          due_date: '2029/11/29',
        },
        {
          title: '愛你優惠',
          code: 'BLOOM520',
          percent: '15%',
          due_date: '2029/12/1',
        },
        {
          title: '夏日優惠八八折',
          code: 'SUMMER88',
          percent: '12%',
          due_date: '2030/6/1',
        },
      ],
      isCopying: '',
    }
  },
  methods: {
    copyCode(code) {
      navigator.clipboard.writeText(code).then(() => {
        this.isCopying = code
        Swal.fire({
          toast: true,
          position: 'top-end',
          icon: 'success',
          title: '已複製優惠碼：' + code,
          timer: 1500,
          showConfirmButton: false,
          timerProgressBar: true,
        })
        setTimeout(() => {
          this.isCopying = ''
        }, 2000)
      })
    },
  },
}
</script>
