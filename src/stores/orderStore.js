import { defineStore } from 'pinia'
import statusStore from './statusStore'
import cartStore from './cartStore'
import OrderService from '@/services/order-service'

const status = statusStore()
const cart = cartStore()

export default defineStore('orderStore', {
  state() {
    return {
      order: {
        products: [],
        is_paid: false,
        user: {
          name: '',
          email: '',
          address: '',
          tel: '',
        },
      },
    }
  },

  actions: {
    async sendOrder(user, message) {
      status.isLoading = true
      try {
        let res = await OrderService.sendOrder(user, message)
        await cart.getCart()
        return res
      } catch (e) {
        console.log(e)
      } finally {
        status.isLoading = false
      }
    },
    async getOrder(id) {
      try {
        status.isLoading = true
        let res = await OrderService.getOrder(id)
        this.order = res.data.order
        return res
      } catch (e) {
        console.log(e)
      } finally {
        status.isLoading = false
      }
    },
    async payOrder(id) {
      status.cartLoadingItem = id
      try {
        let res = await OrderService.payOrder(id)
        status.httpMessageState(res, '付款')
        await this.getOrder(id)
      } catch (e) {
        console.log(e)
      } finally {
        status.cartLoadingItem = ''
      }
    },
  },
})
