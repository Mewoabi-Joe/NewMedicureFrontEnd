import { Component, OnInit } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { WebSocketService } from 'src/app/services/web-socket.service';

@Component({
  selector: 'app-temperature',
  templateUrl: './temperature.component.html',
  styleUrls: ['./temperature.component.scss'],
})
export class TemperatureComponent implements OnInit {
  avgTemp: number = 37;
  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5'],
  };
  value: number = 30;
  previousValue: number = 37.8;
  units: string = 'degrees';
  constructor(private webSocketService: WebSocketService) {}

  ngOnInit(): void {
    //Ecouter quand parameters est evoyer
    this.webSocketService.listen('parameters').subscribe(
      (result) => {
        let parameter: any = result;

        console.log(parameter);

        //Mettre ajour la valeur de temperature en temp reelle
        this.previousValue = this.value;
        this.value = parameter.temperature;

        //Signaler au serveur que tu a recu les parametre par un message de retour
        this.webSocketService.emit('return', 'I got your message');
      },
      (error) => {},
      () => {}
    );
  }
}
