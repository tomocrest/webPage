import { Component, OnInit } from '@angular/core';

import { Vacation } from '../vacation'
import { VACATIONS } from '../vacationsArray'


@Component({
  selector: 'app-vacations-list',
  template: `<div class="row">
  <div class="col-xs-12">
    <ul class="list-group">
      <app-vacation-item *ngFor="let vacation of vacationsArray; let i = index" [vacation]="vacation" [vacationID]="i">list</app-vacation-item>
    </ul>
  </div>
</div>
`,
  styles: []
})
export class VacationsListComponent implements OnInit {
  vacationsArray: Vacation[] = VACATIONS;

  constructor() { }

  ngOnInit() {
  }

}
