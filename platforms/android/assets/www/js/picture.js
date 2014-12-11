function sendPicture() {
	var xmlhttp;
	xmlhttp = new XMLHttpRequest();

	xmlhttp.onreadystatechange = function() {
			document.getElementById("retour").innerHTML=xmlhttp.responseText;
	}

	// var imgURI = document.getElementById("img").value;
	// document.getElementById("test52").innerHTML='<p>'+imgURI+'</p>';
	var string = 'C:/IMG_7504.JPG'
//	var string="azeaze";
	document.getElementById("eid").innerHTML="<p>"+sessionStorage['eventid']+"</p>";
	document.getElementById("uid").innerHTML="<p>"+sessionStorage['userid']+"</p>";
	var selected_file = document.getElementById('input').files[0];
	var formData = new FormData();
	formData.append("photo", selected_file);
	
	
	xmlhttp.open("POST", "https://s3-us-west-2.amazonaws.com/scryn", true);
	xmlhttp.setRequestHeader("Content-type", "multipart/form-data; boundary=9431149156168");
	xmlhttp.send(formData);
}