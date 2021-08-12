
// manipulation of the DOM, event listeners, creating new elements, etc....
define(['../controllers/film-controller'],function (filmController){

	
	var externals = {};

	
	function show(filmsList) {


		var html =`<div class='row justify-content-md-center'>
		<h1>Anime</h1>
		<div id="input" class="input-group d-flex justify-content-center">
			<input type="text" id="Name" class="form-control" placeholder="Name Of Anime" aria-label="Name Of Anime" aria-describedby="basic-addon1">
			<button class=" btn btn-danger" id="btn">Search Anime</button>
		</div>
	</div>

	<div id="titles">`;

	
		html += "<span class='span-flex2'>"
			html += "<div>"
			html += "<img class='imagens noclick' src = '" + filmsList.image_url + "'/>";
			html += "<p class='title'>" + filmsList.title +"</p>"
			html += "</div>"
			html += "<div id='synopsis'><h1>Synopsis</h1><p>"+ filmsList.synopsis+"</p></div>"
		html += "</span>"


	html += "";
	
		$("#app").html(html);
		btn();
	}

	function btn(){
        $("#btn").click(function () {
            window.location.hash = "film-list"
            filmController.setName($("#Name").val())
        })
    }

	
	externals.show = show;
	
	
	return externals;


})