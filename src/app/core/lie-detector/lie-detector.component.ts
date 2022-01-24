import { Component, OnInit } from '@angular/core';
import { multi } from './data';

@Component({
  selector: 'app-lie-detector',
  templateUrl: './lie-detector.component.html',
  styleUrls: ['./lie-detector.component.scss']
})
export class LieDetectorComponent implements OnInit {
  avgTemp:number= 37;
  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };
  value: number = 30;
  previousValue: number = 37.8;
  units: string = 'degrees';
  heartRate:number = 60;
  multi: any[] = [];
  view: any[] = [700, 300];

  // options
  legend: boolean = false;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Year';
  yAxisLabel: string = 'Population';
  timeline: boolean = true;


  constructor() {
    Object.assign(this, { multi });
  }

  onSelect(data:any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data:any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data:any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }


  ngOnInit(): void {
  }

}
