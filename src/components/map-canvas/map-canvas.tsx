import { Component, Element, Prop } from '@stencil/core';
import { loadModules } from 'esri-loader';


@Component({
  tag: 'map-canvas',
  styleUrl: 'map-canvas.css'
})

export class MapCanvas {

  @Element() el: HTMLElement;

  @Prop() baseMap = 'streets';
  @Prop() zoom = '4';
  @Prop() lat = 15;
  @Prop() long = 64;
  @Prop() version = '4.6';

  async componentDidLoad() {

    const results = await loadModules(['esri/Map', 'esri/views/MapView'], {
      // use a specific version instead of latest 4.x
      url: `https://js.arcgis.com/${this.version}/`,
      // also lazy load the CSS for this version
      // NOTE: using view.css instead of main.css to save a few bytes
      css: `https://js.arcgis.com/${this.version}/esri/css/main.css`
    });

    const esriMap = results[0];
    const esriMapView = results[1];

    const map = new esriMap({
      basemap: this.baseMap
    });

    const view = new esriMapView({
      container: this.el,
      map: map,
      zoom: this.zoom,
      center: [this.lat, this.long]
    });

    console.log(view);
  }

}