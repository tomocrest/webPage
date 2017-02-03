import { Component, OnInit, OnDestroy, Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router, ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs/Rx";

import { Video } from "../video";
import { VideoService } from '../video.service'

@Pipe({name:'safe'})
export class SafePipe implements PipeTransform{
  constructor(private sanitizer: DomSanitizer){}
  transform(url){
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}

@Component({
  selector: 'app-video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.css']
})


export class VideoDetailComponent implements OnInit {
  selectedVideo: Video;
  private videoIndex: number;
  private subscription: Subscription;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private videoService: VideoService) {}



  ngOnInit() {
    this.subscription = this.route.params.subscribe(
      (params: any) => {
        this.videoIndex = params['id'];
        this.selectedVideo = this.videoService.getVideo(this.videoIndex);

        if(this.selectedVideo == null){
          this.router.navigate(['/videos']);
          return;
        }
      }
    );
  }

  onEdit() {
    this.router.navigate(['/videos', this.videoIndex, 'edit']);
  }

  isAuth(){
    return this.videoService.isAuth();
  }

  onDelete() {
    this.videoService.deleteVideo(this.selectedVideo);
    this.router.navigate(['/videos']);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
