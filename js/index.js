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

    // Add location
    var marker = L.marker(new L.LatLng(39.995533, 116.332283), {
        icon: L.mapbox.marker.icon(),
        clickable: false
    });
    marker.addTo(map);
    var content = '<h3>' + address + '<\/h3>';
    marker.bindPopup(content, {closeButton: false, closeOnClick: false}).openPopup();
});