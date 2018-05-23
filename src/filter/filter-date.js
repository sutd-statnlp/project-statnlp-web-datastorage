import moment from 'moment'

export default (input) => {
  return moment(input).format('DD MMMM YYYY h:mm:ss a')
}
