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
          <ion-title>ESRI Map Web Component</ion-title>
        </ion-toolbar>
      </ion-header>,

      <esri-map base-map="streets" zoom="5"/>
    ];
  }
}