(function(angular) {
	'use strict';

	angular
		.module('app')
		.factory('exampleFactory', Factory);

	Factory.$inject = [];

	function Factory() {
		var publicVar = 'public';
		var _privateVar = 'private';

		var factory = {
			publicVar: publicVar,
			publicFn: publicFn
		};

		return factory;
	


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