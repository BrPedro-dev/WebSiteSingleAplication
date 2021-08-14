define(function () {


	var api = "https://api.jikan.moe/v3/search/anime?q=&order_by=members&sort=desc&page=1"

	function getAnimes() {

		return fetch(api).then(function (response) {
			return response.json();
		}).then(function (json) {
			return json;
		})
	}

	function setApi(Api){
		api = Api;
	}

	return {
		getAnimes: getAnimes,
		setApi: setApi
	}

})