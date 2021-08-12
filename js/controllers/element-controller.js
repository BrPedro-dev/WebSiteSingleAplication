define(['../services/element-service','../views/element-view'], function (filmService,filmView) {

	var externals = {};

	var id = 0;

	function setId(newId){
		id = newId;
	}

	function init() {

		if(id!==0){

			filmService.getAnime(id).then(function (data) {
				filmView.show(data);
			})
		}
	}

	externals.init = init;
	externals.setId = setId;
	return externals;

})