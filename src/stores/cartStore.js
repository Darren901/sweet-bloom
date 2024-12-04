import { defineStore } from 'pinia'
import statusStore from './statusStore'
import CartService from '@/services/cart-service'

const status = statusStore()

export default defineStore('cartStore', {
  state: () => {
    return {
      cart: {},
    }
  },
  actions: {
    async addToCart(id, qty) {
      status.cartLoadingItem = id
      try {
        let res = await CartService.addToCart(id, qty)
        console.log(res)
        status.httpMessageState(res, '加入購物車')
      } catch (e) {
        console.log(e)
      } finally {
        status.cartLoadingItem = ''
      }
    },

    async getCart() {
      status.isLoading = true
      try {
        let res = await CartService.getCart()
        console.log(res.data)
        this.cart = res.data.data
      } catch (e) {
        console.log(e)
      } finally {
        status.isLoading = false
      }
    },
  },
})
