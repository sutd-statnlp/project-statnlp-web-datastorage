<template>
  <div class="m-sidebar">
    <div class="app-sidebar__overlay" data-toggle="sidebar"></div>
    <aside class="app-sidebar">
      <ul class="app-menu">
        <li>
          <router-link class="app-menu__item" to="/" :class="currentPath == '/' ? 'active' : ''">
            <i class="app-menu__icon fa fa-dashboard"></i>
            <span class="app-menu__label">Dashboard</span>
          </router-link>
        </li>
        <li>
          <router-link class="app-menu__item" to="/save" :class="currentPath == '/save' ? 'active' : ''">
            <i class="app-menu__icon fa fa-hdd-o"></i>
            <span class="app-menu__label">Save data</span>
          </router-link>
        </li>
      </ul>
    </aside>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
  data () {
    return {
    }
  },
  mounted () {
    $('[data-toggle="sidebar"]').click(function (event) {
      event.preventDefault()
      $('.app').toggleClass('sidenav-toggled')
    })
  },
  computed: {
    currentPath () {
      return this.$route.path
    }
  }
}
</script>

<style scoped>

</style>
