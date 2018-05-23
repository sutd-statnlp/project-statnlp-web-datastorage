export default {
  danger (message) {
    $.notify(message, {
      type: 'danger',
      placement: {
        align: 'center'
      }
    })
  },
  success (message) {
    $.notify(message, {
      type: 'success',
      placement: {
        align: 'center'
      }
    })
  }
}
