
var markersArequipa = [];
var markersLima = [];
var markersCusco = []

var routeCusco;

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
        zoom: 16,
        center: {lat:-16.398803,lng:-71.536916},
        styles: generalStyles
    };
    var optionsCusco = {
        zoom: 16,
        center: {lat:-13.516706,lng:-71.978814},
        styles: generalStyles
    };



//place the map on HTML-page
    var mapLima = new google.maps.Map(document.getElementById("lima-map"), optionsLima);
    var mapArequipa = new google.maps.Map(document.getElementById("arequipa-map"), optionsArequipa);
    var mapCusco = new google.maps.Map(document.getElementById("cusco-map"), optionsCusco);

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

    var locationsLima = [
        ['Casa Wayra', -12.129707, -77.025206, hotel],
        ['Hotel Mariel', -12.117951, -77.027370, hotel],
        ['Aeropuerto Internacional Jorge Chávez', -12.024158, -77.111939, information]
    ];


    var locationsCusco = [
        ['<h5>Plaza de Armas</h5><p>Ooit het centrale plein van de hoofdstad van de Inca’s, wordt Cusco’s Plaza de Armas gedomineerd door de Kathedraal en de Kerk van de Jezuïeten (foto). In de straatjes die uitkomen op het stadsplein staan koloniale gebouwen zij aan zij met Inca-ruïnes.</p><img src="assets/images/cusco-plaza.jpg" width="100%" alt="Plaza de Armas, Cusco">', -13.516706, -71.978814, camera],
        ['<h5>Inca muur</h5><p>De Inca’s waren fantastische bouwmeesters, en de kwaliteit van hun muren overtrof die van de Spaanse kolonisator ruimschoots. Hier treft u de beroemde twaalfhoekige steen. De omringende stenen sluiten overal zo nauw aan, dat er geen vel papier tussen te krijgen is.</p><img src="assets/images/cusco-muur.jpg" width="100%" alt="Inca-muur, Cusco">', -13.515981, -71.976277, camera],
        ['<h5>Barrio de San Blas</h5><p>Een korte maar steile wandeling vanaf Cusco-centrum brengt u naar het charmante, dorps-aandoende San Blas. Autovrij, vol kunstgalerietjes, met leuke koffietentjes, monumentale panden en een prachtig uitzicht over de stad.</p><img src="assets/images/cusco-sanblas.jpg" width="100%" alt="San Blas, Cusco">', -13.515158, -71.974226, camera],
        ['<h5>Mercado de San Pedro</h5><p>Een spektakel voor de zintuigen: van groente, fruit en vlees, tot het chicha (Inca-bier, gebrouwen uit maís) en van gewoven kleden tot te offeren lama-foetussen: op de centrale markt kijkt u uw ogen uit. Kijk uit voor zakkenrollers!</p><img src="assets/images/cusco-markt.jpg" width="100%" alt="Mercado San Pedro, Cusco">', -13.521096, -71.982496, camera],
        ['<h5>Sacsaywamán</h5><p>Zonder twijfel één van ’s werelds meest imposante bouwwerken. Na de verovering werden de stenen gebruikt om koloniaal Cusco op te bouwen. De grootste stenen bleven achter, want de Spanjaarden wisten zich geen raad met stenen van 200 ton.</p><img src="assets/images/cusco-ruins.jpg" width="100%" alt="Sacsaywamán, Cusco">', -13.509773, -71.981678, camera],
        ['<h5>De Heilige Vallei</h5><p>De tijd lijkt te hebben stilgestaan in de landelijke Heilige Vallei, gelegen tussen Cusco en Machu Picchu. Stille gehuchtjes, schitterende Inca-ruïnes zoals Pisac en Ollantaytambo (foto) en een aangenaam klimaat, maken een bezoek zeer de moeite waard!</p><img src="assets/images/cusco-valley.jpg" width="100%" alt="De Heilige Valei">', -13.407218, -71.844302, camera],
        ['<h5>Machu Picchu</h5><p>Herontdekt in 1911 en verkozen tot ‘Nieuw Wereldwonder’ in 2007: Machu Picchu is zonder enige twijfel Peru’s bekendste en indrukwekkendste ruïne. Hoog oprijzend boven de wilde Urubamba-rivier, de piek van Wayna Picchu vaak omsluierd door mystiek aandoende wolken, weet deze ‘citadel’ iedere bezoeker te verbazen.</p><img src="assets/images/cusco-machu-picchu.jpg" width="100%" alt="Machu Picchu">', -13.160992, -72.545153, camera],
        ['<h5>Regenwoud van Manu</h5><p>De regio van Manu, in de Amazone, wordt geroemd als een van de regio’s met de grootste biodiversiteit ter wereld. Het is ook één van de minst betreden gebieden. Hemelsbreed slechts 100 kilometer van Cusco lopen inheemse stammen rond die nog nooit contact hebben gehad met de rest van de wereld.</p><img src="assets/images/cusco-manu.jpg" width="100%" alt="Machu Picchu">', -12.221888, -71.001184, camera],
        ['<h5>Inkarri Hostal</h5><p></p><img src="assets/images/cusco-hotel-inkarri.jpg" width="100%" alt="Hostal Inkarri, Cusco">', -13.518024, -71.973280, hotel],
        ['<h5>Andenes al Cielo</h5><p></p><img src="assets/images/cusco-hotel-andenes.jpg" width="100%" alt="Hostal Inkarri, Cusco">', -13.515211, -71.975984, hotel],
        ['<h5>Niños Hotel I</h5><p><strong>€€</strong><br> <br>19 kamers, onbijt van de kaart, restaurant, ngo, terras<br><a href="https://www.ninoshotel.com" target="_blank">website</a><br><br><em>Als toeriste trok de eigenaresse zich het lot van de straatkinderen aan. Ze besloot te blijven, adopteerde er negen en begon dit hotel. Met de opbrengst ontvangen honderden straatkinderen eten en zorg.</em></p><img src="assets/images/cusco-hotel-ninos.jpg" width="100%" alt="Hostal Inkarri, Cusco">', -13.516234, -71.983221, hotel],
        ['<h5>El Mercado Tunqui</h5><p><strong>€€€</strong><br>32 kamers, ontbijtbuffet, restaurant, bar, room-service, terras<br><a href="https://www.elmercadocusco.com" target="_blank">website</a><br><br><em>Een fantastische keuze als u een iets ruimer budget heeft. Heerlijk restaurant, grote zonnige patio en een hele goede prijs-kwaliteit verhouding.</em></p><img src="assets/images/cusco-hotel-mercado.jpg" width="100%" alt="Hostal Inkarri, Cusco">', -13.516292, -71.982495, hotel],
        ['<h5>Paddys Irish Pub</h5><p></p>', -13.516695, -71.977535, restaurant],
        ['El Paisa', -13.523403, -71.973704, restaurant],
        ['Ciccciolina', -13.516145, -71.976656, restaurant],
        ['Marcelo Batata', -13.515914, -71.976790, restaurant],
        ['busterminal Cruz del Sur', -13.532846, -71.968532, information],
        ['bank BCP', -13.518536, -71.977983, information],
        ['Clínica Pardo', -13.521621, -71.965407, information],
        ['toeristenpolitie', -13.514825, -71.981167, information]
    ];


    var markerArequipa, iArequipa;
    var infowindowArequipa = new google.maps.InfoWindow();

    var markerLima, iLima;
    var infowindowLima = new google.maps.InfoWindow();

    var markerCusco, iCusco;
    var infowindowCusco = new google.maps.InfoWindow(
        {
            maxWidth: 260
        }
    );

    google.maps.event.addListener(mapArequipa, 'click', function() {
        infowindowArequipa.close();
    });

    google.maps.event.addListener(mapLima, 'click', function() {
        infowindowLima.close();
    });

    google.maps.event.addListener(mapCusco, 'click', function() {
        infowindowCusco.close();
    });

    for (iArequipa = 0; iArequipa < locationsArequipa.length; iArequipa++) {
        markerArequipa = new google.maps.Marker({
            position: new google.maps.LatLng(locationsArequipa[iArequipa][1], locationsArequipa[iArequipa][2]),
            map: mapArequipa,
            icon: locationsArequipa[iArequipa][3]
        });

        google.maps.event.addListener(markerArequipa, 'click', (function(markerArequipa, iArequipa) {
            return function() {
                infowindowArequipa.setContent(locationsArequipa[iArequipa][0]);
                infowindowArequipa.open(mapArequipa, markerArequipa);
            };
        })(markerArequipa, iArequipa));

        markersArequipa.push(markerArequipa);
    }

    for (iLima = 0; iLima < locationsLima.length; iLima++) {
        markerLima = new google.maps.Marker({
            position: new google.maps.LatLng(locationsLima[iLima][1], locationsLima[iLima][2]),
            map: mapLima,
            icon: locationsLima[iLima][3]
        });

        google.maps.event.addListener(markerLima, 'click', (function(markerLima, iLima) {
            return function() {
                infowindowLima.setContent(locationsLima[iLima][0]);
                infowindowLima.open(mapLima, markerLima);
            };
        })(markerLima, iLima));

        markersLima.push(markerLima);
    }

    for (iCusco = 0; iCusco < locationsCusco.length; iCusco++) {
        markerCusco = new google.maps.Marker({
            position: new google.maps.LatLng(locationsCusco[iCusco][1], locationsCusco[iCusco][2]),
            map: mapCusco,
            icon: locationsCusco[iCusco][3]
        });

        google.maps.event.addListener(markerCusco, 'click', (function(markerCusco, iCusco) {
            return function() {
                infowindowCusco.setContent(locationsCusco[iCusco][0]);
                infowindowCusco.open(mapCusco, markerCusco);
            };
        })(markerCusco, iCusco));

        markersCusco.push(markerCusco);

        // Walking route Cusco
        var routeCuscoCoordinates = [
            {lat: -13.516277, lng: -71.978577},
            {lat: -13.515703, lng: -71.978170},
            {lat: -13.514519, lng: -71.978849},
            {lat: -13.514414, lng: -71.978659},
            {lat: -13.513016, lng: -71.979288},
            {lat: -13.512704, lng: -71.978953},
            {lat: -13.512512, lng: -71.978562},
            {lat: -13.512448, lng: -71.978596},
            {lat: -13.512045, lng: -71.977871},
            {lat: -13.512119, lng: -71.977522},
            {lat: -13.512337, lng: -71.977043},
            {lat: -13.512694, lng: -71.976039},
            {lat: -13.512907, lng: -71.975722},
            {lat: -13.513644, lng: -71.974937},
            {lat: -13.513705, lng: -71.974906},
            {lat: -13.514311, lng: -71.974327},
            {lat: -13.514447, lng: -71.974395},
            {lat: -13.514643, lng: -71.974205},
            {lat: -13.514863, lng: -71.974049},
            {lat: -13.514240, lng: -71.974544},
            {lat: -13.514992, lng: -71.974799},
            {lat: -13.515347, lng: -71.975135},
            {lat: -13.515697, lng: -71.975714},
            {lat: -13.516135, lng: -71.976568},
            {lat: -13.515433, lng: -71.976983},
            {lat: -13.515512, lng: -71.977204},
            {lat: -13.515271, lng: -71.977358},
            {lat: -13.515506, lng: -71.977797},
            {lat: -13.515703, lng: -71.978170},
            {lat: -13.516277, lng: -71.978577}
        ];

        routeCusco = new google.maps.Polyline({
            path: routeCuscoCoordinates,
            strokeColor: '#FF0000',
            strokeOpacity: 1.0,
            strokeWeight: 2
        });


    }


    $(".removeLine").click(function(){
        routeCusco.setMap(null);
    })

    $(".addLine").click(function(){
        routeCusco.setMap(mapCusco);
    })



    //Geolocation. Because maps are centered with fixed coordinates, Geolocation doesn't bother clients who are not in the city they are looking at.
    //In that case the Geolocation Marker doesn't show on the map

    $(".position").click(function() {
        navigator.geolocation.getCurrentPosition(success, error)




        function success(position){

            // Getting Latitude and Longitude
            var lat = position.coords.latitude;
            var long = position.coords.longitude;


            var latlng = new google.maps.LatLng(lat,long);

            var markerUserLima = new google.maps.Marker({
                position:latlng,
                map: mapLima,
                title: "U bevindt zich hier"
            });

            var markerUserArequipa = new google.maps.Marker({
                position:latlng,
                map: mapArequipa,
                title: "U bevindt zich hier"
            });

            var markerUserCusco = new google.maps.Marker({
                position:latlng,
                map: mapCusco,
                title: "U bevindt zich hier"
            });
        }
        function error() {
            $('body').html("Locatie niet bepaald.");
        }
    });

}

/*
    var markerCluster = new MarkerClusterer(mapArequipa, markersArequipa,
        {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
*/





function clickArequipa(id){
    google.maps.event.trigger(markersArequipa[id], 'click');
}

function clickLima(id){
    google.maps.event.trigger(markersLima[id], 'click');
}

function clickCusco(id){
    google.maps.event.trigger(markersCusco[id], 'click');
}




