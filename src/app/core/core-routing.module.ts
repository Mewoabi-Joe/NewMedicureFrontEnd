import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoreComponent } from './core.component';

import { TemperatureComponent } from './temperature/temperature.component';
import { HeartRateComponent } from './heart-rate/heart-rate.component';
import { LieDetectorComponent } from './lie-detector/lie-detector.component';

const routes: Routes = [
  { path: '', component: CoreComponent,
    children:[
      {path:'', redirectTo:'temperature' },
      { path: 'temperature', component: TemperatureComponent },
      { path: 'heartrate', component:HeartRateComponent },
      { path: 'liedetector', component: LieDetectorComponent },
      //{path:'settings', component: SettingsComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
