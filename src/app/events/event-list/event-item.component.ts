import { Component, Input } from '@angular/core';

import {Event} from "../event"

@Component({
  selector: 'app-event-item',
  templateUrl: './event-item.component.html',
  styleUrls: ['./event-item.component.css']
})
export class EventItemComponent {
  @Input() event: Event;
  @Input() eventID: number;
}
