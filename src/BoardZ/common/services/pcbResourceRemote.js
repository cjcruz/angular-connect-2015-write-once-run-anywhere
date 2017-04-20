!function ($, jQuery, window, document) {
    "use strict";

    /**
     * @ngdoc service
     * @public
     *
     * @param {PlatformInformation} platformInformation
     * @param {TheBrainApi} theBrainApi
     */
    function PcbResourceRemote(platformInformation, theBrainApi) {

      this.init = function (filename) {
        
      };

      this.getLayersCount = function(){
        return 4;
      };

      this.getLayer = function(number, done){
        //in a future, send an project id will be necessary
        theBrainApi.getLayer(number)
          .then(function (result) {
            done(result);
          }, function (err) {
            alert(err);
        });
      };

    }

    app.module.service('pcbResourceRemote', PcbResourceRemote);
}();
