import axios from 'axios'
const API_URL = `${import.meta.env.VITE_API}/api/${import.meta.env.VITE_PATH}`

class OrderService {
  sendOrder(user, message) {
    return axios.post(`${API_URL}/order`, {
      data: {
        user,
        message,
      },
    })
  }

  getOrder(id) {
    return axios.get(`${API_URL}/order/${id}`)
  }
}

export default new OrderService()
