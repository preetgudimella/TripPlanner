
const mapboxgl = require('mapbox-gl');

mapboxgl.accessToken = "pk.eyJ1IjoianVzdGlubm4iLCJhIjoiY2pvZzczdTFhMGMzajNxcG53anAxZzlyNyJ9.8OxCtNgrLi__2yvpFLvIZw";

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

const buildMarker = (str, arr) => {
    let url = '';
    switch(str) {
        case 'hotel':
            url = 'http://i.imgur.com/D9574Cu.png';
            break;
        case 'activity':
            url = 'http://i.imgur.com/WbMOfMl.png';
            break;
        case 'restaurant':
            url = 'http://i.imgur.com/cqR6pUI.png';
            break;
        default:
            url = 'https://melbournechapter.net/images/pins-clipart-map-pin-9.png';
            break;    
    }
    const newMarker = document.createElement('div');
    newMarker.style.width = "32px";
    newMarker.style.height = "39px";
    newMarker.style.backgroundImage = `url(${url})`;
    return new mapboxgl.Marker(newMarker).setLngLat(arr).addTo(map);
}

module.exports = buildMarker;
