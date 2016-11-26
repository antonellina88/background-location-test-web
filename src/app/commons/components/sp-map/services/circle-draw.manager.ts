import { Injectable, NgZone } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import * as Leaflet from 'leaflet';

import { MapManager } from './map.manager';

@Injectable()
export class CircleDrawManager {

    private _isDrawingEnabled: boolean = false;
    private _shape: Leaflet.Circle;
    private _startLatLng: Leaflet.LatLng;

    constructor(private _zone: NgZone, private _mapManager: MapManager) {
        console.log('circle drawer init');
        this._addListeners();
    }

    get isDrawingEnabled(): boolean {
        return this._isDrawingEnabled;
    }

    set enableDrawing(status: boolean) {
        this._isDrawingEnabled = status;
    }

    private _addListeners(): void {
        this._createEventObservable('mousedown').subscribe((event: Leaflet.MouseEvent) => {
            console.log(event.latlng);
            let map: Leaflet.Map = this._mapManager.map; 
            map.dragging.disable();

            this._startLatLng = event.latlng;
            this._isDrawingEnabled = true;
        });

        this._createEventObservable('mousemove').subscribe((event: Leaflet.MouseEvent) => {
            console.log('mouse move');

            if (event.latlng !== undefined && this._isDrawingEnabled) {
                this._drawShape(event.latlng);
            }
        });

        this._createEventObservable('mouseup').subscribe((event: MouseEvent) => {
            console.log('mouseup');

            let map: Leaflet.Map = this._mapManager.map; 
            this._isDrawingEnabled = false;
            map.dragging.enable();
            this._shape = null;
        });
    }

    private _drawShape(latLng: Leaflet.LatLng): void {
       let map: Leaflet.Map = this._mapManager.map;        

       if (!this._shape) {
           this._shape = Leaflet.circle(this._startLatLng, this._startLatLng.distanceTo(latLng));
           map.addLayer(this._shape);

       } else {
           this._shape.setRadius(this._startLatLng.distanceTo(latLng));
       }
    }

    private _createEventObservable(eventName: string): Observable<Leaflet.Event> {
        let map: Leaflet.Map = this._mapManager.map;

        return Observable.create((observer: Observer<Leaflet.Event>) => {
            map.addEventListener(eventName, (event: Leaflet.Event) => this._zone.run(() => observer.next(event)));
        });
    }
}