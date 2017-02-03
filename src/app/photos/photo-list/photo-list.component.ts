import { Component, OnInit } from '@angular/core';

import {PhotoServiceService} from "../photo-service.service";
import {Photo} from "../photo";

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {
  photos: Photo[] = [];
  constructor(private photoService: PhotoServiceService) {

  }

  ngOnInit() {
    this.getPhotos();
    this.photos = this.photoService.getPhotos();
    this.photoService.photosChanged.subscribe(
      (photos: Photo[])=> {
        if(!!photos) {
          this.photos = photos;
        }
      }
    );
  }
  // submitChanges(){
  //   this.photoService.storeData().subscribe(
  //     data => console.log(data),
  //     error => console.error(error)
  //   );
  // }
  getPhotos(){
    this.photoService.fetchData();
  }

  isAuth(){
    return this.photoService.isAuth();
  }

}
