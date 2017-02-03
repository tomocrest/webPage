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

import {PhotoServiceService} from "../photo-service.service";
import {Photo} from "../photo";

@Component({
  selector: 'app-photo-edit',
  templateUrl: './photo-edit.component.html',
  styleUrls: ['./photo-edit.component.css']
})
export class PhotoEditComponent implements OnInit {
  photoForm: FormGroup;
  private photoIndex: number;
  private photo: Photo;
  private isNew = true;
  private subscription: Subscription;

  constructor(private route: ActivatedRoute,
              private photoService: PhotoServiceService,
              private formBuilder: FormBuilder,
              private router: Router) {}

  ngOnInit() {
    this.subscription = this.route.params.subscribe(
      (params: any) => {
        if (params.hasOwnProperty('id')) {
          this.isNew = false;
          this.photoIndex = +params['id'];
          this.photo = this.photoService.getPhoto(this.photoIndex);
          if(this.photo == null){
            this.photo = {
              name:"",
              description:"",
              imagePath:""
            };
            this.router.navigate(['/photos']);
          }
        } else {
          this.isNew = true;
          this.photo = null;
        }
        this.initForm();
      }
    );
  }

  isAuth(){
    return this.photoService.isAuth();
  }

  onSubmit() {
    const newPhoto = this.photoForm.value;
    if (this.isNew) {
      this.photoService.addPhoto(newPhoto);
    } else {
      this.photoService.editPhoto(this.photo, newPhoto);
    }
    this.photoService.storeData()
      .then(success => {this.router.navigate(['photos']);},error => {this.router.navigate(['/photos/error'])} );;

  }

  onCancel() {
    this.router.navigate(['photos']);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  private navigateBack() {
    this.router.navigate(['../']);
  }

  private initForm() {
    let photoName = 'Eden, Capri and Summer';
    let photoImageUrl = 'https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/11147032_10153568330328930_6308460685104206247_n.jpg?oh=1ba960bb6ce884ba765282eabb3fc6f8&oe=58DCB82A';
    let photoContent = 'Family Pictures';

    if (!this.isNew){
      photoName = this.photo.name;
      photoImageUrl = this.photo.imagePath;
      photoContent = this.photo.description;
    }
    this.photoForm = this.formBuilder.group({
      name: [photoName, Validators.required],
      imagePath: [photoImageUrl, Validators.required],
      description: [photoContent, Validators.required]
    });
  }

}
