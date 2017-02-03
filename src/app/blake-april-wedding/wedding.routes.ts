import { Routes } from "@angular/router";
import {WeddingStartComponent} from "./wedding-start.component";
import {WeddingEditComponent} from "./wedding-edit/wedding-edit.component";
import {WeddingDetailComponent} from "./wedding-detail/wedding-detail.component";

export const CRUISE_ROUTES: Routes = [
  { path: '', component: WeddingStartComponent },
  { path: 'new', component: WeddingEditComponent },
  { path: ':id', component: WeddingDetailComponent },
  { path: ':id/edit', component: WeddingEditComponent }
];
