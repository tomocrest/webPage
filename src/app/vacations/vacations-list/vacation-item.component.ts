import { Component, Input} from '@angular/core';

import { Vacation } from '../vacation'

@Component({
  selector: 'app-vacation-item',
  templateUrl: './vacation-item.component.html',
  styleUrls: ['./vacation-item.component.css']
})
export class VacationItemComponent {
  @Input() vacation: Vacation;
  @Input() vacationID: number;

}

