define(['../services/element-service','./index-controller','../views/element-view'], function (filmService,index,filmView) {

	var externals = {};

	function init() {

		filmService.getAnime(index.getAnimeId()).then(function (data) {
			filmView.show(data);
		})
	}

	externals.init = init;
	return externals;

})