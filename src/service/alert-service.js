import swal from 'sweetalert'
export default {
  danger (message, title) {
    let swalTitle = !title ? 'ERROR !' : title
    swal({
      title: swalTitle,
      text: message,
      icon: 'error'
    })
  },
  success (message, title) {
    let swalTitle = !title ? 'SUCCESS !' : title
    swal({
      title: swalTitle,
      text: message,
      icon: 'success'
    })
  },
  confirmDanger (message, title, buttons) {
    return swal({
      title: title,
      text: message,
      dangerMode: true,
      buttons: buttons
    })
  }
}
