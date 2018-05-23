<template>
  <div class="m-navbar">
    <header class="app-header">
      <a class="app-header__logo" href="/">Data Storage</a>
      <a class="app-sidebar__toggle" href="#" data-toggle="sidebar" aria-label="Hide Sidebar"></a>
      <!-- Navbar Right Menu-->
      <ul class="app-nav">
        <li class="app-search">
          <form v-on:submit.prevent="submitSearch">
            <input v-model="searchText" class="app-search__input" type="search" minlength="6" placeholder="Search Object" required>
            <button class="app-search__button" type="submit">
              <i class="fa fa-search"></i>
            </button>
          </form>
        </li>
      </ul>
    </header>
  </div>
</template>

<script>
import { loadProgressBar } from 'axios-progress-bar'
export default {
  name: 'Navbar',
  data () {
    return {
      searchText: ''
    }
  },
  created () {
    loadProgressBar({
      showSpinner: false,
      easing: 'ease',
      speed: 500
    })
  },
  methods: {
    submitSearch () {
      let name = this.searchText.trim()
      this.$router.push(`/objects/${name}`)
    }
  }
}
</script>

<style scoped>

</style>
