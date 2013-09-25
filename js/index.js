$(document).ready(function () {
    // Mapbox
    var mapdiv = '<div id="map"></div>';
    $('#info').append(mapdiv);

    var map = L.mapbox.map('map', 'jamesford.map-hcxuhohe').setView([39.995533, 116.332283], 14);
    var markerLayer = L.mapbox.markerLayer({
        type: 'FeatureCollection',
        features: [{
            type: 'Feature',
            properties: {
                address: "China, Beijing, Haidian, Zhongguancun East Rd, 1号院10号楼 邮政编码: 100084"
            },
            geometry: {
                type: 'Point',
                coordinates: [116.332283, 39.995533]
            }
        }]
    })
    .addTo(map);

    markerLayer.eachLayer(function(layer) {
        var content = '<h3>Address<\/h3>' + '<p>' + layer.feature.properties.address + '<\/h2>';
        layer.bindPopup(content).openPopup();
    });
});