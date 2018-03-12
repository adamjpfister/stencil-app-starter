import { Component } from '@stencil/core';


@Component({
  tag: 'app-map',
  styleUrl: 'app-map.css'
})

export class AppMap {

  render() {
    return [
      <ion-header>
        <ion-toolbar color="primary">
          <ion-title>Hello Map</ion-title>
        </ion-toolbar>
      </ion-header>,

      <map-canvas base-map="streets" zoom="5"></map-canvas>
    ];
  }
}