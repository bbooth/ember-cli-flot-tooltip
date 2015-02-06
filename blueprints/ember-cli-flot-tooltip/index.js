module.exports = {
  normalizeEntityName: function () {
  },
  beforeInstall: function () {
    return this.addAddonToProject('ember-cli-flot', '~0.0.2');
  },
  afterInstall: function () {
    return this.addBowerPackageToProject('flor.tooltip', '~0.8.4');
  }
};
