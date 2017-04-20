!function ($, jQuery, window, document) {
	'use strict';
	
	/**
	 * @public
	 * @constructor
	 * 
	 * @param $scope
	 * @param {PlayersApi} playersApi
	 * @param {BoardGamesApi} boardGamesApi
	 */
	function DashboardController($scope, playersApi, boardGamesApi) {
        $scope.playerCount = $scope.gameCount = '?';

		init();

		function init() {
			
		}
	}
	
	app.module.controller('dashboardController', DashboardController);
}();