<template>
  <div class="m-object">
    <div class="app-title">
        <div>
          <h1>Instances of {{$route.params.name}}</h1>
        </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <div class="tile">
          <div class="tile-body">
            <table class="table table-hover table-bordered" id="objTable">
              <thead>
                <tr>
                  <th>#</th>
                  <th>ID</th>
                  <th>Created At</th>
                  <th>Updated At</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in instances" :key="index">
                  <td>{{index + 1}}</td>
                  <td>{{item.objectId}}</td>
                  <td>{{item.createdAt}}</td>
                  <td>{{item.updatedAt}}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ObjectPage',
  data () {
    return {
      dataTable: null
    }
  },
  created () {
    this.loadInstances(this.$route.params.name)
  },
  methods: {
    loadInstances (name) {
      this.$store.dispatch('object/searchObject', {
        name: name
      })
    },
    loadDataTable () {
      if (this.instances.length === 0) {
        return
      }
      this.dataTable = $('#objTable').DataTable({
        destroy: true
      })
    },
    destroyDataTable () {
      if (this.dataTable) {
        this.dataTable.destroy()
        this.dataTable = null
      }
    }
  },
  watch: {
    '$route' (to, from) {
      this.loadInstances(to.params.name)
    }
  },
  beforeUpdate () {
    this.destroyDataTable()
  },
  updated () {
    this.loadDataTable()
  },
  computed: {
    instances () {
      return this.$store.getters['object/getInstances']
    }
  }
}
</script>

<style scoped>

</style>
