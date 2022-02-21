//these are base maps, each maps can be used in the layers parameter below
var light = L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'
});


//this is how we start our map, we inform where to center it and at hat zoom lvl (greater the zoom level closer it is)
//The 'map'refers to the div that will hold the map
var map = L.map('map', {
    center: [38.831502, -104.804521],
    zoom: 8,
    layers: [light]
});

var campGroundIcon = L.icon({
    iconUrl: './campground-icon.svg',
    iconSize: [20, 20]
})

$.ajax({
    url: "http://localhost:3000/data",
    type: "get",
    crossDomain: true,
    success: function (data) {
        console.log(data)
        L.geoJson(data, {
            
            pointToLayer: function (feature, latlng) {
                var marker = L.marker(latlng, { icon: campGroundIcon });
                marker.bindPopup('Name: ' + feature.properties.spot_name + '<br/>' + 'Best time to go: ' +feature.properties.best_time);
                return marker;
            }
        }).addTo(map);
    },
    error: function(err){
        console.log(err)
    }
});
