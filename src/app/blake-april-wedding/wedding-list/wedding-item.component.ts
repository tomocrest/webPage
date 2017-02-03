import { Component, OnInit, Input } from '@angular/core';
import { Wedding } from '../wed-obj'

@Component({
  selector: 'app-wedding-item',
  templateUrl: './wedding-item.component.html',
  styleUrls: ['./wedding-item.component.css']
})
export class WeddingItemComponent implements OnInit {
  @Input() wedding: Wedding;
  @Input() weddingId: number;
  constructor() { }

  ngOnInit() {
  }

}
