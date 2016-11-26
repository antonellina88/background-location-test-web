import { NgModule } from '@angular/core';

import { SpMapComponent } from "./sp-map.component";
import { SpMapCircleMarker } from "./sp-map-circle-marker/sp-map-circle-marker.component";
import { SpMapPolylineComponent } from "./sp-map-polyline/sp-map-polyline.component";
import { SpMapPolylinePointComponent } from "./sp-map-polyline/sp-map-polyline-point.component";
import { SpMapPopupComponent } from "./sp-map-popup/sp-map-popup.component";

@NgModule({
  declarations: [
    SpMapComponent,
    SpMapCircleMarker,
    SpMapPolylineComponent,
    SpMapPolylinePointComponent,
    SpMapPopupComponent
  ],
  exports: [
    SpMapComponent,
    SpMapCircleMarker,
    SpMapPolylineComponent,
    SpMapPolylinePointComponent,
    SpMapPopupComponent
  ]
})
export class SpMapModule {}
