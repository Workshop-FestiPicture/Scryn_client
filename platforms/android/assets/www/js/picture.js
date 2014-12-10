function sendPicture() {
//	var xmlhttp;
//	if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
//		xmlhttp = new XMLHttpRequest();
//	} else {// code for IE6, IE5
//		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
//	}
//	xmlhttp.onreadystatechange = function() {
//		if (xmlhttp.readyState==4 && xmlhttp.status==200)
//	    {
//			var arr = JSON.parse(xmlhttp.responseText)
//			if (arr.ok){
//				document.getElementById("status").innerHTML="<p>Welcome buddy!</p>";
//			}
//			else{
//				document.getElementById("status").innerHTML="<p>Fuck off!</p>";
//			}
//	    }
//	}
	
	var imgURI = document.getElementById("img").value;
	document.getElementById("test52").innerHTML='<p>'+imgURI+'</p>';
	
//	xmlhttp.open("POST", "http://api-scryn.herokuapp.com/users/check", true);
//	xmlhttp.setRequestHeader("Content-type", "application/json");
//	xmlhttp.setRequestHeader("Accept", "application/json");
//	xmlhttp.send('{"name":"'+ user +'", "password":"' + password + '"}');    
}