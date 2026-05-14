import mapboxgl from 'https://cdn.jsdelivr.net/npm/mapbox-gl@2.15.0/+esm';

mapboxgl.accessToken = 'pk.eyJ1IjoiaHVpeXV5aWUiLCJhIjoiY21wNXp5M3QyMWoyYjJzcHAwZ2Y4OTlsYyJ9.W1pocc3K7HhQuiUFhDsqug';

const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v12',
  center: [-71.09415, 42.36027],
  zoom: 12,
  minZoom: 5,
  maxZoom: 18
});

console.log('Mapbox map loaded:', map);