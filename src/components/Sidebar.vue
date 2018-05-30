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
          <router-link class="app-menu__item" to="/new" :class="currentPath == '/new' ? 'active' : ''">
            <i class="app-menu__icon fa fa-plus"></i>
            <span class="app-menu__label">New object</span>
          </router-link>
        </li>
        <li v-for="(item, index) in objectNames" :key="index">
          <router-link class="app-menu__item" :to="'/objects/' + item">
            <i class="app-menu__icon fa fa-circle"></i>
            <span class="app-menu__label">{{item}}</span>
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
  created () {
    this.$store.dispatch('object/getObjects')
  },
  mounted () {
    let treeviewMenu = $('.app-menu')
    $('[data-toggle="sidebar"]').click(function (event) {
      event.preventDefault()
      $('.app').toggleClass('sidenav-toggled')
    })
    $("[data-toggle='treeview']").click(function (event) {
      event.preventDefault()
      if (!$(this).parent().hasClass('is-expanded')) {
        treeviewMenu.find("[data-toggle='treeview']").parent().removeClass('is-expanded')
      }
      $(this).parent().toggleClass('is-expanded')
    })
  },
  computed: {
    currentPath () {
      return this.$route.path
    },
    objectNames () {
      return this.$store.getters['object/getObjectNames']
    }
  }
}
</script>

<style scoped>

</style>
