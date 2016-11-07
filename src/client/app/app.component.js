(function(angular) {
	'use strict';

	angular
		.module('app')
		.component('app', Component());

	Component.$inject = [];

	function Component() {
		return {
			template: [
				'<div ui-view="header"></div>',
				'<div class="container-fluid">',
					'<div ui-view="page"></div>',
				'</div>'
			].join('\n');
		}
	}
		
})(window.angular);