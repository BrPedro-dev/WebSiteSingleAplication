require(['router','controllers/index-controller'], function(router,index){

	index.init();
	router.start();


})