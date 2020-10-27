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
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}

.container {
  margin: 0 auto;
  min-height: 30rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
