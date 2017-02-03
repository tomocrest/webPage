import { Component, OnInit } from '@angular/core';

import { Video } from '../video'
import { VideoService } from '../video.service'
@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {
  videos: Video[] = [];
  constructor(private videoService: VideoService) {

  }

  ngOnInit() {
    this.getVideos();
    this.videos = this.videoService.getVideos();
    this.videoService.videosChanged.subscribe(
      (videos: Video[])=> {
        if(!!videos) {
          this.videos = videos;
          console.log(this.videos)
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
  getVideos(){
    this.videoService.fetchData();
  }

  isAuth(){
    return this.videoService.isAuth();
  }
}
