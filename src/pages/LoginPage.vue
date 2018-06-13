<template>
  <div class="">
    <section class="material-half-bg">
      <div class="cover"></div>
    </section>
    <section class="login-content">
      <div>
        <h1 class="text-white">StatNLP Storage</h1>
        <p></p>
      </div>
      <div class="login-box">
        <form class="login-form" @submit.prevent="submitLogin">
          <h3 class="login-head"><i class="fa fa-lg fa-fw fa-user"></i>SIGN IN</h3>
          <div class="form-group">
            <label class="control-label">USERNAME</label>
            <input v-model="username" class="form-control" type="text" placeholder="Username" autofocus required>
          </div>
          <div class="form-group">
            <label class="control-label">PASSWORD</label>
            <input v-model="password" class="form-control" type="password" placeholder="Password" required>
          </div>
          <div class="form-group btn-container">
            <button class="btn btn-primary btn-block"><i class="fa fa-sign-in fa-lg fa-fw"></i>SIGN IN</button>
          </div>
        </form>
      </div>
    </section>
  </div>
</template>

<script>
import AuthService from '@/service/auth-service'
export default {
  name: 'LoginPage',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    submitLogin () {
      AuthService.login(this.username, this.password)
    }
  }
}
</script>

<style scoped>

</style>
