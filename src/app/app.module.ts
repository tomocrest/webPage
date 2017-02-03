import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { TitleComponent } from './title.component';
import { MembersComponent } from './members/members.component';
import { VacationsComponent } from './vacations/vacations.component';
import { EventsComponent } from './events/events.component';
import { PhotosComponent } from './photos/photos.component';
import { HomeComponent } from './home/home.component';
import {routing} from "./app.routing";
import { MemberItemComponent } from './members/member-list/member-item.component';
import { MemberListComponent } from './members/member-list/member-list.component';
import { VacationsListComponent } from './vacations/vacations-list/vacations-list.component';
import { VacationItemComponent } from './vacations/vacations-list/vacation-item.component';
import { PhotoServiceService } from './photos/photo-service.service';
import { PhotoListComponent } from './photos/photo-list/photo-list.component';
import { PhotoItemComponent } from './photos/photo-list/photo-item.component';
import { PhotoEditComponent } from './photos/photo-edit/photo-edit.component';
import { CruiseComponent } from './cruise/cruise.component';
import { LakePowellComponent } from './lake-powell/lake-powell.component';
import { CaliforniaComponent } from './california/california.component';
import { EventListComponent } from './events/event-list/event-list.component';
import { EventItemComponent } from './events/event-list/event-item.component';
import { BlakeAprilWeddingComponent } from './blake-april-wedding/blake-april-wedding.component';
import { CruiseListComponent } from './cruise/cruise-list/cruise-list.component';
import { DisplayComponent } from './cruise/display/display.component';
import { CruiseItemComponent } from './cruise/cruise-list/cruise-item.component';
import { CruiseDetailComponent } from './cruise/cruise-detail/cruise-detail.component';
import { CruiseStartComponent } from './cruise/cruise-start.component';
import { CruiseEditComponent } from './cruise/cruise-edit/cruise-edit.component'
import {CruiseService} from "./cruise/cruise.service";
import { PhotosStartComponent } from './photos/photos-start.component';
import { PhotoDetailComponent } from './photos/photo-detail/photo-detail.component';
import { ErrorPageComponent } from './photos/error-page.component';
import { SigninComponent } from './signin.component';
import {AuthService} from "./auth.service";
import { WeddingDetailComponent } from './blake-april-wedding/wedding-detail/wedding-detail.component';
import { WeddingEditComponent } from './blake-april-wedding/wedding-edit/wedding-edit.component';
import { WeddingListComponent } from './blake-april-wedding/wedding-list/wedding-list.component';
import { WeddingItemComponent } from './blake-april-wedding/wedding-list/wedding-item.component';
import { WeddingStartComponent } from './blake-april-wedding/wedding-start.component';
import { VideosComponent } from './videos/videos.component';
import { VideoDetailComponent } from './videos/video-detail/video-detail.component';
import { VideoEditComponent } from './videos/video-edit/video-edit.component';
import { VideoListComponent } from './videos/video-list/video-list.component';
import { VideoItemComponent } from './videos/video-list/video-item.component';
import { VideoStartComponent } from './videos/video-start.component';
import { VideoService } from './videos/video.service';
import { VideoErrorPageComponent } from './videos/video-error-page.component';
import { SafePipe } from './videos/video-detail/video-detail.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TitleComponent,
    MembersComponent,
    VacationsComponent,
    EventsComponent,
    PhotosComponent,
    HomeComponent,
    MemberItemComponent,
    MemberListComponent,
    VacationsListComponent,
    VacationItemComponent,
    PhotoListComponent,
    PhotoItemComponent,
    PhotoEditComponent,
    CruiseComponent,
    LakePowellComponent,
    CaliforniaComponent,
    EventListComponent,
    EventItemComponent,
    BlakeAprilWeddingComponent,
    CruiseListComponent,
    DisplayComponent,
    CruiseItemComponent,
    CruiseDetailComponent,
    CruiseStartComponent,
    CruiseEditComponent,
    PhotosStartComponent,
    PhotoDetailComponent,
    ErrorPageComponent,
    VideoErrorPageComponent,
    SigninComponent,
    WeddingDetailComponent,
    WeddingEditComponent,
    WeddingListComponent,
    WeddingItemComponent,
    WeddingStartComponent,
    VideosComponent,
    VideoDetailComponent,
    VideoEditComponent,
    VideoListComponent,
    VideoItemComponent,
    VideoStartComponent,
    SafePipe

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    routing
  ],
  providers: [PhotoServiceService, CruiseService, AuthService, VideoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
