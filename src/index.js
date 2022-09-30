const Cesium = require('cesium/Cesium');
window.Cesium = Cesium; // expose Cesium to the OL-Cesium library
require('./css/main.css');
require('cesium/Widgets/widgets.css');

import 'ol/ol.css';

import Map from 'ol/Map';
import TileLayer from 'ol/layer/Tile';
import View from 'ol/View';
import TileWMS from 'ol/source/TileWMS';

import OLCesium from 'ol-cesium';

Cesium.Ion.defaultAccessToken = 'CESIUM_TOKEN_HERE';

const map = new Map({
  layers: [
    new TileLayer({
      source: new TileWMS({
        url: 'https://ows.terrestris.de/osm/service?',
        params: {'LAYERS': 'Dark'},
        serverType: 'geoserver',
        transition: 0,
      }),
    })
  ],
  target: 'map',
  view: new View({
    center: [0, 0],
    zoom: 2
  })
});

const ol3d = new OLCesium({ map });

const scene = ol3d.getCesiumScene();
scene.terrainProvider = Cesium.createWorldTerrain();

const tileset = new Cesium.Cesium3DTileset({
  url: Cesium.IonResource.fromAssetId(96188) // Check if this ID is the same in your Asset list
});
scene.primitives.add(tileset);

ol3d.setEnabled(false);

document
  .getElementById('toggler')
  .addEventListener('click', () => ol3d.setEnabled(!ol3d.getEnabled()));
