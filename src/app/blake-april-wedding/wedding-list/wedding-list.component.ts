import { Component, OnInit } from '@angular/core';

import { Wedding } from '../wed-obj'
import { WeddingService } from '../wedding.service'

@Component({
  selector: 'app-wedding-list',
  templateUrl: './wedding-list.component.html',
  styleUrls: ['./wedding-list.component.css']
})
export class WeddingListComponent implements OnInit {

  weddings: Wedding[] = [];

  constructor(private weddingService: WeddingService) {}

  ngOnInit() {
    this.weddingService.fetchData();
    this.weddings = this.weddingService.getWeddings();
    this.weddingService.weddingChanged.subscribe(
      (weddings: Wedding[]) => {
        if (!!weddings) {
          this.weddings = weddings;
        }
      }
    );
  }
  isAuth(){
    return this.weddingService.isAuth();
  }

}
