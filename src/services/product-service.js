import axios from 'axios'
const API_URL = `${import.meta.env.VITE_API}/api/${import.meta.env.VITE_PATH}`

class ProductService {
  getProducts(page = 1) {
    return axios.get(`${API_URL}/products?page=${page}`)
  }
  getAllProducts() {
    return axios.get(`${API_URL}/products/all`)
  }
}

export default new ProductService()
