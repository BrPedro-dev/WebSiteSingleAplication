define(['../services/film-service' ,'../views/film-view'], function (filmService,filmView) {


	var externals = {};

	var name = "";

	function setName(newname){
		name = newname;
	}

	function init() {

		if(name !== ""){

			filmService.getFilms(name).then(function (data) {
				filmView.show(data);
			})
		}

	}

	externals.init = init;
	externals.setName = setName;
	return externals;

})