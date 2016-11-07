(function(angular) {
	'use strict';

	angular
		.module('app.widget')
		.component('widgetOne', Component);

	Component.$inject = [];

	function Component() {
		var component = {
			templateUrl: '/target/path/to/widget-one.html',
			controller: Controller,
			transclude: true,
			bindings: {
				string: '@',
				data: '<',
				callback: '&'
			}
		};

		return component;
	}

	Controller.$inject = [];

	function Controller() {
		var ctrl = this;

		ctrl.$onInit = onInit;
		ctrl.$onDestroy = onDestroy;
		ctrl.$onChanges = onChanges;
		ctrl.$doCheck = doCheck;
		ctrl.$postLink = postLink;



		///   PUBLIC FUNCTIONS   /////////////////////////////////////

		// Initial Component Setup
		function onInit() {

		}

		// Component teardown
		function onDestroy() {

		}

		// Component binding changes
		function onChanges(changes) {
			// Do action on binding's new value.
			// previousValue is also exposed if
			// using one way binding and immutable 
			if(changes && changes.binding.currentValue) {
			
			}
		}



		///   PRIVATE FUNCTIONS   ////////////////////////////////////

		function _privateFn() {

		}

	}
		
})(window.angular);