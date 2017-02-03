import { Injectable, EventEmitter } from '@angular/core';
import { Http, Headers, Response } from "@angular/http";
import { ActivatedRoute, Router } from "@angular/router";
import 'rxjs/Rx'

import { Video } from "./video"
import {Observable} from "rxjs";
import {AuthService} from "../auth.service";


@Injectable()
export class VideoService {
  videosChanged = new EventEmitter<Video[]>();
  private videos: Video[] = [];
  isAuthenticated = false;
  //  new Photo('Eden Back To School','Eden\'s picture for back to school Fall 2016', 'https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/13920942_10153777762794599_6398620272109907535_n.jpg?oh=beace499fd1d57fd17bc584fdfa0fb9b&oe=5922CCE2')
  //]
  constructor(private http: Http, private router: Router, private authService: AuthService ) {
    this.authService.isAuthenticated().subscribe(
      authStatus => this.isAuthenticated = authStatus
    );
  }

  isAuth() {
    return this.isAuthenticated;
  }

  getVideos() {
    return this.videos;
  }
  getVideo(id: number) {
    return this.videos[id];
  }

  deleteVideo(video: Video) {
    this.videos.splice(this.videos.indexOf(video), 1);
    this.storeData();

    // if(errorHappened){
    //   console.log("in else")
    //   this.router.navigate(['/photos/error'])
    // }
    // else{
    //   this.photos.splice(this.photos.indexOf(photo), 1)
    // }
  }

  addVideo(video: Video) {
    this.videos.push(video)
    this.http.put('https://projects-6a8af.firebaseio.com/videos/'+ this.videos.indexOf(video).toString() +'.json',JSON.stringify(video)).toPromise()
  }

  editVideo(oldVideo: Video, newVideo: Video) {
    this.videos[this.videos.indexOf(oldVideo)] = newVideo
    this.http.patch('https://projects-6a8af.firebaseio.com/videos/'+this.videos.indexOf(oldVideo)+'/.json',JSON.stringify(newVideo))
      .toPromise()
      // .catch((error:any) => {errorHappened=true} )
      //.then(success => {this.photos[this.photos.indexOf(oldPhoto)] = newPhoto},error => {this.router.navigate(['/photos/error'])} );
    // if(errorHappened){
    //   console.log("in else")
    //   this.router.navigate(['/photos/error'])
    //   }
    // else{
    //   this.photos[this.photos.indexOf(oldPhoto)] = newPhoto;
    // }
  }

  storeData(){
    const body = JSON.stringify(this.videos);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.put('https://projects-6a8af.firebaseio.com/videos.json', body, {headers: headers}).toPromise();
  }
  fetchData() {
    return this.http.get('https://projects-6a8af.firebaseio.com/videos.json')
      .map((response: Response) => response.json())
      .subscribe(
        (data: Video[]) => {
          if(!!data) {
            this.videos = data;
          }
          this.videosChanged.emit(this.videos);
        }
      );
  }





}
