!function ($, jQuery, window, document) {
    "use strict";

    /**
     * @ngdoc service
     * @public
     *
     * @param $http
     * @param {string} apiBaseUrl
     */
    function TheBrainApi($http, apiBaseUrl) {
        apiBaseUrl = "http://localhost:63668/";
        var baseUrl = apiBaseUrl + 'api/values/';

        /**
         * in a future a project id will be needed.
         * @param {string} id
         * @returns {Promise}
         */
        this.getLayer = function (num) {
            return $http.get(baseUrl + num, {
                params: {}
            })
            .then(unwrapData);
        };

        function unwrapData(result) {
            return result.data;
        }
    }

    app.module.service('theBrainApi', TheBrainApi);
}();