import {
    Component,
    AfterContentInit,
    AfterViewInit,
    OnChanges,
    OnDestroy,
    Input,
    Output,
    SimpleChanges,
    ViewChild, 
    ContentChildren,
    QueryList
} from '@angular/core';
import { LatLngLiteral } from 'leaflet';

import { MarkerManager } from '../services/marker.manager';
import {SpMapPopupComponent} from "../sp-map-popup/sp-map-popup.component";

@Component({
    selector: 'sp-map-circle-marker',
    template: '<ng-content></ng-content>',
    styles: ['']
})
export class SpMapCircleMarker implements AfterContentInit, OnChanges, OnDestroy {

    @Input() latitude: number;
    @Input() longitude: number;
    @Input() radius: number;
    @Input() stroke: boolean;
    @Input() color: string;
    @Input() weight: string;
    @Input() opacity: number;
    @Input() fill: boolean;
    @Input() fillColor: string;
    @Input() fillOpacity: number;

    @ContentChildren(SpMapPopupComponent) _popup: QueryList<SpMapPopupComponent>;

    constructor(private _markerManager: MarkerManager) { }

    ngAfterContentInit(): void {
        console.log(this._popup.first);
        this._markerManager.addCircleMarker(this, this._popup.first.content);
    }

    ngOnChanges(changes: SimpleChanges): void {
       if (changes['latitude'] || changes['longitude']) {

           let position: LatLngLiteral = <LatLngLiteral> {
               lat: changes['latitude'].currentValue,
               lng: changes['longitude'].currentValue
           }
       }
    }

    ngOnDestroy(): void {
        this._markerManager.deleteMarker(this);
    }
}