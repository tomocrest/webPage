import { Routes } from "@angular/router";

import { CruiseStartComponent } from "./cruise-start.component"
import { CruiseDetailComponent } from "./cruise-detail/cruise-detail.component";
import { CruiseEditComponent } from "./cruise-edit/cruise-edit.component";

export const CRUISE_ROUTES: Routes = [
  { path: '', component: CruiseStartComponent },
  { path: 'new', component: CruiseEditComponent },
  { path: ':id', component: CruiseDetailComponent },
  { path: ':id/edit', component: CruiseEditComponent }
];
