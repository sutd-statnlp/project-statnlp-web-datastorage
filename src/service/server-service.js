import axios from 'axios'

class ServerService {
  constructor () {
    axios.defaults.timeout = 4000

    this.httpSchema = 'http://'
    this.port = ':8230'

    this.server = {
      name: 'StatNLP 0',
      ip: '172.18.240.110'
    }
    this.loadDefault()
  }
  getEndpoint () {
    return this.httpSchema + this.server.ip + this.port
  }
  getApiEndpoint () {
    return this.getEndpoint() + '/api/'
  }
}

export default new ServerService()
