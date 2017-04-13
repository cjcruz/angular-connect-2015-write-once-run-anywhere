!function ($, jQuery, window, document) {
    'use strict';

    /**
     * @public
     * @constructor
     *
     * @param $scope
     * @param {Geolocation} geolocation
     * @param {PlayersApi} playersApi
     */
    function PcbViewerController($scope, geolocation, playersApi) {
        $scope.radiuses = [5, 10, 25, 50, 100, 250, 1000];
        $scope.model = {
            radius: 10
        };

        init();

        function init() {
            $scope.test = 10;
        }

    }

    app.module.controller('pcbViewerController', PcbViewerController);
}();