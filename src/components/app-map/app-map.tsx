import { Component, Element } from '@stencil/core';

import { loadModules } from 'esri-loader';

@Component({
  tag: 'app-map',
  styleUrl: 'app-map.css'
})

export class AppMap {

  @Element() private el: HTMLElement;
  // @ViewChild('map') mapEl: ElementRef;
  // mapView:any = null;

  async componentWillLoad() {
    console.log('componentWillLoad');
  }

  async componentDidLoad() {

    loadModules(['esri/Map', 'esri/views/MapView'], {
        // use a specific version instead of latest 4.x
        url: 'https://js.arcgis.com/4.6/',
        // also lazy load the CSS for this version
        // NOTE: using view.css instead of main.css to save a few bytes
        css: 'https://js.arcgis.com/4.6/esri/css/main.css'
    }).then(([esriMap, esriMapView]) => {
      const mapEl = this.el.querySelector('.map-canvas');

      const map = new esriMap({
        basemap: "streets"
      });

      const view = new esriMapView({
        container: mapEl,
        map: map,
        zoom: 4,
        center: [15, 65] // longitude, latitude
      });

      console.log(view);
    });
  }

  render() {
    return (
        <div class='app-map'>
        </div>
    );
  }
}