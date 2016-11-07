(function(angular) {
	'use strict';

	angular
		.module('app')
		.factory('exampleTransform', Transform);

	Transform.$inject = [];

	function Transform() {
		var transform = {
			'response': responseHandler,
			'request': 	requestHandler
		};

		return transform;


		function responseHandler(data, headersGetter, status) {
			return data;
		}

		function requestHandler(data, headersGetter) {
			return data;
		}

	}
		
})(window.angular);