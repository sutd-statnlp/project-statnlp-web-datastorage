<template>
  <div>
    <Navbar/>
    <Sidebar/>
    <main class="app-content">
      <router-view/>
    </main>
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
  name: 'MainLayout',
  data () {
    return {
    }
  }
}
</script>

<style scoped>

</style>
