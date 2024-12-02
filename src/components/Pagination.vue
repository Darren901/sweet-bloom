<template>
  <nav aria-label="Page navigation example">
    <ul class="pagination justify-content-center">
      <li class="page-item" :class="{ disabled: !pages.has_pre }">
        <a
          class="page-link text-dark"
          href="#"
          aria-label="Previous"
          @click.prevent="$emit('change-page', pages.current_page - 1)"
        >
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>
      <li
        class="page-item"
        v-for="(page, key) in pages.total_pages"
        :key="key"
        :class="{ active: page === pages.current_page }"
      >
        <a class="page-link text-dark" href="#" @click.prevent="$emit('change-page', page)">{{
          page
        }}</a>
      </li>
      <li class="page-item" :class="{ disabled: !pages.has_next }">
        <a
          class="page-link text-dark"
          href="#"
          aria-label="Next"
          @click.prevent="$emit('change-page', pages.current_page + 1)"
        >
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: ['pages'],
}
</script>

<style>
.page-item.active .page-link {
  background-color: #e57373;
  border-color: #e57373;
  color: white !important;
}
</style>
