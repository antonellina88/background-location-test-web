import { NgModule } from "@angular/core";
import {MapsComponent} from "./maps.component";
import {MapsManager} from "./maps.manager";

@NgModule({
  declarations: [MapsComponent],
  providers: [MapsManager],
  exports: [MapsComponent]
})
export class MapsModule {}
