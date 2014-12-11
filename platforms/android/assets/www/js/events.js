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
				var onclick = 'window.location="?'+(i+1)+'#event";';
				document.getElementById(i).setAttribute("onclick", onclick);
			}

		}
	}
	xmlhttp.open("GET", "http://api-scryn.herokuapp.com/events.json", true);
	xmlhttp.setRequestHeader("Content-type", "application/json");
	xmlhttp.send(null);
}

function getEventInfo() {
	var xmlhttp;
	var eid = sessionStorage['eventid'];
	xmlhttp = new XMLHttpRequest();
	
	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			var response = xmlhttp.responseText;
			var arr = JSON.parse(response);
			document.getElementById("name").innerHTML="<h2>"+arr.name+"</h2>";
			document.getElementById("description").innerHTML="<p>"+arr.description+"</p>";
			document.getElementById("image").innerHTML='<img src="'+arr.image+'" width=100%>';
		}
			
	}
	xmlhttp.open("GET", "http://api-scryn.herokuapp.com/events/"+eid+".json", true);
	xmlhttp.setRequestHeader("Content-type", "application/json");
	xmlhttp.send(null);
}
