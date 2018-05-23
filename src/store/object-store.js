
import ServerService from '@/service/server-service'
import axios from 'axios'
import StoreUtil from '@/util/store-util'
import AlertService from '@/service/alert-service'

export default {
  namespaced: true,
  state: {
    objectNames: [],
    instances: []
  },
  getters: {
    getObjectNames (state) {
      return state.objectNames
    },
    getInstances (state) {
      return state.instances
    }
  },
  mutations: {
    addObject (state, payload) {
      let object = payload.object
      let url = ServerService.getObjectEndpoint(object.name)
      axios.post(url, object.json).then(function (response) {
        StoreUtil.addObjectName(state.objectNames, object.name)
        AlertService.success('Add successfully !')
      }).catch(function (error) {
        console.log(error)
      })
    },
    searchObject (state, payload) {
      let url = ServerService.getObjectEndpoint(payload.name)
      axios.get(url)
        .then(function (response) {
          state.instances = response.data.results
          if (state.instances.length > 0) {
            StoreUtil.addObjectName(state.objectNames, payload.name)
          }
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  },
  actions: {
    addObject (context, payload) {
      context.commit('addObject', payload)
    },
    searchObject (context, payload) {
      context.commit('searchObject', payload)
    }
  }
}
