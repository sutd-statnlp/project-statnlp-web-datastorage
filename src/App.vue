<template>
  <div id="app">
    <Navbar/>
    <Sidebar/>
    <router-view/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import Footer from '@/components/Footer'
export default {
  components: {
    Navbar,
    Sidebar,
    Footer
  },
  name: 'App'
}
</script>

<style>

</style>
