import {Component, Input} from '@angular/core';
import {Cruise} from "../cruise-obj";

@Component({
  selector: 'app-cruise-item',
  templateUrl: './cruise-item.component.html',
  styleUrls: ['./cruise-item.component.css']
})
export class CruiseItemComponent{
  @Input() cruise: Cruise;
  @Input() cruiseId: number;

}
