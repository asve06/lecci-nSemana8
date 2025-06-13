import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PostreComponent } from './pages/postre/postre.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'postres', component: PostreComponent }
];
