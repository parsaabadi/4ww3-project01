/*
Looks at map, gets location and assigns it to variable
*/
function initMap() {
  const pinksLoco = { lat: 43.25769402308975, lng: -79.91881720809519 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 16,
    center: pinksLoco,
  });
 
  new google.maps.Marker({
    position: pinksLoco,
    map,
  });
}