<template>
  <article>
    <nuxt-content :document="contactMe" />
  </article>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  async asyncData(context) {
    const contactMe = await context.app.$content('contact-me').fetch()

    return {
      contactMe,
    }
  },
})
</script>
