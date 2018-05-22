<template>
  <div class="m-navbar">
    <header class="app-header">
      <a class="app-header__logo" href="/">Data Storage</a>
      <a class="app-sidebar__toggle" href="#" data-toggle="sidebar" aria-label="Hide Sidebar"></a>
      <!-- Navbar Right Menu-->
      <ul class="app-nav">
        <li class="app-search">
          <input class="app-search__input" type="search" placeholder="Search">
          <button class="app-search__button">
            <i class="fa fa-search"></i>
          </button>
        </li>
      </ul>
    </header>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data () {
    return {
    }
  }
}
</script>

<style scoped>

</style>
