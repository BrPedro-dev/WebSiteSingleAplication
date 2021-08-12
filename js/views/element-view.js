
// manipulation of the DOM, event listeners, creating new elements, etc....
define(function(){

	
	var externals = {};

	
	function show(filmsList) {

		console.log(filmsList)

		var html =`<div class='row justify-content-md-center'>
		<h1>Anime of Naruto</h1>
		<div id="input" class="input-group d-flex justify-content-center">
			<input type="text" id="Name" class="form-control" placeholder="Name Of Anime" aria-label="Name Of Anime" aria-describedby="basic-addon1">
			<button class=" btn btn-danger" id="btn">Search Anime</button>
		</div>
	</div>

	<div id="titles">`;

	
		html += "<span class='span-flex'>"
			html += "<img class='imagens' src = '" + filmsList.image_url + "'/>";
			html += "<p class='title'>" + filmsList.title +"</p>"
		html += "</span>"



	html += "";
	
		$("#app").html(html);
	}

	
	
	externals.show = show;
	
	
	return externals;


})