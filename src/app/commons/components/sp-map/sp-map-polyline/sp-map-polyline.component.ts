import {
    Directive,
    OnInit,
    AfterContentInit,
    ContentChildren,
    QueryList
} from '@angular/core';
import {Subscription} from "rxjs";

import {SpMapPolylinePointComponent } from "./sp-map-polyline-point.component";
import {PolylineManager} from "../services/polyline.manager";

@Directive({
  selector: 'sp-map-polylne'
})
export class SpMapPolylineComponent implements OnInit, AfterContentInit {

  @ContentChildren(SpMapPolylinePointComponent) points: QueryList<SpMapPolylinePointComponent>;

  private _subscriptions: Subscription[] = [];

  constructor(private _polylineManager: PolylineManager) {}

  ngOnInit(): void {

  }

  ngAfterContentInit(): void {
    this.points.forEach((point: SpMapPolylinePointComponent) => {
      console.log("subscribe to change");

      point.positionChanged.subscribe(() => {
        console.log("position changed");
      });

      // this._subscriptions.push(pointPositionChangedSubscription);
    });

    // this._points.toArray().filter((polyline) => console.log(polyline.latitude));

    this._polylineManager.addPolyline(this);
  }


  getPoints(): Array<SpMapPolylinePointComponent> {
    return this.points.toArray();
  }
}
