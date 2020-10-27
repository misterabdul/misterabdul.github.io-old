<template>
  <footer
    class="footer"
    v-bind:class="{
      'background-color-teal-50': !isDarkMode,
      'background-color-gray-800': isDarkMode,
      'has-text-light': isDarkMode,
    }"
    style="margin-top: 5px; padding: 1.5rem 3rem"
  >
    <div class="content has-text-centered">
      <div class="is-size-3">
        <a v-bind:href="'mailto:' + emailUrl">
          <font-awesome-icon :icon="['fas', 'envelope']" />
        </a>
        <a v-bind:href="githubUrl">
          <font-awesome-icon :icon="['fab', 'github']" />
        </a>
        <a v-bind:href="linkedinUrl">
          <font-awesome-icon :icon="['fab', 'linkedin']" />
        </a>
        <a v-bind:href="twitterUrl">
          <font-awesome-icon :icon="['fab', 'twitter']" />
        </a>
        <a v-bind:href="instagramUrl">
          <font-awesome-icon :icon="['fab', 'instagram']" />
        </a>
        <a v-bind:href="facebookUrl">
          <font-awesome-icon :icon="['fab', 'facebook']" />
        </a>
      </div>
      <div>
        <span>&copy; 2020 Abdul Rahmad Pasaribu</span>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      isDarkMode: false,
      emailUrl: '#',
      githubUrl: '#',
      linkedinUrl: '#',
      twitterUrl: '#',
      instagramUrl: '#',
      facebookUrl: '#',
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
    this.emailUrl = process.env.emailUrl || '#'
    this.githubUrl = process.env.githubUrl || '#'
    this.linkedinUrl = process.env.linkedinUrl || '#'
    this.twitterUrl = process.env.twitterUrl || '#'
    this.instagramUrl = process.env.instagramUrl || '#'
    this.facebookUrl = process.env.facebookUrl || '#'
  },
})
</script>
