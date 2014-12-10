function login() {
	var xmlhttp;
	if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp = new XMLHttpRequest();
	} else {// code for IE6, IE5
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState==4 && xmlhttp.status==200)
	    {
	    }
	}
	
	var user = document.getElementById("user").value;
	var password = document.getElementById("password").value;
//	document.getElementById("users").innerHTML='{"user":"'+ user +'", "password":"' + password + '"}';
	
	xmlhttp.open("POST", "http://api-scryn.herokuapp.com/users", true);
	xmlhttp.setRequestHeader("Content-type", "application/json");
	xmlhttp.send('{"name":"'+ user +'", "password":"' + password + '"}');
//	SetUserName(user);
    document.getElementById("link").innerHTML='<a href="#events">Choose an event</a>';
//    document.getElementById("name").innerHTML='<p>'+GetUserName()+'</p>';
    
}

function SetUserName(username)
{
    '<%Session["UserName"] = "' + userName + '"; %>';
}

function GetUserName()
{
    var username = '<%= Session["UserName"] %>';
    return username;
}
