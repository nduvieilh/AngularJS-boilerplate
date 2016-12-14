(function(angular) {
	'use strict';

	angular
		.module('app.shared')
		.factory('exampleResource', Resource);

	Resource.$inject = ['$resource'];

	function Resource($resource) {
		return $resource('/resource/path/:resource/:subResoruce', {
			resource: 'stuff',
			subResoruce: 'such'
		}, {
			'method': {
				method: 'PUT'
			}
		});
	}
		
})(window.angular);