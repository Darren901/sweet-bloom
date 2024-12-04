import axios from 'axios'
const API_URL = `${import.meta.env.VITE_API}/api/${import.meta.env.VITE_PATH}`

class CouponService {
  useCoupon(code) {
    return axios.post(`${API_URL}/coupon`, {
      data: {
        code,
      },
    })
  }
}

export default new CouponService()
