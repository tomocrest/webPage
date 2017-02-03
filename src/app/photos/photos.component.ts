import { Component, OnInit } from '@angular/core';

import { PhotoServiceService } from "./photo-service.service"

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

 constructor(photoService: PhotoServiceService){
   console.log("in photos component");
 }
  ngOnInit() {
  }

}
/*
 this.httpService.storeData().subscribe(
 data => console.log(data),
 error => console.error(error)
 */
