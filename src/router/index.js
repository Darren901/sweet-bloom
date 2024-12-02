import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      redirect: '/user/index',
    },
    {
      path: '/login',
      component: () => import('../views/Login.vue'),
    },
    {
      path: '/dashboard',
      component: () => import('../views/DashBoard.vue'),
      children: [
        {
          path: '',
          redirect: '/dashboard/products',
        },
        {
          path: 'products',
          component: () => import('../views/Products.vue'),
        },
        {
          path: 'orders',
          component: () => import('../views/Orders.vue'),
        },
        {
          path: 'coupons',
          component: () => import('../views/Coupons.vue'),
        },
      ],
    },
    {
      path: '/user',
      component: () => import('../views/UserBoard.vue'),
      children: [
        {
          path: 'index',
          component: () => import('../views/UserIndex.vue'),
        },
        {
          path: 'cart',
          component: () => import('../views/UserCart.vue'),
        },
        {
          path: 'products',
          component: () => import('../views/UserProducts.vue'),
        },
        {
          path: 'product/:productId',
          component: () => import('../views/UserProductDetail.vue'),
        },
        {
          path: 'checkout/:orderId',
          component: () => import('../views/UserCheckOut.vue'),
        },
        {
          path: ':pathMatch(.*)*',
          component: () => import('../views/UserNotFound.vue'),
        },
      ],
    },
  ],
})

export default router
