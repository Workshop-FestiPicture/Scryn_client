function getEvents() {
	var xmlhttp;
	xmlhttp = new XMLHttpRequest();
	
	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			var response = xmlhttp.responseText;
			var arr = JSON.parse(response);
			var out = '<div class="btn-group-vertical" role="group">';
			var i;
			for (i = 0; i < arr.length; i++) {
				var session = 'sessionStorage["event_id"]=';
				var loc = '"#event?'+i+'"';
				out += '<button type="button" class="btn btn-default" id='
						+ i
						+ '> EVENT '
						+ (i + 1)
						+ '<br>'
						+ arr[i].name
						+ '</a></button>';
			}
			out += '</div>';
			document.getElementById("events").innerHTML = out;
			for (i = 0; i < arr.length; i++) {
				var onclick = 'sessionStorage["event_id"]='+i+';window.location="#event?'+i+'";';
				document.getElementById(i).setAttribute("onclick", onclick);
			}

		}
	}
	xmlhttp.open("GET", "http://api-scryn.herokuapp.com/events.json", true);
	xmlhttp.setRequestHeader("Content-type", "application/json");
	xmlhttp.send(null);
}
