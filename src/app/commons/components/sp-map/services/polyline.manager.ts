import { Injectable } from '@angular/core';
import {
    LatLng,
    LatLngLiteral,
    CircleMarker,
    Polyline } from 'leaflet';

import { MapManager } from './map.manager';
import {SpMapPolylineComponent} from '../sp-map-polyline/sp-map-polyline.component';
import {SpMapPolylinePointComponent} from "../sp-map-polyline/sp-map-polyline-point.component";

@Injectable()
export class PolylineManager {

    private polyLines: Polyline[] = [];

    constructor(private _mapManager: MapManager) {}

    addPolyline(polyLine: SpMapPolylineComponent): void {
        let coordinates: LatLngLiteral[] = this._covertPolylineToCoordinates(polyLine);
        let polyLineCreated: Polyline = this._mapManager.createPolyline(coordinates);

        this.polyLines.push(polyLineCreated);
    }

    private _covertPolylineToCoordinates(polyline: SpMapPolylineComponent): LatLngLiteral[] {
        let coordinates: LatLngLiteral[] = polyline.getPoints().map((point: SpMapPolylinePointComponent) => {
           return <LatLngLiteral> {
             lat: point.latitude,
             lng: point.longitude }
        });

        return coordinates;
    }
}