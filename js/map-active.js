$(document).ready(function () {
	/*====================================
		Google Map JS
	======================================*/
	(function () {

		var map;
		map = new GMaps({
			el: '#myMap',
			// lat: 51.507351,
			// lng: -0.127758,
			lat: 33.55159, // Latitude for Bahria Phase 7, Rawalpindi
			lng: 73.08699, // Longitude for Bahria Phase 7, Rawalpindi
			scrollwheel: false,
			zoom: 15,
			zoomControl: false,
			panControl: false,
			streetViewControl: true,
			mapTypeControl: false,
			overviewMapControl: false,
			clickable: false
		});

		var image = 'img/map-marker.png';
		map.addMarker({
			// lat: 51.507351,
			// lng: -0.127758,
			lat: 33.55159, // Latitude for Bahria Phase 7, Rawalpindi
			lng: 73.08699, // Longitude for Bahria Phase 7, Rawalpindi
			icon: {
				url: 'img/map-marker.png',
				scaledSize: new google.maps.Size(40, 40),
				origin: new google.maps.Point(0, 0),
				anchor: new google.maps.Point(20, 40)
			},
			animation: google.maps.Animation.DROP,
			verticalAlign: 'bottom',
			horizontalAlign: 'left',
			backgroundColor: 'maroon !important',
			// backgroundColor: '#efece0',
		});

		var styles = [

			{
				"featureType": "road",
				"stylers": [
					{ "color": "#ffffff" }
				]
			}, {
				"featureType": "water",
				"stylers": [
					{ "color": "#bde5f6" }
				]
			}, {
				"featureType": "landscape",
				"stylers": [
					{ "color": "#f2f2f2" }
				]
			}, {
				"elementType": "labels.text.fill",
				"stylers": [
					{ "color": "#FF7550" }
				]
			}, {
				"featureType": "poi",
				"stylers": [
					{ "color": "#e2f0cd" }
				]
			}, {
				"elementType": "labels.text",
				"stylers": [
					{ "saturation": 2 },
					{ "weight": 0.3 },
					{ "color": "#a8a8a8" }
				]
			}

		];

		map.addStyle({
			styledMapName: "Styled Map",
			styles: styles,
			mapTypeId: "map_style"
		});

		map.setStyle("map_style");
	}());

});