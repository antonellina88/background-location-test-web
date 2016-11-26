import {OnInit, ElementRef, Component} from "@angular/core";
import {MapsManager} from "./maps.manager";

@Component({
  selector: 'maps',
  templateUrl: 'maps.component.html',
  providers: [MapsManager]
})
export class MapsComponent implements OnInit {

  constructor(private _element: ElementRef, private _mapsManager: MapsManager) {}

  ngOnInit(): void {
    let mapsContainer: HTMLElement = this._element.nativeElement.querySelector('.map-container');

    this._mapsManager.createMap(mapsContainer, {
      center: [40.849174, 14.488077],
      zoom: 14
    });

    console.log("test");
  }
}
