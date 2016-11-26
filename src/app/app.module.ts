import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import {SpMapModule} from "./commons/components/sp-map/sp-map.module";

import { AppComponent } from './app.component';

import { PositionService } from "./position.service";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    ReactiveFormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    SpMapModule
    // MapsModule
  ],
  providers: [PositionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
