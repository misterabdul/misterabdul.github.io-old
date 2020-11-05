<template>
  <article>
    <nuxt-content :document="aboutMe" />
  </article>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  async asyncData(context) {
    const aboutMe = await context.app.$content('about-me').fetch()

    return {
      aboutMe,
    }
  },
  head() {
    return {
      title: 'Tentang Abdul Pasaribu',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Informasi sekilas tentang Abdul Rahmad Pasaribu',
        },
        {
          hid: 'robots',
          name: 'robots',
          content: 'index, follow',
        },
      ],
    }
  },
})
</script>
