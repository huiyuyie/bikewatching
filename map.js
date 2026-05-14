import mapboxgl from 'https://cdn.jsdelivr.net/npm/mapbox-gl@2.15.0/+esm';
import { MAPBOX_TOKEN } from './config.js';

mapboxgl.accessToken = MAPBOX_TOKEN;

// Initialize the map
const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v12',
  center: [-71.09415, 42.36027], // [longitude, latitude]
  zoom: 12,
  minZoom: 5,
  maxZoom: 18
});

console.log('Mapbox map loaded:', map);