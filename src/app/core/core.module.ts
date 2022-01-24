import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { CoreComponent } from './core.component';
import { NavComponent } from './nav/nav.component';
import { TemperatureComponent } from './temperature/temperature.component';
import { HeartRateComponent } from './heart-rate/heart-rate.component';
import { LieDetectorComponent } from './lie-detector/lie-detector.component';
import { SettingsComponent } from './settings/settings.component';

import { NgxChartsModule } from '@swimlane/ngx-charts';

@NgModule({
  declarations: [
    CoreComponent,
    NavComponent,
    TemperatureComponent,
    HeartRateComponent,
    LieDetectorComponent,
    SettingsComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    NgxChartsModule
  ]
})
export class CoreModule { }
