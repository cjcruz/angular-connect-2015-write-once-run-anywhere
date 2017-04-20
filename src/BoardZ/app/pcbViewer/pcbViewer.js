!function ($, jQuery, window, document) {
    'use strict';

    /**
     * @public
     * @constructor
     *
     * @param $scope
     * @param {PcbProject} pcbProject
     */
    function PcbViewerController($scope, pcbProject) {
      init();

      function init() {
      }

      $scope.loadFile = function (filename){
        //when a file is loaded, then the first layer is loaded always
        pcbProject.getLayer(1, function(data){
          alert(data);
        });
      }

    }

    app.module.controller('pcbViewerController', PcbViewerController);
}();