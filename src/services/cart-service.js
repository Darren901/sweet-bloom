import axios from 'axios'
const API_URL = `${import.meta.env.VITE_API}/api/${import.meta.env.VITE_PATH}`

class CartService {
  addToCart(id, qty = 1) {
    return axios.post(`${API_URL}/cart`, {
      data: {
        product_id: id,
        qty,
      },
    })
  }
  getCart() {
    return axios.get(`${API_URL}/cart`)
  }
  deleteOneProductFromCart(id) {
    return axios.delete(`${API_URL}/cart/${id}`)
  }

  updateCartCount(id, qty) {
    return axios.put(`${API_URL}/cart/${id}`, {
      data: {
        product_id: id,
        qty: +qty,
      },
    })
  }
}

export default new CartService()
