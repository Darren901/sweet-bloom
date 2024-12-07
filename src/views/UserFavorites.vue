<template>
  <UserBanner
    :title="'我的最愛'"
    :imageUrl="'https://images.unsplash.com/photo-1519340333755-56e9c1d04579?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'"
  ></UserBanner>

  <div class="container">
    <div class="mt-5 ps-2">
      <nav aria-label="breadcrumb ">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <router-link class="text-decoration-none text-primary" to="/user/index"
              >首頁</router-link
            >
          </li>
          <li class="breadcrumb-item">
            <router-link to="/user/products" class="text-decoration-none text-primary"
              >所有商品</router-link
            >
          </li>
          <li class="breadcrumb-item active text-secondary" aria-current="page">我的最愛</li>
        </ol>
      </nav>
    </div>

    <div class="text-center my-md-5" v-if="favorites.length === 0">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="120"
        height="120"
        viewBox="0 0 24 24"
        fill="#FFB5B5"
        stroke="#FF8080"
        stroke-width="1"
        class="text-gray-400"
      >
        <path
          d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
        ></path>
      </svg>
      <h4 class="my-3">目前還沒有喜歡的商品</h4>
      <p class="text-muted mb-3">來挑選喜歡的甜點吧！</p>
      <router-link to="/user/products" class="btn btn-secondary btn-lg px-5 text-light">
        開始購物
      </router-link>
    </div>
    <div class="row mt-md-5">
      <div v-for="product in favorites" :key="product.id" class="col-lg-3 col-md-4">
        <UserProductCard :product="product"></UserProductCard>
      </div>
    </div>

    <UserProductSwiper @change-product="changeProduct"></UserProductSwiper>
  </div>
</template>

<script>
import UserBanner from '@/components/UserBanner.vue'
import UserProductCard from '@/components/UserProductCard.vue'
import UserProductSwiper from '@/components/UserProductSwiper.vue'
import changeProductMixins from '@/mixins/changeProductMixins'
import favoritesStore from '@/stores/favoritesStore'
import { mapState } from 'pinia'

export default {
  components: {
    UserBanner,
    UserProductSwiper,
    UserProductCard,
  },
  computed: {
    ...mapState(favoritesStore, ['favorites']),
  },
  mixins: [changeProductMixins],
}
</script>
