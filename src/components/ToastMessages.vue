<template>
  <div class="toast-container position-fixed pe-3 top-0 pt-5 mt-5 end-0" style="z-index: 1060">
    <Toast v-for="(msg, key) in messages" :key="key" :msg="msg"></Toast>
  </div>
</template>

<script>
import Toast from '@/components/Toast.vue'
import statusStore from '@/stores/statusStore'
import { storeToRefs } from 'pinia'

export default {
  components: { Toast },
  data() {
    return {
      messages: [],
    }
  },
  inject: ['emitter'],
  mounted() {
    this.emitter.on('push-message', (message) => {
      const { style = 'success', title, content } = message
      this.messages.push({ style, title, content })
    })
  },
  setup() {
    const status = statusStore()
    const { messages } = storeToRefs(status)

    return {
      messages,
    }
  },
}
</script>
