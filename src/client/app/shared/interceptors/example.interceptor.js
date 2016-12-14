(function(angular) {
	'use strict';

	angular
		.module('app.shared')
		.factory('exampleInterceptor', Interceptor);

	Interceptor.$inject = [];

	function Interceptor() {
		var interceptor = {
			'response': 	 responseHandler,
			'responseError': responseErrorHandler
		};

		return interceptor;


		function responseHandler(response) {
			return response;
		}

		function responseErrorHandler(error) {
			return error;
		}

	}
		
})(window.angular);