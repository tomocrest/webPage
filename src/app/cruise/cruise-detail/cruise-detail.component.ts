import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs/Rx";

import { Cruise } from "../cruise-obj";
import { CruiseService } from '../cruise.service'

@Component({
  selector: 'app-cruise-detail',
  templateUrl: './cruise-detail.component.html',
  styleUrls: ['./cruise-detail.component.css']
})
export class CruiseDetailComponent implements OnInit, OnDestroy {
  selectedCruise: Cruise;
  private cruiseIndex: number;
  private subscription: Subscription;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private cruiseService: CruiseService) {}

  ngOnInit() {
    this.subscription = this.route.params.subscribe(
      (params: any) => {
        this.cruiseIndex = params['id'];
        this.selectedCruise = this.cruiseService.getCruise(this.cruiseIndex);
      }
    );
  }

  onEdit() {
    this.router.navigate(['vacations/cruise', this.cruiseIndex, 'edit']);
  }

  onDelete() {
    this.cruiseService.deleteCruise(this.selectedCruise);
    this.router.navigate(['vacations/cruise']);
  }

  isAuth(){
    return this.cruiseService.isAuth();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
