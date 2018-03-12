/**
 * This is an autogenerated file created by the Stencil build process.
 * It contains typing information for all components that exist in this project
 * and imports for stencil collections that might be configured in your stencil.config.js file
 */
declare global {
  namespace JSX {
    interface Element {}
    export interface IntrinsicElements {}
  }
  namespace JSXElements {}

  interface HTMLStencilElement extends HTMLElement {
    componentOnReady(): Promise<this>;
    componentOnReady(done: (ele?: this) => void): void;
  }

  interface HTMLAttributes {}
}

import 'ionicons';
import '@ionic/core';


import {
  AppMap as AppMap
} from './components/app-map/app-map';

declare global {
  interface HTMLAppMapElement extends AppMap, HTMLStencilElement {
  }
  var HTMLAppMapElement: {
    prototype: HTMLAppMapElement;
    new (): HTMLAppMapElement;
  };
  interface HTMLElementTagNameMap {
    "app-map": HTMLAppMapElement;
  }
  interface ElementTagNameMap {
    "app-map": HTMLAppMapElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "app-map": JSXElements.AppMapAttributes;
    }
  }
  namespace JSXElements {
    export interface AppMapAttributes extends HTMLAttributes {
      
    }
  }
}


import {
  AppRoot as AppRoot
} from './components/app-root/app-root';

declare global {
  interface HTMLAppRootElement extends AppRoot, HTMLStencilElement {
  }
  var HTMLAppRootElement: {
    prototype: HTMLAppRootElement;
    new (): HTMLAppRootElement;
  };
  interface HTMLElementTagNameMap {
    "app-root": HTMLAppRootElement;
  }
  interface ElementTagNameMap {
    "app-root": HTMLAppRootElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "app-root": JSXElements.AppRootAttributes;
    }
  }
  namespace JSXElements {
    export interface AppRootAttributes extends HTMLAttributes {
      
    }
  }
}


import {
  MapCanvas as MapCanvas
} from './components/map-canvas/map-canvas';

declare global {
  interface HTMLMapCanvasElement extends MapCanvas, HTMLStencilElement {
  }
  var HTMLMapCanvasElement: {
    prototype: HTMLMapCanvasElement;
    new (): HTMLMapCanvasElement;
  };
  interface HTMLElementTagNameMap {
    "map-canvas": HTMLMapCanvasElement;
  }
  interface ElementTagNameMap {
    "map-canvas": HTMLMapCanvasElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "map-canvas": JSXElements.MapCanvasAttributes;
    }
  }
  namespace JSXElements {
    export interface MapCanvasAttributes extends HTMLAttributes {
      baseMap?: string;
      lat?: number;
      long?: number;
      version?: string;
      zoom?: string;
    }
  }
}

declare global { namespace JSX { interface StencilJSX {} } }
