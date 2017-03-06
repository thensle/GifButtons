$(document).ready(function(){
	//Pre-populated button options
	var gifArray = ["RuPaul's Drag Race", "House", "Friends", "How I Met Your Mother", "Arrested Development"];

createButtons();

//EVENT LISTENERS

// Displaying gifs for a button click
$(".gif-button").on("click", function(){
	$(".gif-display").empty();
	var searchTerm = $(this).attr("value");
	var searchTermEdited = searchTerm.replace(/\s/g, '+');
	var resultsReturned = 10;
	var query = "https://api.giphy.com/v1/gifs/search?q=" + searchTermEdited + "&api_key=dc6zaTOxFJmzC" + "&limit=" + resultsReturned;


	$.ajax({
		url: query,
		method: "GET"
	}).done(function(gif){
		console.log(gif);
		for(var i = 0; i <= resultsReturned; i++){
			var gifImage = $("<img>");
			gifImage.attr({
				"src": gif.data[i].images.fixed_width_still.url,
				"gif-still": gif.data[i].images.fixed_width_still.url,
				"gif-animated": gif.data[i].images.fixed_width.url,
				"gif-state": "still",
				"class": "giphy"
			});
		
			var rating = "Rating: " + gif.data[i].rating;
			var ratingPlace = $("<p>" + rating + "</p>");

			$(".gif-display").append(ratingPlace);
			$(".gif-display").append(gifImage);
		};
	}).fail(function(){
		$(".gif-display").html("Oops! Something didn't quite work... Try again!");
	});


});

$(".giphy").on("click", function(){
	alert("You clicked something!");
	var state = $(this).attr("gif-state");

	if (state === "still"){
		$(this).attr("src", $(this).attr("gif-animated"));
		$(this).attr("gif-state", "animated");
	} else {
		$(this).attr("src", $(this).attr("gif-still"));
		$(this).attr("gif-state", "still");
	};

});


//Adding a button a user creates

$(".button-gif-add").on("click", function(){
	var userText = $(".gif-topic").val().trim();
	gifArray.push(userText);
	$(".gif-buttons").empty();
	createButtons();
});

//FUNCTIONS

//Creating buttons dynamically

function createButtons(){
	for(var i = 0; i < gifArray.length; i++){
		var newButton = $("<button></button>");
		newButton.attr({
			"type": "button",
			"class": "btn btn-default gif-button",
			"value": gifArray[i]
		});
		newButton.text(gifArray[i]);
		$(".gif-buttons").append(newButton);
	};

};

});