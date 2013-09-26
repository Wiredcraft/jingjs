$(document).ready(function () {
    // Get Address
    var address = $('#info .address').text();
    
    // Start Mapbox
    var mapdiv = '<div id="map"></div>';
    $('#info .address').replaceWith(mapdiv);
    var map = L.mapbox.map('map', 'jamesford.map-hcxuhohe', {zoomControl: false}).setView([39.996, 116.332283], 14);

    // Do not touch the map!
    map.dragging.disable();
    map.touchZoom.disable();
    map.doubleClickZoom.disable();
    map.scrollWheelZoom.disable();

    // Add Marker
    var markerLayer = L.mapbox.markerLayer({
        type: 'FeatureCollection',
        features: [{
            type: 'Feature',
            properties: {
                address: address
            },
            geometry: {
                type: 'Point',
                coordinates: [116.332283, 39.995533]
            }
        }]
    })
    .addTo(map);

    // Customize marker & Popup by default
    markerLayer.eachLayer(function(layer) {
        var content = '<h3>' + layer.feature.properties.address + '<\/h3>';
        layer.bindPopup(content).openPopup();
    });
});