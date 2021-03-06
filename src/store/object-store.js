
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
      StoreUtil.addObjectName(state.objectNames, object.name)
      AlertService.success('Add successfully !')
    },
    searchObject (state, payload) {
      state.instances = payload.data
      if (state.instances.length > 0) {
        StoreUtil.addObjectName(state.objectNames, payload.name)
      }
    },
    deleteObject (state, payload) {
      AlertService.success('The instance has been deleted !')
    },
    saveObject (state, payload) {
      AlertService.success('The instance has been saved !')
    },
    getObjects (state, payload) {
      state.objectNames = payload.data
    }
  },
  actions: {
    addObject (context, payload) {
      let object = payload.object
      let url = ServerService.getObjectEndpoint(object.name)
      axios.post(url, object.json).then(function (response) {
        context.commit('addObject', payload)
      }).catch(function (error) {
        AlertService.danger(error.toString())
        console.log(error)
      })
    },
    searchObject (context, payload) {
      let url = ServerService.getObjectEndpoint(payload.name)
      axios.get(url)
        .then(function (response) {
          if (response.data) {
            context.commit('searchObject', {
              data: response.data,
              name: payload.name
            })
          }
        })
        .catch(function (error) {
          AlertService.danger(error.toString())
          console.log(error)
        })
    },
    deleteObject (context, payload) {
      let url = ServerService.getObjectInstanceEndpoint(payload.name, payload.id)
      axios.delete(url).then(function (response) {
        context.commit('deleteObject', payload)
        context.dispatch('searchObject', {
          name: payload.name
        })
      }).catch(function (error) {
        AlertService.danger(error.toString())
        console.log(error)
      })
    },
    saveObject (context, payload) {
      let url = ServerService.getObjectInstanceEndpoint(payload.name, payload.id)
      axios.put(url, payload.object).then(function (response) {
        context.commit('saveObject', payload)
        context.dispatch('searchObject', {
          name: payload.name
        })
      }).catch(function (error) {
        AlertService.danger(error.toString())
        console.log(error)
      })
    },
    getObjects (context, payload) {
      let url = ServerService.getAllObjectsEndpoint()
      axios.get(url)
        .then(function (response) {
          context.commit('getObjects', {
            data: response.data
          })
        })
        .catch(function (error) {
          AlertService.danger(error.toString())
          console.log(error)
        })
    }
  }
}
