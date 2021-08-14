define(function(){
	// map hashes(routes) to controllers
	var externals = {};

	var routes = {

		index1:{
			hash: "",
			controller: "index-controller"
		},

		index:{
			hash: "#element",
			controller: "element-controller"
		}
	}

	// starts a specific controller associated to a route!
	function initController(route){
		require(['controllers/' + route.controller], function(controller){
			controller.init();
		})
	}

	// gets the route object associated to a hash (if it exists!)
	function getRoute(){
		return Object.values(routes).find(function(element){
			return element.hash === window.location.hash;
		});
	}

	externals.start = function(){

		window.onhashchange = function(){
			try {
				initController(getRoute());
			} catch (err){
				// whatever I want to do in case of an error....
			}
		}

	}


	return externals;

});