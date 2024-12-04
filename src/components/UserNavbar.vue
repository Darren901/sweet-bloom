<template>
  <nav
    class="navbar navbar-expand-lg bg-light navbar-light sticky-top"
    :class="{ 'nav-shadow': setShadow, 'navbar-shrink': setShadow }"
  >
    <div class="container">
      <router-link class="navbar-brand text-primary" to="/user/index">Sugar Bloom</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto align-items-center">
          <li class="nav-item">
            <a class="nav-link" href="#">關於我們</a>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/user/products">產品列表</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/">搶先優惠</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/">訂單查詢</router-link>
          </li>

          <li class="nav-item">
            <router-link class="nav-link position-relative" to="/user/cart"
              ><i class="bi bi-cart fs-5"></i
              ><span
                class="position-absolute top-5 start-100 translate-middle badge rounded-pill bg-primary text-light"
              >
                {{ cartCount }}
                <span class="visually-hidden">unread messages</span>
              </span></router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import cartStore from '@/stores/cartStore'
import { mapState, mapActions } from 'pinia'

export default {
  data() {
    return {
      setShadow: false,
    }
  },
  computed: {
    ...mapState(cartStore, ['cart']),
    cartCount() {
      return this.cart?.carts?.length || 0
    },
  },
  methods: {
    navShadow() {
      requestAnimationFrame(() => {
        this.setShadow = window.scrollY > 100
      })
    },
    ...mapActions(cartStore, ['getCart']),
  },
  created() {
    this.getCart()
  },
  mounted() {
    window.addEventListener('scroll', this.navShadow)
    this.navShadow()
  },
  unmounted() {
    window.removeEventListener('scroll', this.navShadow)
  },
}
</script>

<style>
.nav-shadow {
  box-shadow: 0 0 12px var(--bs-primary) !important;
}

.navbar {
  padding: 1rem 0;
  min-height: 80px;
  transition: all 0.3s ease;
}

.navbar-shrink {
  padding: 0.25rem 0;
  min-height: 60px;
}

.navbar-brand {
  font-size: 1.75rem;
  font-weight: 600;
  letter-spacing: 1px;
  transition: all 0.3s ease;
}

.navbar-shrink .navbar-brand {
  font-size: 1.5rem;
}

.nav-link {
  font-weight: 500;
  margin: 0 0.5rem;
  padding: 0.5rem 1rem !important;
  position: relative;
  transition: all 0.3s ease;
}

.nav-link::after {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  background: var(--bs-primary);
  left: 50%;
  bottom: 0;
  transition: all 0.3s ease;
  transform: translateX(-50%);
}

.nav-link:hover::after,
.nav-link.active::after {
  width: 100%;
}

.nav-link:hover,
.nav-link.active {
  color: var(--bs-primary) !important;
}

.navbar-toggler {
  border: none;
  padding: 0.5rem 0.75rem;
}

.navbar-toggler:focus {
  box-shadow: none;
  outline: none;
}

.btn-login {
  background-color: var(--bs-secondary);
  color: var(--bs-primary);
  padding: 0.5rem 1.5rem;
  border-radius: 4px;
  transition: all 0.3s ease;
}

.btn-login:hover,
.btn-login.active {
  background-color: transparent;
  color: var(--bs-secondary);
  border: 1px solid var(--bs-secondary);
}

@media (max-width: 992px) {
  .nav-link {
    margin: 0.5rem 0;
  }

  .nav-link::after {
    left: 0;
    transform: none;
  }

  .nav-link:hover::after {
    width: 100%;
  }

  .btn-reservation {
    margin: 0.5rem 0;
    display: inline-block;
  }
}
</style>
