import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs/Rx";

import { Photo } from "../photo";
import { PhotoServiceService } from '../photo-service.service'

@Component({
  selector: 'app-photo-detail',
  templateUrl: './photo-detail.component.html',
  styleUrls: ['./photo-detail.component.css']
})
export class PhotoDetailComponent implements OnInit, OnDestroy {
  selectedPhoto: Photo;
  private photoIndex: number;
  private subscription: Subscription;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private photoService: PhotoServiceService) {}

  ngOnInit() {
    this.subscription = this.route.params.subscribe(
      (params: any) => {
        this.photoIndex = params['id'];
        this.selectedPhoto = this.photoService.getPhoto(this.photoIndex);
        if(this.selectedPhoto == null){
          this.router.navigate(['/photos']);
          return;
        }
      }
    );
  }

  onEdit() {
    this.router.navigate(['/photos', this.photoIndex, 'edit']);
  }

  isAuth(){
    return this.photoService.isAuth();
  }

  onDelete() {
    this.photoService.deletePhoto(this.selectedPhoto);
    this.router.navigate(['/photos']);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
