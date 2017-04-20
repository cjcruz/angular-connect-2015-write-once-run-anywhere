!function ($, jQuery, window, document) {
    "use strict";

    /**
     * @ngdoc service
     * @public
     *
     * @param {PlatformInformation} platformInformation
     */
    function PcbResourceLocal(platformInformation) {

      this.init = function () {
      };

      this.getLayersCount = function(){
        return 2;
      };

      this.getLayer = function(number, done){
        var edge = require('edge');
        var getLayer = edge.func({
          assemblyFile: '../TheBrainWindows.dll'
        });

        getLayer(1, function (error, result) {
            if (error) throw error;
            done(result);
        });
      };

    }

    app.module.service('pcbResourceLocal', PcbResourceLocal);
}();
