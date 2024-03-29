//mapa buffer
const mapabuffer = document.getElementById('mapabuffer');
const mapab = L.map(mapabuffer).setView([ -17.9647 ,-67.106],13);

//capa de openstreet
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(mapab);

// Agregar mapa base
var carto_light = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {attribution: '©OpenStreetMap, ©CartoDB',subdomains: 'abcd',maxZoom: 24});

// Agregar plugin MiniMap
var minimap = new L.Control.MiniMap(carto_light,
    {
        toggleDisplay: true,
        minimized: false,
        position: "bottomleft"
}).addTo(mapab);

// Agregar escala
 new L.control.scale({position:'bottomright'}).addTo(mapab);

// Agregar capa en formato GeoJson
var lpuntos = L.geoJson(puntos,{
    pointToLayer: function (feature, lating){
        var markerr = L.marker(lating, {});
        L.layerGroup().addLayer(markerr);
        return markerr;//new L.circleMarker(lating ,{});;
    }
}).addTo(mapab);

//agregar la locacion buscar
var lc = L.control.locate({
    position: 'topright',
    string: {tittle:"Mostrarme mi ubicacion"}
}).addTo(mapab);

//buffer de 100 en puntos
var lbuffer2 = new L.geoJson(buffer_puntos200, {
    style: {
        weight: 1.3, // grosor de línea
        color: 'blue', // color de línea
        opacity: 1.0, // tansparencia de línea
        fillColor: 'blue', // color de relleno
        fillOpacity: 1.0 // transparencia de relleno
      }
  }
  ).addTo(mapab);

  var lbuffer1 = new L.geoJson(buffer_puntos100, {
    style: {
        weight: 1.3, // grosor de línea
        color: 'green', // color de línea
        opacity: 1.0, // tansparencia de línea
        fillColor: 'green', // color de relleno
        fillOpacity: 1.0 // transparencia de relleno
      }
  }
  ).addTo(mapab);



//ver mapa en pantalla completa
function fullScreenviewb(){
  mapabuffer.requestFullscreen();
}

L.control.browserPrint({position: 'bottomright', title: 'Imprimir mapa'}).addTo(mapab);


