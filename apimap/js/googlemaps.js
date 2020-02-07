
    var locations = [


//china
    ['<div id="bodyContent">'+
    '  <iframe width="400" height="250" src="https://www.youtube.com/embed/8vV6rOxjcSI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> '
    , 39.9042, 116.4074, 5],
//use
    ['<div id="bodyContent">'+
    '  <iframe width="400" height="250"src="https://www.youtube.com/embed/ycNXLArFH4k" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> '
    , 38.91089915, -77.03595, 1],
//aus
    ['<div id="bodyContent">'+
    '  <iframe width="400" height="250"src="https://www.youtube.com/embed/0_CHVjMVCgw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> '
    , -24.7761086, 134.755, 1],
//japan
    ['<div id="bodyContent">'+
    ' <iframe width="400" height="250" src="https://www.youtube.com/embed/5qG8wZRU-vg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> '
    , 35.6828387, 139.7594549, 1],
//canada
    ['<div id="bodyContent">'+
    ' <iframe width="400" height="250" src="https://www.youtube.com/embed/on6HZWvPg9U" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> '
    , 61.0666922, -107.9917071, 1],
//Russia
    ['<div id="bodyContent">'+
    '  <iframe width="400" height="250" src="https://www.youtube.com/embed/pPSBVsfYQ_o" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> '
    , 64.6863136, 97.7453061, 1],
 //Eritrea
 ['<div id="bodyContent">'+
 '  <iframe width="400" height="250" src="https://www.youtube.com/embed/h4nYhgxjJxY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> '
 , 16.12820931, 38.1926996, 1],
//korea
['<div id="bodyContent">'+
' <iframe width="400" height="250" src="https://www.youtube.com/embed/T3-4b9YF2Hk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> '
, 37.5666791, 126.9782914, 1],
//new zealand
['<div id="bodyContent">'+
'  <iframe width="400" height="250" src="https://www.youtube.com/embed/-uxRfZ5HhXU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> '
, -41.2887467, 174.7772092, 1],

//france
['<div id="bodyContent">'+
'  <iframe width="400" height="250" src="https://www.youtube.com/embed/wXfJiPPVybI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> '
, 48.8566101, 2.3514992, 1],
//denmark
['<div id="bodyContent">'+
'  <iframe width="400" height="250" src="https://www.youtube.com/embed/NYz1dXIC5JE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> '
, 55.670249, 10.3333283, 1],
//greece
['<div id="bodyContent">'+
'  <iframe width="400" height="250" src="https://www.youtube.com/embed/D20JKmJk2Rc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> '
, 38.9953683, 21.9877132, 1],
//india
['<div id="bodyContent">'+
'  <iframe width="400" height="250" src="https://www.youtube.com/embed/t9pqhnf4IUg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> '
, 22.3511148, 78.6677428, 1],
//madagascar
['<div id="bodyContent">'+
'  <iframe width="400" height="250" src="https://www.youtube.com/embed/kyC-rLHDURM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> '
, -18.9249604, 46.4416422, 1],
//uk
['<div id="bodyContent">'+
'  <iframe width="400" height="250" src="https://www.youtube.com/embed/muJDBW6JYCw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> '
, 51.5018, -0.1328, 1],
  ];

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 2.2,
    center: new google.maps.LatLng( 46.8182 ,28.2275),
    mapTypeControlOptions: {
         mapTypeIds: [google.maps.MapTypeId.ROADMAP, google.maps.MapTypeId.HYBRID]
       },
       disableDefaultUI: true, // a way to quickly hide all controls
       scaleControl: true,
       zoomControl: true,
       zoomControlOptions: {
         style: google.maps.ZoomControlStyle.LARGE
       }

       ,
    styles:[
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#f5f5f5"
      }
    ]
  },
  {
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#f5f5f5"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#bdbdbd"
      }
    ]
  },
  {
    "featureType": "administrative.neighborhood",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#eeeeee"
      }
    ]
  },
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
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
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
    "featureType": "poi.park",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#e5e5e5"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  },
  {
    "featureType": "road",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#ffffff"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels",
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
    "featureType": "road.arterial",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dadada"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
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
  },
  {
    "featureType": "transit.line",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#e5e5e5"
      }
    ]
  },
  {
    "featureType": "transit.station",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#eeeeee"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#c9c9c9"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  }
]

  });

  var infowindow = new google.maps.InfoWindow();
  var image = 'https://i.ibb.co/s5DxfQW/ubee.png';
  var marker, i;

  for (i = 0; i < locations.length; i++) {
    marker = new google.maps.Marker({
      position: new google.maps.LatLng(locations[i][1], locations[i][2]),
      map: map,
      icon: image
    });

    google.maps.event.addListener(marker, 'click', (function(marker, i) {
      return function() {
        infowindow.setContent(locations[i][0]);
        infowindow.open(map, marker);


      }
    })(marker, i));
  }
