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
})
</script>
