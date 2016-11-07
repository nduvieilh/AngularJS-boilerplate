(function(angular) {
	'use strict';

	angular
		.module('app')
		.service('exampleService', Service);

	Service.$inject = [];

	function Service() {
		var publicVar = 'public';
		var _privateVar = 'private';

		var service = this;
		service.publicVar = publicVar;
		service.publicFn = publicFn;


		///   PUBLIC FUNCTIONS   /////////////////////////////////////

		function publicFn() {
			return _privateFn();
		}



		///   PRIVATE FUNCTIONS   ////////////////////////////////////

		function _privateFn() {
			return _privateVar;
		}

	}
		
})(window.angular);