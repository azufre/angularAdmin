import { Component, Input } from '@angular/core';
import {MultiDataSet, Label, Color} from 'ng2-charts';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent {

  @Input() title: string = "Temp";
  @Input() labels: Label[] = [];
  @Input() data: MultiDataSet = [
    [],
  ];

  public colors : Color[] = [
    {backgroundColor:['#6857E6', '#009FEE', '#F02059']}
  ];

}
