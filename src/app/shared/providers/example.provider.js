(function(angular) {
	'use strict';

	angular
		.module('app')
		.provider('exampleProvider', Provider);

	Provider.$inject = [];

	function Provider() {
		var publicVar = 'public';
		var _privateVar = 'private';

		// Variables that will be available to change during config
		this.configVar = '';

		// Define this.$get function which returns our scope
		this.$get = function() {
			return {
				publicVar: publicVar,
				configVar: this.configVar,
				publicFn: publicFn
			}
		}

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