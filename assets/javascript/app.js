$(document).ready(function(){
	//Pre-populated button options
	var gifArray = ["Bebe Zahara Benet", "Tyra Sanchez", "Raja", "Sharon Needles", "Jinkx Monsoon", "Bianca Del Rio", "Violet Chachki", "Bob the Drag Queen", "Chad Michaels", "Alaska"];

createButtons();
var string = "Tara Hensle"


//EVENT LISTENERS

// Displaying gifs for a button click
$(".gif-button").on("click", function(){
	var searchTerm = $(this).attr("value");
	var searchTermEdited = searchTerm.replace(/\s/g, '+');
	console.log(searchTermEdited);


	var query = "https://api.giphy.com/v1/gifs/search?q=" + searchTermEdited + "&limit=10&api_key=dc6zaTOxFJmzC";


	$.ajax({
		URL: query,
		method: "GET"
	}).done(function(){
		

	}).error(function(){

	});
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

	console.log(string.charAt(0));

};

//Replacing Spaces with
function replaceSpacesWithPluses(){ 
	




};
});