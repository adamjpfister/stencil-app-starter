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


import {
  MapCanvas as EsriMap
} from './components/esri-map/esri-map';

declare global {
  interface HTMLEsriMapElement extends EsriMap, HTMLStencilElement {
  }
  var HTMLEsriMapElement: {
    prototype: HTMLEsriMapElement;
    new (): HTMLEsriMapElement;
  };
  interface HTMLElementTagNameMap {
    "esri-map": HTMLEsriMapElement;
  }
  interface ElementTagNameMap {
    "esri-map": HTMLEsriMapElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "esri-map": JSXElements.EsriMapAttributes;
    }
  }
  namespace JSXElements {
    export interface EsriMapAttributes extends HTMLAttributes {
      baseMap?: string;
      lat?: number;
      long?: number;
      version?: string;
      zoom?: string;
    }
  }
}

declare global { namespace JSX { interface StencilJSX {} } }
