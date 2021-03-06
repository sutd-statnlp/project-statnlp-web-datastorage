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
            <table class="table table-striped table-bordered table-responsive-sm" id="objTable">
              <thead>
                <tr>
                  <th>#</th>
                  <th>ID</th>
                  <th>Created At</th>
                  <th>Updated At</th>
                  <th class="text-center"></th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in instances" :key="index">
                  <td>{{index + 1}}</td>
                  <td>{{item.ID}}</td>
                  <td>{{item.CreatedAt | date}}</td>
                  <td>{{item.UpdatedAt | date }}</td>
                  <td class="text-center">
                    <button type="button" class="btn btn-info btn-sm m-btn-sm mr-2" aria-label="delete" @click="updateObject(item)">
                     <span><i class="fa fa-edit"></i></span>
                    </button>
                    <button type="button" class="btn btn-danger btn-sm m-btn-sm" aria-label="delete" @click="deleteObject(item.ID)">
                     <span><i class="fa fa-trash"></i></span>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <ObjectDialog id="objectDialog" :instance="currentInstance" :saveObject="saveObject"/>
  </div>
</template>

<script>
import AlertService from '@/service/alert-service'
import ObjectDialog from '@/components/ObjectDialog'
export default {
  components: {
    ObjectDialog
  },
  name: 'ObjectPage',
  data () {
    return {
      dataTable: null,
      currentInstance: {
        ID: null
      }
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
        destroy: true,
        'columnDefs': [
          { 'orderable': false, 'targets': 4 }
        ]
      })
    },
    destroyDataTable () {
      if (this.dataTable) {
        this.dataTable.destroy()
        this.dataTable = null
      }
    },
    deleteObject (id) {
      AlertService.confirmDanger(
        `You will not be able to recover instance ${id}.`,
        'Are you sure ?',
        ['No, cancel !', 'Yes, delete !']
      ).then((isConfirm) => {
        if (isConfirm) {
          this.$store.dispatch('object/deleteObject', {
            name: this.$route.params.name,
            id: id
          })
        }
      })
    },
    updateObject (object) {
      this.currentInstance = object
      $('#objectDialog').modal({})
    },
    saveObject (newObject) {
      this.$store.dispatch('object/saveObject', {
        name: this.$route.params.name,
        id: this.currentInstance.ID,
        object: newObject
      })
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
  },
  mounted () {
  }
}
</script>

<style scoped>
.m-btn-sm {
  width: 32px;
}
</style>
