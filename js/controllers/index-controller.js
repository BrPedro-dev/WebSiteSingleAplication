define(['../services/index-service', '../views/index-view'], function (animeService, animeView) {


	var externals = {};

	function init() {

		animeService.getAnimes().then(function (data) {
			animeView.show(data);
		})

	}

	externals.init = init;
	externals.setApi = animeService.setApi;
	return externals;

})