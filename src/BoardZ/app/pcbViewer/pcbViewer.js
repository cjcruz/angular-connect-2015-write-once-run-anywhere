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

      $scope.loadFile = function (filename, done){
        //when a file is loaded, then the first layer is loaded always
        pcbProject.getLayer(1, function(data){
          done(data);
        });
      }

      $scope.getLayer = function (number_of_layer, done){
        //when a file is loaded, then the first layer is loaded always
        pcbProject.getLayer(number_of_layer, function(data){
          done(data);
        });
      }
    }

    app.module.controller('pcbViewerController', PcbViewerController);
}();