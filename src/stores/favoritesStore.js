import { defineStore } from 'pinia'
import Swal from 'sweetalert2'

export default defineStore('favoritesStore', {
  state: () => {
    return {
      favorites: JSON.parse(localStorage.getItem('favorites')) || [],
    }
  },

  actions: {
    toggleFavorite(product) {
      let index = this.favorites.findIndex((item) => item.id === product.id)

      if (index > -1) {
        this.favorites.splice(index, 1)
        Swal.fire({
          toast: true,
          position: 'top-end',
          icon: 'success',
          title: '商品已從最愛清單移除',
          timer: 1500,
          showConfirmButton: false,
          timerProgressBar: true,
        })
      } else {
        this.favorites.push(product)
        Swal.fire({
          toast: true,
          position: 'top-end',
          icon: 'success',
          title: '商品已加入最愛清單',
          timer: 1500,
          showConfirmButton: false,
          timerProgressBar: true,
        })
      }

      localStorage.setItem('favorites', JSON.stringify(this.favorites))
    },
  },
})
