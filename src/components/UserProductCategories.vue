<template>
  <div class="sticky-top">
    <h4 class="text-primary">商品分類</h4>
    <hr />
    <ul class="list-group">
      <li class="list-group-item p-3">
        <a
          href=""
          class="text-decoration-none d-block"
          @click.prevent="$emit('change-category', 'all')"
        >
          <span class="text-secondary">糖漾全系列</span>
        </a>
      </li>
      <li v-for="category in categories" :key="category" class="list-group-item p-3">
        <a
          href=""
          class="text-decoration-none d-block"
          @click.prevent="$emit('change-category', category)"
        >
          <span class="text-secondary">{{ category }}</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    categories: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style scoped>
.list-group-item:hover {
  background-color: var(--bs-primary);
}

.list-group-item:hover .text-secondary {
  color: var(--bs-light) !important;
}

.sticky-top {
  top: 100px;
  z-index: 1000;
}
</style>
