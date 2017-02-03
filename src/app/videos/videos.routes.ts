import { Routes } from "@angular/router";

import { VideoStartComponent } from "./video-start.component"
import { VideoEditComponent } from "./video-edit/video-edit.component";
import { VideoDetailComponent } from "./video-detail/video-detail.component";
import { VideoErrorPageComponent } from "./video-error-page.component";

export const VIDEOS_ROUTES: Routes = [
  { path: '', component: VideoStartComponent },
  { path: 'new', component: VideoEditComponent },
  { path: 'error', component: VideoErrorPageComponent },
  { path: ':id', component: VideoDetailComponent },
  { path: ':id/edit', component: VideoEditComponent }
];
