define(function () {

	
	var api = "https://api.jikan.moe/v3/anime/"


	function getAnime(id) {
		console.log(id)
		return fetch(api+id).then(function (response) {
			return response.json();
		}).then(function (json) {
			return json;
		})
	}

	return {
		getAnime: getAnime
	}

})