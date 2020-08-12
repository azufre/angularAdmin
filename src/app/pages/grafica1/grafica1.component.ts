import { Component } from '@angular/core';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component {

  public labels1: string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  public data1 = [
    [350, 450, 100],
  ];

  public labels2: string[] = ['Mayor', 'Menor', 'Intermedio'];
  public data2 = [
    [100, 50, 70],
  ];

  public labels3: string[] = ['Enero', 'Febrero', 'Marzo'];
  public data3 = [
    [400, 200, 75],
  ];

  public labels4: string[] = ['Contabilidad', 'IT', 'Ventas'];
  public data4 = [
    [1500, 2000, 700],
  ];

}
