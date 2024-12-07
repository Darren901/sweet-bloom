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
        status.httpMessageState(res, '加入購物車')
        this.getCart()
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
        this.cart = res.data.data
      } catch (e) {
        console.log(e)
      } finally {
        status.isLoading = false
      }
    },

    async deleteOneProduct(id) {
      status.cartLoadingItem = id
      try {
        let res = await CartService.deleteOneProductFromCart(id)
        status.httpMessageState(res, '刪除')
        this.getCart()
      } catch (e) {
        console.log(e)
      } finally {
        status.cartLoadingItem = ''
      }
    },

    async updateCartCount(id, qty) {
      status.cartLoadingItem = id
      try {
        let res = await CartService.updateCartCount(id, qty)
        status.httpMessageState(res, '更新')
        this.getCart()
      } catch (e) {
        console.log(e)
      } finally {
        status.cartLoadingItem = ''
      }
    },
  },
})
