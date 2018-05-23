<template>
  <div class="m-newobject">
    <div class="row">
      <div class="col-md-6">
        <form id="objectForm" v-on:submit.prevent="submitObject" class="needs-validation" novalidate>
        <div class="tile">
          <div class="tile-body">
              <div class="form-group">
                <label class="control-label">Name</label>
                <input v-model="objectName" class="form-control" type="text" minlength="6" maxlength="18" placeholder="Enter object name"
                pattern="^[a-zA-Z][a-zA-Z0-9]{5,18}$" required>
                <div class="invalid-feedback">
                  Name does not have any space or special character.
                </div>
                <div class="invalid-feedback">
                  And length is greater than 6 and less than 18.
                </div>
              </div>
              <div class="form-group">
                <label class="control-label">JSON</label>
                <textarea v-model="objectJson" class="form-control m-input-json" rows="4" minlength="2" placeholder="Enter object json" required></textarea>
                <div class="invalid-feedback">
                  Valid JSON and The length is greater than 2.
                </div>
              </div>
          </div>
          <div class="tile-footer">
            <button class="btn btn-primary" type="submit">
              <i class="fa fa-fw fa-lg fa-plus-circle"></i>Add Object</button>&nbsp;&nbsp;&nbsp;
            <button type="button" class="btn btn-secondary" @click="reset">
              <i class="fa fa-fw fa-lg fa-times-circle"></i>Reset</button>
          </div>
        </div>
        </form>
      </div>
      <div class="col-md-6">
        <div class="tile">
         <div id="jsoneditor" class="tile-body">
         </div>
        </div>
      </div>
      <div class="clearix"></div>
      <div class="col-md-12">
        <div class="tile">
          <h3 class="tile-title"></h3>
          <div class="tile-body">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import JSONEditor from 'jsoneditor'
import AlertService from '@/service/alert-service'
export default {
  name: 'NewObject',
  data () {
    return {
      objectName: '',
      objectJson: '',
      jsonEditor: null
    }
  },
  mounted () {

  },
  methods: {
    submitObject () {
      var form = document.getElementById('objectForm')
      if (form.checkValidity() === false) {
        form.classList.add('was-validated')
        return
      }
      if (!this.jsonEditor) {
        AlertService.error('Invalid JSON !')
        return
      }
      this.$store.dispatch('object/addObject', {
        object: {
          name: this.objectName,
          json: this.jsonEditor.get()
        }
      })
    },
    destroyEditor () {
      if (this.jsonEditor) {
        this.jsonEditor.destroy()
        this.jsonEditor = null
      }
    },
    reset () {
      this.objectName = ''
      this.objectJson = ''
      this.destroyEditor()
    }
  },
  watch: {
    objectJson (value) {
      let jsonObject = null
      try {
        jsonObject = JSON.parse(value)
        $('.m-input-json').removeClass('is-invalid')
        $('.m-input-json').removeClass('border-red')
      } catch (e) {
        $('.m-input-json').addClass('is-invalid')
        $('.m-input-json').addClass('border-red')
        this.destroyEditor()
        return
      }
      let container = document.getElementById('jsoneditor')
      this.destroyEditor()
      this.jsonEditor = new JSONEditor(container, {}, jsonObject)
    }
  }
}
</script>

<style scoped>
#jsoneditor {
  height: 285px;
}
.boder-red {
  border-color: red;
}
</style>
