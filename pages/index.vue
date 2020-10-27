<template>
  <article>
    <nuxt-content v-bind:document="homeTop" />
  </article>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  async asyncData(context) {
    const homeTop = await context.app.$content('home-top').fetch()

    return {
      homeTop,
    }
  },
})
</script>
