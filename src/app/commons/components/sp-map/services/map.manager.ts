import { Injectable } from '@angular/core';

import * as Leaflet from 'leaflet';
import { LatLng,
    LatLngLiteral,
    Polyline,
    CircleMarker,
    CircleMarkerOptions,
    Layer } from 'leaflet';

@Injectable()
export  class MapManager {

  private _map: Leaflet.Map;

  constructor() { }

  public createMap(container: HTMLElement, options: Leaflet.MapOptions): void {
    this._map = Leaflet.map(container, options);

    Leaflet.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
      attribution: "test"
    }).addTo(this._map);
  }

  // public createMap3(container: HTMLElement, options: Leaflet.MapOptions): Promise<void> {
  //   let map = Leaflet.map(container, options);
  //
  //   Leaflet.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
  //     attribution: "test"
  //   }).addTo(map);
  //
  //   this._mapResolver(map);
  //
  //   return;
  // }
  //
  // public createMap2(container: HTMLElement, options: Leaflet.MapOptions): Observable<Leaflet.Map> {
  //   return Rx.Observable.create((observer) => {
  //     let map = Leaflet.map(container, options);
  //
  //     Leaflet.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
  //       attribution: "test"
  //     }).addTo(map);
  //
  //     observer.next(map);
  //     observer.complete();
  //   });

  // public createMap2(container: HTMLElement, options: Leaflet.MapOptions): Observable<Leaflet.Map> {
  //   return Rx.Observable.create((observer: Observer) => {
  //     let map = Leaflet.map(container, options);
  //
  //     Leaflet.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
  //       attribution: "test"
  //     }).addTo(map);
  //
  //     observer.next(map);
  //   });
  // }

  public creatCircleMarker(coordinates: LatLng | LatLngLiteral, markerOptions?: CircleMarkerOptions, popupContent?: string): CircleMarker {
    var marker: Leaflet.CircleMarker = Leaflet.circleMarker(coordinates, markerOptions)

    if (popupContent != null) {
      marker.bindPopup(popupContent);
    }

    return marker.addTo(this._map);
  }

  public createPolyline(coordinates: LatLng[] | LatLngLiteral[]): Polyline {
    console.log("add polyline");

    let polyline: Polyline = Leaflet.polyline(coordinates);
    polyline.addTo(this._map);

    return Leaflet.polyline(coordinates);
  }

  public removeLayer(layer: Layer) {
    this._map.removeLayer(layer);
  }

  get map(): Leaflet.Map {
    return this._map;
  }


}


