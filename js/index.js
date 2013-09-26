$(document).ready(function () {
    // Get Address
    var address = $('#info .address').text();
    
    // Start Mapbox
    var mapdiv = '<div id="map"></div>';
    $('#info .address').replaceWith(mapdiv);
    var map = L.mapbox.map('map', 'jamesford.map-hcxuhohe', {zoomControl: false, attributionControl: false}).setView([39.996, 116.332283], 14);

    // No interaction
    map.dragging.disable();
    map.touchZoom.disable();
    map.doubleClickZoom.disable();
    map.scrollWheelZoom.disable();

    // Custom Icon
    var myIcon = L.icon({
        iconUrl: '../images/logo.png',
        // iconRetinaUrl: 'my-icon@2x.png',
        iconSize: [32, 32],
        iconAnchor: [16, 16],
        popupAnchor: [0, 0],
    });

    // Add location
    var marker = L.marker(new L.LatLng(39.995533, 116.332283), {
        icon: myIcon,
        clickable: false
    });
    marker.addTo(map);
    var content = '<h3>' + address + '<\/h3>';
    marker.bindPopup(content, {closeButton: false, closeOnClick: false}).openPopup();
});