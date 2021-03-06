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

	case "#event":
		event_id = window.location.search.substr(1);
		sessionStorage['eventid'] = parseInt(event_id)	;
		$.get('js/templates.html', function(templates) {
			var page = $(templates).filter('#tpl-event').html();
			$('#container').html(page);
		}, 'html');
		getEventInfo();
		break;

	default:
		unlogged = sessionStorage['userid'] == "null";
		if (unlogged) {
			$.get('js/templates.html', function(templates) {
				page = $(templates).filter('#tpl-home').html();
				document.getElementById("container").innerHTML = page;
			}, 'html');
		} else {
			$.get('js/templates.html', function(templates) {
				page = $(templates).filter('#tpl-home-logged').html();
				document.getElementById("container").innerHTML = page;
			}, 'html');
		}
		break;
	}
}

$(document).ready(function() {
	document.addEventListener("deviceready", onDeviceReady, false);
	// for testing in Chrome browser uncomment
	// onDeviceReady();
});

var pictureSource;
var destinationType;

function onDeviceReady() {
	pictureSource = navigator.camera.PictureSourceType;
	destinationType = navigator.camera.DestinationType;
}

function capturePicture() {
	sessionStorage['imageURI']=null;
	navigator.camera
			.getPicture(navigator.camera
					.getPicture(
							function(imageURI) {
								sessionStorage['imageURI']=imageURI;
								document.getElementById("test").innerHTML="<p>"+sessionStorage['imageURI']+"</p>";
								document.getElementById("send").style.display = 'block';

								document.getElementById("image").innerHTML = '<img id="img" src="'+ imageURI
										+ '" style="max-width: 100%">';

							},
							function(err) {

								alert('Failed to load picture because: '
										+ message);

							},
							{
								quality : 1,
								destinationType : Camera.DestinationType.FILE_URI
								
							}));
}

route();