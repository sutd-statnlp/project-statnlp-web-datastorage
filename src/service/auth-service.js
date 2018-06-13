
import router from './../router'
import axios from 'axios'
import ServerService from './server-service'
import AlertService from './alert-service'

class AuthService {
  constructor () {
    this.login = this.login.bind(this)
    this.setSession = this.setSession.bind(this)
    this.logout = this.logout.bind(this)
    this.isAuthenticated = this.isAuthenticated.bind(this)
  }

  authenticated = this.isAuthenticated()

  login (username, password) {
    let url = ServerService.getLoginEndpoint()
    var bodyFormData = new FormData()
    bodyFormData.set('username', username)
    bodyFormData.set('password', password)
    axios.post(url, bodyFormData).then(response => {
      this.handleAuthentication(response.data)
    }).catch(() => {
      AlertService.danger('Incorrect username or password.')
    })
  }

  // ...
  handleAuthentication (authResult) {
    if (authResult && authResult.token) {
      this.setSession(authResult)
      router.replace('dashboard')
    }
  }

  setSession (authResult) {
    // Set the time that the Access Token will expire at
    let expiresAt = JSON.stringify(
      new Date(authResult.expire) * 1000 + new Date().getTime()
    )
    localStorage.setItem('token', authResult.token)
    localStorage.setItem('expire', expiresAt)
  }

  logout () {
    // Clear Access Token and ID Token from local storage
    localStorage.removeItem('token')
    localStorage.removeItem('expire')
    this.userProfile = null
    // navigate to the home route
    router.replace('login')
  }

  isAuthenticated () {
    // Check whether the current time is past the
    // Access Token's expiry time
    let expiresAt = JSON.parse(localStorage.getItem('expire'))
    let valid = new Date().getTime() < expiresAt
    if (valid) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`
    }
    return valid
  }
}

export default new AuthService()
