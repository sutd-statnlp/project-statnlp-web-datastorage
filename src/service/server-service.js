import axios from 'axios'

class ServerService {
  constructor () {
    axios.defaults.timeout = 4000

    this.httpSchema = 'http://'
    this.port = ':8230'
    this.ip = '127.0.0.1'
  }
  getEndpoint () {
    return this.httpSchema + this.ip + this.port
  }
  getApiEndpoint () {
    return `${this.getEndpoint()}/api`
  }
  getObjectEndpoint (objectName) {
    return `${this.getEndpoint()}/api/objects/${objectName}`
  }
  getObjectInstanceEndpoint (objectName, instanceId) {
    return `${this.getEndpoint()}/api/objects/${objectName}/${instanceId}`
  }
  getAllObjectsEndpoint () {
    return `${this.getEndpoint()}/api/objects`
  }
}

export default new ServerService()
