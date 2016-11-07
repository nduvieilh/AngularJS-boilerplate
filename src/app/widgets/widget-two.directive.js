(function(angular) {
	'use strict';

	angular
		.module('app.widget')
		.component('widgetTwo', Directive);

	Directive.$inject = [];

	function Directive() {
		var directive = {
			restrict: 'E',
			templateUrl: '/target/path/to/widget-two.html',
			link: Link,
			controller: Controller,
			controllerAs: '$ctrl',
			scope: {
				string: '@',
				data: '<',
				data2: '=',
				callback: '&'
			}
			require: {
				widgetTwo: 'widgetTwo'
			}
		};

		return directive;

		function Link(scope, element, attrs, controller) {
			// Access ctrl as you would inside of the controller
			var ctrl = controller.widgetTwo;
		}
	}

	Controller.$inject = [];

	function Controller() {
		var ctrl = this;

		ctrl.publicFn = publicFn;



		///   PUBLIC FUNCTIONS   /////////////////////////////////////

		function publicFn() {

		}



		///   PRIVATE FUNCTIONS   ////////////////////////////////////

		function _privateFn() {

		}

	}
		
})(window.angular);