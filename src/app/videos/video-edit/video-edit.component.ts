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

import {VideoService} from "../video.service";
import {Video} from "../video";

@Component({
  selector: 'app-video-edit',
  templateUrl: './video-edit.component.html',
  styleUrls: ['./video-edit.component.css']
})
export class VideoEditComponent implements OnInit {
  videoForm: FormGroup;
  private videoIndex: number;
  private video: Video;
  private isNew = true;
  private subscription: Subscription;

  constructor(private route: ActivatedRoute,
              private videoService: VideoService,
              private formBuilder: FormBuilder,
              private router: Router) {}

  ngOnInit() {
    this.subscription = this.route.params.subscribe(
      (params: any) => {
        if (params.hasOwnProperty('id')) {
          this.isNew = false;
          this.videoIndex = +params['id'];
          this.video = this.videoService.getVideo(this.videoIndex);
          if(this.video == null){
            this.video = {
              name:"",
              description:"",
              imagePath:""
            };
            this.router.navigate(['/videos']);
          }
        } else {
          this.isNew = true;
          this.video = null;
        }
        this.initForm();
      }
    );
  }

  isAuth(){
    return this.videoService.isAuth();
  }

  onSubmit() {
    const newVideo = this.videoForm.value;
    if (this.isNew) {
      this.videoService.addVideo(newVideo);
    } else {
      this.videoService.editVideo(this.video, newVideo);
    }
    this.videoService.storeData()
      .then(success => {this.router.navigate(['videos']);},error => {this.router.navigate(['/videos/error'])} );;

  }

  onCancel() {
    this.router.navigate(['videos']);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  private navigateBack() {
    this.router.navigate(['../']);
  }

  private initForm() {
    let videoName = 'Winning goal against Bingham';
    let videoImageUrl = 'https://www.youtube.com/embed/8zcaSk0PTPs';
    let videoContent = 'Winning goal against Bingham Details';

    if (!this.isNew){
      videoName = this.video.name;
      videoImageUrl = this.video.imagePath;
      videoContent = this.video.description;
    }
    this.videoForm = this.formBuilder.group({
      name: [videoName, Validators.required],
      imagePath: [videoImageUrl, Validators.required],
      description: [videoContent, Validators.required]
    });
  }

}
