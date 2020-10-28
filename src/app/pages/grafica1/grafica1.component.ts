import { Component, Input } from '@angular/core';

import { MultiDataSet, Label, Color } from 'ng2-charts';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component {

 titulo1: string = 'Ventas'

  public labels1: string[] = ['Nieve', 'Chiles rellenos','Pozole'];
  public data1 = [
    [20,10,5]
  ];
}
