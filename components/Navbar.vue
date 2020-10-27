<template>
  <div>
    <nav
      class="navbar is-fixed-top is-dark"
      role="navigation"
      aria-label="main navigation"
      v-bind:class="{
        'background-color-blue-900': isDarkMode,
        'background-color-teal-900': !isDarkMode,
      }"
    >
      <div class="navbar-brand">
        <a class="navbar-item" href="/">
          <img src="/icon.png" width="28" height="28" />
        </a>
        <a
          role="button"
          class="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
          v-on:click="toggleMobile"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div
        class="navbar-menu"
        v-bind:class="{ 'is-active': isActive }"
        style="background-color: initial"
      >
        <div class="navbar-start">
          <a href="/about" class="navbar-item has-text-light"> About </a>
          <a href="/portfolio" class="navbar-item has-text-light">
            Portfolio
          </a>
          <a v-bind:href="blogUrl" class="navbar-item has-text-light"> Blog </a>
          <a href="/contact" class="navbar-item has-text-light"> Contact </a>
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <div>
              <input
                id="toggleDarkMode"
                type="checkbox"
                class="switch is-rounded is-info"
                v-model="isDarkMode"
                v-on:change="toggleDarkMode"
              />
              <label class="has-text-light" for="toggleDarkMode"
                ><font-awesome-icon :icon="['fas', 'moon']"
              /></label>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      isActive: false,
      isDarkMode: false,
      blogUrl: '#',
    }
  },
  beforeMount(): void {
    this.isDarkMode = this.$store.state.cssvars.isDarkMode
  },
  methods: {
    toggleMobile(): void {
      this.isActive = !this.isActive
    },
    toggleDarkMode(): void {
      this.$store.commit('cssvars/setDarkMode', this.isDarkMode)
      this.setCookie(this.isDarkMode)
    },
    async setCookie(val: Boolean): Promise<void> {
      ;(this as any).$cookies.set('dark-mode', val, {
        path: '/',
        maxAge: 60 * 60 * 24 * 7,
        httpOnly: false,
      })
    },
  },
  created(): void {
    this.blogUrl = process.env.blogUrl || '#'
  },
})
</script>

<style lang="sass" scoped>
@import '~bulma-switch'
</style>
