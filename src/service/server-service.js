import axios from 'axios'

class ServerService {
  constructor () {
    axios.defaults.timeout = 4000
    axios.defaults.headers.common['X-Parse-Application-Id'] = 'APPLICATION_ID'
    axios.defaults.headers.common['X-Parse-REST-API-Key'] = 'REST_API_KEY'

    this.httpSchema = 'http://'
    this.port = ':8000'

    this.server = {
      name: 'StatNLP 0',
      ip: '127.0.0.1'
    }
  }
  getEndpoint () {
    return this.httpSchema + this.server.ip + this.port
  }
  getApiEndpoint () {
    return this.getEndpoint() + '/parse'
  }
  getObjectEndpoint (objectName) {
    return this.getEndpoint() + '/parse/classes/' + objectName
  }
}

export default new ServerService()
