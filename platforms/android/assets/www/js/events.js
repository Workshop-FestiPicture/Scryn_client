function event(i){
	$.get('js/templates.html', function(templates) {
        var page = $(templates).filter('#tpl-event-'+i+'').html();
        $('#container').html(page);
    }, 'html');
}

function getEvents() {
	var xmlhttp;
	if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp = new XMLHttpRequest();
	} else {// code for IE6, IE5
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			var response = xmlhttp.responseText;

			var arr = JSON.parse(response);
			var out = '<div class="btn-group-vertical" role="group">';
			var i;
			for (i = 0; i < arr.length; i++) {
				out += '<button type="button" class="btn btn-default" onclick="event('+i+')"> EVENT '+ (i+1) + '<br>' + arr[i].name + '</a></button>';
			}
			out+='</div>';
//			document.getElementById("user").innerHTML = "<p> Hello " + GetUserName() + "</p>";
			document.getElementById("events").innerHTML = out;

			// document.getElementById("events").innerHTML = myArr[0].name;
		}
	}
	xmlhttp.open("GET", "http://api-scryn.herokuapp.com/events.json", true);
	xmlhttp.setRequestHeader("Content-type", "application/json");
	xmlhttp.send(null);
}
