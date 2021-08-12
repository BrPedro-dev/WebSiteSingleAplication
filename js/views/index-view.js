define(function () {


    var externals = {};
    var id = 0;

    function show(animeList) {

        //var html = "<div class='row justify-content-md-center'><h1>Welcome Smoothies To This Beautiful App</h1>" + '<button class="col-3 btn btn-danger" id="btn">Click here to see some cool shiz.</button></div>';

        var html =
            `<div class='row justify-content-md-center'>
            <h1>Anime List</h1>
            <div id="input" class="input-group d-flex justify-content-center">
                <input type="text" id="Name" class="form-control" placeholder="Name Of Anime" aria-label="Name Of Anime" aria-describedby="basic-addon1">
                <button class="btn btn-danger" id="btn">Search Anime</button>
            </div>
        </div>

        <div id="titles">`;

        animeList.results.forEach((element) => {
            html += "<span class='span-flex'>"
                html += "<img id= '" + element.mal_id + "' class='imagens' src = '" + element.image_url + "'/>";
                html += "<p class='title'>" + element.title +"</p>"
            html += "</span>"
        });


        html += "";

        $("#app").html(html);

        btn()
        element();
    }

    function btn(){
        $("#btn").click(function () {
            window.location.hash = "film-list"
        })
    }


    function element(){
        $("img").click(function (event) {
            window.location.hash = "element"
            id = event.target.id;
        })
    }

    function getNameAnime(){
        return $("#Name").val();
    }

    function getAnimeId(){
        return id;
    }


    externals.show = show;
    externals.getNameAnime = getNameAnime;
    externals.getAnimeId = getAnimeId;

    return externals;


})