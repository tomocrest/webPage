import { RouterModule, Routes } from '@angular/router';

import { MembersComponent } from './members/members.component';
import { VacationsComponent } from './vacations/vacations.component';
import { EventsComponent } from './events/events.component';
//import { PhotosComponent } from './photos/photos.component';
import { HomeComponent } from './home/home.component';
import { PhotoEditComponent } from "./photos/photo-edit/photo-edit.component";
import {PhotoListComponent} from "./photos/photo-list/photo-list.component";
import {LakePowellComponent} from "./lake-powell/lake-powell.component";
import {CaliforniaComponent} from "./california/california.component";
import {BlakeAprilWeddingComponent} from './blake-april-wedding/blake-april-wedding.component';
import { CRUISE_ROUTES } from "./cruise/cruise.routes"
import {CruiseComponent} from "./cruise/cruise.component";
import {PHOTOS_ROUTES} from "./photos/photos.routes";
import {VIDEOS_ROUTES} from "./videos/videos.routes";
import {PhotosComponent} from "./photos/photos.component";
import {SigninComponent} from "./signin.component";
import { VideosComponent } from "./videos/videos.component";
import { VideoEditComponent } from "./videos/video-edit/video-edit.component";

const APP_ROUTES: Routes = [
  {path: 'members', component: MembersComponent},
  {path: 'vacations', component: VacationsComponent},
  {path: 'events', component: EventsComponent},
  {path: 'photos', component: PhotosComponent, children: PHOTOS_ROUTES},
  {path: 'home', component: HomeComponent },
  {path: '', component: HomeComponent },
  { path: 'photos/new', component: PhotoEditComponent },
  {path: 'vacations/cruise', component: CruiseComponent, children: CRUISE_ROUTES},
  {path: 'vacations/lake-powell', component: LakePowellComponent},
  {path: 'vacations/california', component: CaliforniaComponent},
  {path: 'events/b-a-wedding', component: BlakeAprilWeddingComponent},
  {path: 'signin', component: SigninComponent},
  { path: 'videos/new', component: VideoEditComponent },
  {path: 'videos', component: VideosComponent, children: VIDEOS_ROUTES}

];

export const routing = RouterModule.forRoot(APP_ROUTES);
