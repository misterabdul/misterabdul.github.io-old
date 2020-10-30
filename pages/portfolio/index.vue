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
})
</script>
