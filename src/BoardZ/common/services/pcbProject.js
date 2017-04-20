!function ($, jQuery, window, document) {
    "use strict";

    /**
     * @ngdoc service
     * @public
     *
     * @param {PlatformInformation} platformInformation
     * @param {PcbResourceLocal} pcbResourceLocal
     * @param {PcbResourceRemote} pcbResourceRemote
     */
    function PcbProject(platformInformation, pcbResourceLocal, pcbResourceRemote) {
      var resource;

      function initialize() {
        if (platformInformation.isNwjs()) {
          resource = pcbResourceLocal;
        }else{
          resource = pcbResourceRemote;
        }
      };

      this.getLayersCount = function(){
        return resource.getLayersCount();
      };

      this.getLayer = function(number, done){
        resource.getLayer(number, function(result){
          done(result);
        });
      };
      initialize();
    }

    app.module.service('pcbProject', PcbProject);
}();
