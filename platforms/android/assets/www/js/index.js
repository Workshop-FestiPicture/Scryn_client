$(window).on('hashchange', route);
 
function route() {
    var page, hash = window.location.hash;
    switch (hash) {
        case "#connect":
            $.get('js/templates.html', function(templates) {
                var page = $(templates).filter('#tpl-connect').html();
                $('#container').html(page);
            }, 'html');
            break;
            
        case "#new":
            $.get('js/templates.html', function(templates) {
                var page = $(templates).filter('#tpl-new').html();
                $('#container').html(page);
            }, 'html');
            break;
            
        case "#photo":
            $.get('js/templates.html', function(templates) {
                var page = $(templates).filter('#tpl-photo').html();
                $('#container').html(page);
            }, 'html');
            break;
            
        case "#events":
        	$.get('js/templates.html', function(templates) {
                var page = $(templates).filter('#tpl-events').html();
                $('#container').html(page);
            }, 'html');
            break;
 
        default:
            $.get('js/templates.html', function(templates) {
                page = $(templates).filter('#tpl-home').html();
                document.getElementById("container").innerHTML = page;
            }, 'html');
            break;
    }
}

$(document).ready(function() {
    document.addEventListener("deviceready", onDeviceReady, false);
    //for testing in Chrome browser uncomment
    //onDeviceReady();
});
 
var pictureSource;
var destinationType;
 
function onDeviceReady() {
    pictureSource = navigator.camera.PictureSourceType;
    destinationType = navigator.camera.DestinationType;
}
 
function capturePhoto() {
    navigator.camera.getPicture(onPhotoDataSuccess, onFail, {quality: 50, destinationType: Camera.DestinationType.DATA_URL});
}
 
function onPhotoDataSuccess(imageData) {
	var image = document.getElementById('myImage');
    image.src = "data:image/jpeg;base64," + imageData;
}
 
function onFail(message) {
    alert('Failed to load picture because: ' + message);
}

//function login() {
//	var login = $("input[name='login']").val();
//    var password = $("input[name='password']").val();
//    $.getJSON("http://api-scryn.herokuapp.com/users.json", {login: login, password: password});
//}



route();