
// define modules
define(['../services/film-service','./index-controller' ,'../views/film-view'], function (filmService,index,filmView) {


	var externals = {};

	function init() {

		filmService.getFilms(index.getAnimes()).then(function (data) {
			filmView.show(data);
		})
	}

	externals.init = init;
	return externals;

})