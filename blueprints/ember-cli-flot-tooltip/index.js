module.exports = {
  normalizeEntityName: function() {
  },

  afterInstall: function () {
    return this.addBowerPackageToProject('flor.tooltip', '~0.8.4');
  }
};
