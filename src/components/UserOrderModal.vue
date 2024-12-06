<template>
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
    ref="modal"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">查詢訂單</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="mb-3">
            <label for="order" class="form-label">訂單編號</label>
            <input
              type="email"
              class="form-control"
              :class="{ 'is-invalid': isOrderNotFound }"
              id="order"
              placeholder="請輸入訂單編號"
              v-model="orderId"
            />
            <div id="validationServer05Feedback" class="invalid-feedback">查不到此訂單編號</div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary text-light" @click="cancel">取消</button>
          <button
            type="button"
            class="btn btn-primary text-light"
            @click="search"
            :disabled="orderId === ''"
          >
            查詢
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import modalMixins from '@/mixins/modalMixins'
export default {
  props: ['error'],
  data() {
    return {
      orderId: '',
    }
  },
  computed: {
    isOrderNotFound() {
      return this.error
    },
  },
  methods: {
    search() {
      this.$emit('search-order', this.orderId)
      this.orderId = ''
    },
    cancel() {
      this.$emit('update:error', false)
      this.orderId = ''
      this.hideModal()
    },
  },
  mixins: [modalMixins],
}
</script>
