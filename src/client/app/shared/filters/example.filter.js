(function(angular) {
	'use strict';

	angular
		.module('app')
		.filter('example', Filter);

	Filter.$inject = [];

	function Filter() {
		return exampleFilter;

		function exampleFilter(param1, params2) {
			return params1 + param2;
		}
	}
		
})(window.angular);