<template>
  <div>
    <Navbar />
    <div
      :class="{ 'background-color-gray-900': isDarkMode }"
      style="
        position: fixed;
        width: 100%;
        height: 100%;
        left: 0;
        right: 0;
        top: 0;
        z-index: -1000;
      "
    />
    <div
      class="container"
      style="margin-top: 5px"
      :class="{ 'has-text-light': isDarkMode }"
    >
      <Nuxt />
    </div>
    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      isDarkMode: false,
    }
  },
  beforeMount(): void {
    this.isDarkMode = (this as any).$cookies.get('dark-mode')
    this.$store.commit('cssvars/setDarkMode', this.isDarkMode)
  },
  created(): void {
    this.$store.watch(
      (state) => state.cssvars.isDarkMode,
      () => {
        this.isDarkMode = this.$store.state.cssvars.isDarkMode
      }
    )
  },
})
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 40rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
