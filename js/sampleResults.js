/*
initializes map functions, we do the same thing as individual object but add custom markers,
for both maps
*/

function initMap() {
   var options = {
      zoom:15,
      center: { lat:43.26103522111267, lng:-79.91918247917609} //Coordinates of Mac
   }

/* 
Declares maps, refers to id created in css, we create a function that initializes the specifications
of the map, when marker is clicked, the specs for that marker are displayed.
*/
var map = new google.maps.Map(document.getElementById('map01'), options);
var map02 = new google.maps.Map(document.getElementById('map02'), options);

function addMarker(prop) {
   var marker = new google.maps.Marker({
      position: prop.coordinates, // Passing the coordinates
      map:map, //Map that we need to add
   });
   if(prop.iconImage) { marker.setIcon(prop.iconImage); }
   if(prop.content) { 
      var information = new google.maps.InfoWindow({
      content: prop.content
      });
      
      marker.addListener('click', function() {
      information.open(map, marker);
      });
   }
   
}
/* 
Declares maps, refers to id created in css, we create a function that initializes the specifications
of the map, when marker is clicked, the specs for that marker are displayed. This is for the sample
result map using the api key again.
*/
function addMarker02(prop) {
   var marker = new google.maps.Marker({
      position: prop.coordinates, // Passing the coordinates
      map:map02, //Map that we need to add
   });
   if(prop.iconImage) { marker.setIcon(prop.iconImage); }
   if(prop.content) { 
      var information = new google.maps.InfoWindow({
      content: prop.content
      });
      
      marker.addListener('click', function() {
      information.open(map02, marker);
      });
   }
}
/* 
These are the marker location and specs when clicked, content shows.
*/
addMarker({
   coordinates:{lat: 43.25772918691246,lng: -79.91895668252349},
   content:'<h4>Pinks,1335 Main St W, Hamilton, ON L8S 1C6</h4>'
});

addMarker({
   coordinates:{lat: 43.25816, lng: -79.9414},
  
   content:'<h4>Subway,119 Osler Dr Unit #11, Dundas, ON L9H6X4</h4>'
});

addMarker02({
   coordinates:{lat: 43.25772918691246,lng: -79.91895668252349},
   content:'<h4>Pinks,1335 Main St W, Hamilton, ON L8S 1C6</h4>'
});

addMarker02({
   coordinates:{lat: 43.25816, lng: -79.9414},
  
   content:'<h4>Subway,119 Osler Dr Unit #11, Dundas, ON L9H6X4</h4>'
});

}
