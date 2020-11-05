<template>
  <div>
    <h1 class="is-size-1">404 | Tidak Ditemukan</h1>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  head() {
    return {
      title: 'Tidak Ditemukan.',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Laman yang diminta tidak ditemukan.',
        },
        {
          hid: 'robots',
          name: 'robots',
          content: 'noindex, follow',
        },
      ],
    }
  },
})
</script>
