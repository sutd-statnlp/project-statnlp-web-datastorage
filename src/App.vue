<template>
  <router-view/>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  #nprogress .bar { background: white !important; }
  #nprogress .peg { box-shadow: 0 0 10px white, 0 0 5px white !important; }
  #nprogress .spinner-icon { border-top-color: white !important; border-left-color: white !important; }
</style>
