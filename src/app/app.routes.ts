import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LightsComponent } from './lights/lights.component';
import { MusicComponent } from './music/music.component';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: '',
    component: MainComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'music', component: MusicComponent },
      { path: 'lights', component: LightsComponent },
    ],
  },
  { path: '**', redirectTo: 'dashboard' },
];
