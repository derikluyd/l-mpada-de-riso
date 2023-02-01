var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -34.397, lng: 150.644},
    zoom: 8
  });

  fetch('/api/risks')
    .then(res => res.json())
    .then(risks => {
      risks.forEach(risk => {
        new google.maps.Marker({
          position: {lat: risk.latitude, lng: risk.longitude},
          map: map,
          title: risk.name
        });
      });
    });
}
