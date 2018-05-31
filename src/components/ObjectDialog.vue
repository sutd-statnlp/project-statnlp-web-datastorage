<template>
  <div class="m-object-dialog">
    <div class="modal fade" :id="id" tabindex="-1" role="dialog" :aria-labelledby="id + 'Label'" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" :id="id + 'Label'">Update instance {{instance.ID}}</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div id="objectJsonEditor"></div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
            <button type="button" class="btn btn-primary" data-dismiss="modal"
            @click="saveObject(jsonEditor.get())">Save</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import JSONEditor from 'jsoneditor'
export default {
  name: 'ObjectDialog',
  props: {
    id: {
      default: 'objectModal'
    },
    instance: {
      required: true
    },
    saveObject: {
      required: true
    }
  },
  data () {
    return {
      jsonEditor: null
    }
  },
  methods: {
    destroyEditor () {
      if (this.jsonEditor) {
        this.jsonEditor.destroy()
        this.jsonEditor = null
      }
    }
  },
  updated () {
    let container = document.getElementById('objectJsonEditor')
    this.destroyEditor()
    let objectJson = {...this.instance.Extra}
    this.jsonEditor = new JSONEditor(container, {}, objectJson)
  }
}
</script>

<style scoped>
#objectJsonEditor {
  height: 260px;
}
</style>
