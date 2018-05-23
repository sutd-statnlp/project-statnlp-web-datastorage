export default {
  addObjectName (objectNames, name) {
    if (objectNames.includes(name)) {
      return false
    }
    objectNames.unshift(name)
    return true
  }
}
