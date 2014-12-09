function getEvents() {
	$("<p>Yo mama, ready</p>").appendTo(".test1");
	var eventsAPI = $("http;//api-scryn.herokuapp.com/events.json";
	$.getJSON(eventsAPI, function( data ) {
		$.each( data.items, function( item ) {
			$("<p>Name : " + item.name + "<br> Id : " + item.id + "</p>").appendTo("#events");
		});
	});
	$("<p>Yo mama, done</p>").appendTo(".test2");
}