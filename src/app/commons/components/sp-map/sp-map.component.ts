import { 
  Component,
   OnInit, 
   ElementRef,
   ContentChildren,
   QueryList 
} from '@angular/core';
import * as Leaflet from 'leaflet';

import { SpMapCircleMarker } from './sp-map-circle-marker/sp-map-circle-marker.component';
import { MapManager } from './services/map.manager';
import { MarkerManager } from './services/marker.manager';
import { PolylineManager } from './services/polyline.manager';
import { CircleDrawManager } from './services/circle-draw.manager';

@Component({
  selector: 'sp-map',
  templateUrl: './sp-map.component.html',
  styleUrls: ['./sp-map.component.css'],
  providers: [ MapManager, MarkerManager, PolylineManager, CircleDrawManager ]
})
export class SpMapComponent implements OnInit {

  private _map: Leaflet.Map;

  constructor(private _elemntRef: ElementRef, private _mapManager: MapManager) {}

  ngOnInit(): void {
    let mapContainer: HTMLElement = this._elemntRef.nativeElement.querySelector('.sp__map--container');

    this._mapManager.createMap(mapContainer, {
      center: [40.849174, 14.488077],
      zoom: 14
    });
  }
}
