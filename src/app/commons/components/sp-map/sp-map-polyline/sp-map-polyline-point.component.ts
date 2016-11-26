import {
    Directive,
    OnInit,
    OnChanges,
    Input,
    Output,
    EventEmitter, SimpleChanges
} from '@angular/core';
import { LatLng, LatLngLiteral } from 'leaflet';


@Directive({
  selector: 'sp-map-polyline-point',
})
export class SpMapPolylinePointComponent implements OnInit, OnChanges {

  @Input() latitude: number;
  @Input() longitude: number;

  @Output() positionChanged: EventEmitter<void> =  new EventEmitter<void>();

  constructor() {}

  ngOnInit(): void {
    this.positionChanged.subscribe(() => console.log("test"));
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['latitude'] || changes['longitude']) {

      console.log('changes');

      let position: LatLngLiteral = <LatLngLiteral> {
        lat: changes['latitude'].currentValue,
        lng: changes['longitude'].currentValue
      }

      this.positionChanged.emit();


    }
  }
}
