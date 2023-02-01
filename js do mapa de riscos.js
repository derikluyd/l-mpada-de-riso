// ESTOU INCLUINDO O GOOGLE MAPS JS API NA PAGINA HTML E CHAMANDO A FUNÇÃO INIMAP QUANDO CARREGAR"

var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -34.397, lng: 150.644},
    zoom: 8
  });
}
