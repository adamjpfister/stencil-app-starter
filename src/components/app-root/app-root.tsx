import '@ionic/core';
import { Component } from '@stencil/core';


@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css'
})

export class AppRoot {

  render() {
    return [
      <ion-app>

        <ion-router>
          <ion-route path="/" component="app-map"></ion-route>
        </ion-router>

        <ion-nav></ion-nav>

      </ion-app>
    ];
  }
}