import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs/Rx";
import {
  FormArray,
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from "@angular/forms";

import { CruiseService } from "../cruise.service";
import { Cruise } from "../cruise-obj"

@Component({
  selector: 'app-cruise-edit',
  templateUrl: './cruise-edit.component.html',
  styleUrls: ['./cruise-edit.component.css']
})
export class CruiseEditComponent implements OnInit, OnDestroy {
  cruiseForm: FormGroup;
  private cruiseIndex: number;
  private cruise: Cruise;
  private isNew = true;
  private subscription: Subscription;

  constructor(private route: ActivatedRoute,
              private cruiseService: CruiseService,
              private formBuilder: FormBuilder,
              private router: Router) {}

  ngOnInit() {
    this.subscription = this.route.params.subscribe(
      (params: any) => {
        if (params.hasOwnProperty('id')) {
          this.isNew = false;
          this.cruiseIndex = +params['id'];
          this.cruise = this.cruiseService.getCruise(this.cruiseIndex);
          if(this.cruise == null){
            this.cruise = {
              name:"",
              description:"",
              imagePath:""
            }
            this.router.navigate(['/cruise']);
          }
        } else {
          this.isNew = true;
          this.cruise = null;
        }
        this.initForm();
      }
    );
  }

  onSubmit() {
    const newCruise = this.cruiseForm.value;
    if (this.isNew) {
      this.cruiseService.addCruise(newCruise);
    } else {
      this.cruiseService.editCruise(this.cruise, newCruise);
    }
    this.cruiseService.storeData();
    this.router.navigate(['/cruise']);
  }

  onCancel() {
    this.router.navigate(['/cruise']);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  private navigateBack() {
    this.router.navigate(['../']);
  }

  private initForm() {
    let cruiseName = '';
    let cruiseImagePath = '';
    let cruiseContent = '';

    if (!this.isNew) {
      cruiseName = this.cruise.name;
      cruiseImagePath = this.cruise.imagePath;
      cruiseContent = this.cruise.description;
    }
    this.cruiseForm = this.formBuilder.group({
      name: [cruiseName, Validators.required],
      imagePath: [cruiseImagePath, Validators.required],
      description: [cruiseContent, Validators.required]
    });
  }


}
