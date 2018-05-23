import uppercase from './filter-uppercase'
import limit from './filter-limit'
import date from './filter-date'

export default {
  install (Vue) {
    Vue.filter('uppercase', uppercase)
    Vue.filter('limit', limit)
    Vue.filter('date', date)
  }
}
