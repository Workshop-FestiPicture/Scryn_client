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
		sessionStorage['eventId']=event_id;
		var page = $(templates).filter('#tpl-event').html();
		$('#container').html(page);
		}, 'html');
		break;
		
	default:
		unlogged = sessionStorage['username'] == "null";
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
	navigator.camera
			.getPicture(navigator.camera
					.getPicture(
							function(imageURI) {

								document.getElementById("send").style.display = 'block';

								document.getElementById("image").innerHTML = '<img id="img" src="data:image/jpeg;base64,'
										+ imageURI
										+ '" style="max-width: 100%">';

							},
							function(err) {

								alert('Failed to load picture because: '
										+ message);

							},
							{
								quality : 50,
								destinationType : Camera.DestinationType.DATA_URL
							}));
}

route();