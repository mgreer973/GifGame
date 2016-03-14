    var actors = ['Tom Hanks', 'Brad Pitt', 'Harrison Ford', 'Johnny Depp', 'Matt Damon', 'Al Pacino', 'Tom Cruise', 'John Wayne', 'Robin Williams', 'Bruce Willis'];

    //added this
    function appendNewButton(actor){
        var a = $('<button>')
        a.addClass('actor');
        a.attr('data-name', actor);
        a.text(actor);
        $('#actorButtons').append(a);
    }

    //refactored this
    function renderButtons(){
        for (var i = 0; i < actors.length; i++){
            appendNewButton(actors[i])
        }
    }

    function displayActorInfo(){
        $('#actorsView').empty();
        var actorIn = $(this).attr('data-name');
        var actor = actorIn.replace(/\s+/g, "+"); 

        var baseURL = "http://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&limit=10&";
        var queryURL = baseURL + 'q=' + actor;
        console.log(queryURL);

        $.ajax({
            url: queryURL, 
            method: 'GET'
        })
        .done(function(response) {
        var results = response.data;
        console.log(results);

        for (var i = 0; i < results.length; i++) {
            var actorDiv = $('<div>');
            var p = $('<p>').text("Rating: " + results[i].rating);
            console.log(results[i].rating);
            var actorImage = $('<img>');
            actorImage.attr('src', results[i].images.fixed_height_still.url);
            actorImage.attr('data-state', 'still');
            actorImage.attr('data-still',results[i].images.fixed_height_still.url);
            actorImage.attr('data-animate',results[i].images.fixed_height.url);
            actorImage.addClass('actorImage');
            actorDiv.append(p);
            actorDiv.append(actorImage);
            $('#actorsView').append(actorDiv);
        }

        });
    }

function stillAnimateGif() {
    console.log(this);
    var state = $(this).attr('data-state'); 
    if ( state == 'still'){
        $(this).attr('src', $(this).data('animate'));
        $(this).attr('data-state', 'animate');
    }else{
        $(this).attr('src', $(this).data('still'));
        $(this).attr('data-state', 'still');
    }
}

    renderButtons();

    $('#addActor').on('click', function(){
        var actor = $('#actor-input').val().trim();
        actors.push(actor);
        appendNewButton(actor);
        return false;
    });

    $(document).on('click', '.actorImage', stillAnimateGif);


    $(document).on('click', '.actor', displayActorInfo);
