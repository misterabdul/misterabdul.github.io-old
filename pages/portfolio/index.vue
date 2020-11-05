<template>
  <article>
    <nuxt-content :document="myPortfolio" />
  </article>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  async asyncData(context) {
    const myPortfolio = await context.app.$content('my-portfolio').fetch()

    return {
      myPortfolio,
    }
  },
  head() {
    return {
      title: 'Portfolio Abdul Pasaribu',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Portfolio dari Abdul Rahmad Pasaribu',
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
