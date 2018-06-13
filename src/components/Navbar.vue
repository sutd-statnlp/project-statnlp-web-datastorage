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
        <li>
          <a class="app-nav__item" href="#" aria-label="Logout" @click="logout">
            <i class="fa fa-sign-out fa-lg"></i>
          </a>
        </li>
      </ul>

    </header>
  </div>
</template>

<script>
import { loadProgressBar } from 'axios-progress-bar'
import AuthService from '@/service/auth-service'
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
    },
    logout () {
      AuthService.logout()
    }
  }
}
</script>

<style scoped>

</style>
