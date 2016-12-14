(function(angular) {
	'use strict';

	angular
		.module('app.page')
		.component('page', Component());

	Component.$inject = [];

	function Component() {
		var component = {
			templateUrl: '/app/page/page.html',
			controller: Controller,
			transclude: false,
			bindings: {
				string: '@',
				data: '<',
				callback: '&'
			},
			require: {
				parent: '^^parentComponent'
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

		// Run once per digest cycle
		function doCheck() {

		}

		// Run after template is rendered
		function postLink() {
			
		}



		///   PRIVATE FUNCTIONS   ////////////////////////////////////

		function _privateFn() {

		}

	}
		
})(window.angular);