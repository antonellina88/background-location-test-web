import {Injectable} from '@angular/core';
import * as Leaflet from 'leaflet';
import LatLng = L.LatLng;
import latLng = L.latLng;

@Injectable()
export class MapsManager {

  private _map: Leaflet.Map;

  constructor() {}

  createMap(element: HTMLElement, mapOptions?: Leaflet.MapOptions) {
    this._map = Leaflet.map(element, mapOptions);

    Leaflet.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
      attribution: "test"
    }).addTo(this._map);

    Leaflet.circleMarker(latLng(40.850538, 14.490489), {
      radius: 6,
      fillOpacity: 1
    }).addTo(this._map);

    Leaflet.circleMarker(latLng(40.849174, 14.488077), {
      radius: 6,
      fillOpacity: 1
    }).addTo(this._map);

    Leaflet.circleMarker(latLng(40.855322, 14.520823), {
      radius: 6,
      fillOpacity: 1
    }).addTo(this._map);

    Leaflet.circleMarker(latLng(40.862800, 14.495639), {
      radius: 6,
      fillOpacity: 1
    }).addTo(this._map);
    
    Leaflet.polyline([[40.850538, 14.490489], [40.849174, 14.488077], [40.855322, 14.520823], [40.862800, 14.495639]])
      .addTo(this._map);
  }

}
