function initMap() {
    const pinksLoco = { lat: 43.25769402308975, lng: -79.91881720809519 };
    const subwayLoco = { lat: 43.25756904970684, lng: -79.91881251180244 };
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 16,
      center: pinksLoco,
      center: subwayLoco,
    });
   
    new google.maps.Marker({
      position: pinksLoco,
      position: subwayLoco,
      map,
    });
  }