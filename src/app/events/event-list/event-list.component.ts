import { Component, OnInit } from '@angular/core';
import {EVENTS} from "../eventArray";
import {Event} from "../event"

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {
  eventsArray: Event[] = EVENTS;
  constructor() { }

  ngOnInit() {
  }

}
