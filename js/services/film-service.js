define(function () {

	
	var api = "https://api.jikan.moe/v3/search/anime?q="


	function getFilms(name) {
		console.log(name)
		return fetch(api+name).then(function (response) {
			return response.json();
		}).then(function (json) {
			return json;
		})
	}

	return {
		getFilms: getFilms
	}

})