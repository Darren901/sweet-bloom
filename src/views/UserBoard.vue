<template>
  <UserNavbar></UserNavbar>
  <div class="position-relative">
    <ToastMessages></ToastMessages>
    <router-view />
  </div>
  <UserScrollTop></UserScrollTop>
  <UserFooter></UserFooter>
</template>

<script>
import emitter from '@/methods/emitter'
import ToastMessages from '@/components/ToastMessages.vue'
import UserNavbar from '@/components/UserNavbar.vue'
import UserFooter from '@/components/UserFooter.vue'
import UserScrollTop from '@/components/UserScrollTop.vue'

export default {
  components: {
    ToastMessages,
    UserNavbar,
    UserFooter,
    UserScrollTop,
  },
  provide() {
    return {
      emitter,
    }
  },
  created() {},
}
</script>
