function register() {
	var xmlhttp;
	var user = document.getElementById("user").value;
	var password = document.getElementById("password").value;
	xmlhttp = new XMLHttpRequest();

	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			sessionStorage['username'] = user;
			window.location="#events";
		}
	}

	xmlhttp.open("POST", "http://api-scryn.herokuapp.com/users", true);
	xmlhttp.setRequestHeader("Content-type", "application/json");
	xmlhttp.setRequestHeader("Accept", "application/json");
	xmlhttp.send('{"name":"' + user + '", "password":"' + password + '"}');

}

function login() {
	var xmlhttp;
	var user = document.getElementById("user").value;
	var password = document.getElementById("password").value;
	xmlhttp = new XMLHttpRequest();
	
	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			var arr = JSON.parse(xmlhttp.responseText)
			if (arr.ok) {
//				document.getElementById("status").innerHTML = "<p>Welcome buddy!</p>";
				sessionStorage['username'] = user;
				window.location="#events";
			} else {
				document.getElementById("status").innerHTML = "<p>Fuck off!</p>";
			}
			
		}
	}

	xmlhttp.open("POST", "http://api-scryn.herokuapp.com/users/check", true);
	xmlhttp.setRequestHeader("Content-type", "application/json");
	xmlhttp.setRequestHeader("Accept", "application/json");
	xmlhttp.send('{"name":"' + user + '", "password":"' + password + '"}');
}

function logOut(){
	sessionStorage['username'] = null;
	window.location="#";
}