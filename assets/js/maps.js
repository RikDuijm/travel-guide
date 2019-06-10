
var markersArequipa = [];


function initMap(){



// styling maps - generated with https://mapstyle.withgoogle.com/
    var generalStyles = [
        {
            "featureType": "poi",
            "elementType": "labels.text",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "poi.attraction",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "poi.business",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "poi.government",
            "stylers": [
                {
                    "visibility": "simplified"
                }
            ]
        },
        {
            "featureType": "poi.place_of_worship",
            "stylers": [
                {
                    "visibility": "simplified"
                }
            ]
        },
        {
            "featureType": "poi.school",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "labels.icon",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "transit",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        }
    ]

//options per map
    var optionsLima = {
        zoom: 12,
        center: {lat:-12.122026,lng:-77.030747},
        styles: generalStyles
    };
    var optionsArequipa = {
        zoom: 12,
        center: {lat:-16.398803,lng:-71.536916},
        styles: generalStyles
    };


//place the map on HTML-page
    var mapLima = new google.maps.Map(document.getElementById("lima-map"), optionsLima);
    var mapArequipa = new google.maps.Map(document.getElementById("arequipa-map"), optionsArequipa);

//create icons
    var camera = "https://img.icons8.com/color/24/000000/old-time-camera.png";
    var hotel = "https://img.icons8.com/color/24/000000/hotel-information.png";
    var restaurant = "https://img.icons8.com/color/24/000000/dining-room.png";
    var bar = "https://img.icons8.com/color/24/000000/bar.png";
    var information = "https://img.icons8.com/color/24/000000/information.png";

    var locationsArequipa = [
        ['Monasterio de Santa Catalinta', -16.395141, -71.536774, camera],
        ['Museo de Juanita', -16.399810, -71.537825, camera],
        ['Casona Solar', -16.401777, -71.537058, hotel],
        ['Zig Zag', -16.395345, -71.535461, restaurant],
        ['Toeristische informatie', -16.399459, -71.537031, restaurant],
    ];


    var marker, i;
    var infowindow = new google.maps.InfoWindow();

    google.maps.event.addListener(mapArequipa, 'click', function() {
        infowindow.close();
    });


    for (i = 0; i < locationsArequipa.length; i++) {
        marker = new google.maps.Marker({
            position: new google.maps.LatLng(locationsArequipa[i][1], locationsArequipa[i][2]),
            map: mapArequipa,
            icon: locationsArequipa[i][3]
        });

        google.maps.event.addListener(marker, 'click', (function(marker, i) {
            return function() {
                infowindow.setContent(locationsArequipa[i][0]);
                infowindow.open(mapArequipa, marker);
            }
        })(marker, i));

        markersArequipa.push(marker);
    }

    var markerCluster = new MarkerClusterer(mapArequipa, markersArequipa,
        {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});


}


function clickArequipa(id){
    google.maps.event.trigger(markersArequipa[id], 'click');
}





