import { Injectable } from '@angular/core';
import { LatLngLiteral, CircleMarker, CircleMarkerOptions } from 'leaflet';

import { MapManager } from './map.manager';
import { SpMapCircleMarker } from '../sp-map-circle-marker/sp-map-circle-marker.component';

@Injectable()
export class MarkerManager {

    private _markers: Map<SpMapCircleMarker, CircleMarker> = new Map<SpMapCircleMarker, CircleMarker>();

    constructor(private _mapManager: MapManager) { }

    public addCircleMarker(circleMarker: SpMapCircleMarker, popupContent?: string): void {

        let markerOptions: CircleMarkerOptions = <CircleMarkerOptions> {
           radius: circleMarker.radius || 10,
           stroke: circleMarker.stroke || true,
           color: circleMarker.color || '#3388ff',
           weight: circleMarker.weight || 3,
           opacity: circleMarker.opacity || 1.0,
           fill: circleMarker.fill || true,
           fillColor: circleMarker.fillColor || '#3388ff',
           fillOpacity: circleMarker.fillOpacity || 0.2
        };

        let circleMarkerDrawed: CircleMarker = this._mapManager.creatCircleMarker(<LatLngLiteral> {
            lat: circleMarker.latitude,
            lng: circleMarker.longitude
        }, markerOptions, popupContent);

        this._markers.set(circleMarker, circleMarkerDrawed);
    }

    public deleteMarker(circleMarker: SpMapCircleMarker): void {
        let markerDrawed: CircleMarker = this._markers.get(circleMarker);

        this._mapManager.removeLayer(markerDrawed);
    }
}