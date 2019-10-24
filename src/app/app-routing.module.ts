<<<<<<< HEAD
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'registration', loadChildren: './registration/registration.module#RegistrationPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'community-event', loadChildren: './community-event/community-event.module#CommunityEventPageModule' }, 
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'report-alert', loadChildren: './report-alert/report-alert.module#ReportAlertPageModule' },
  { path: 'profile', loadChildren: './profile/profile.module#ProfilePageModule' },
  { path: 'popup', loadChildren: './popup/popup.module#PopupPageModule' },  { path: 'reported-incident', loadChildren: './reported-incident/reported-incident.module#ReportedIncidentPageModule' },
  { path: 'track-modal', loadChildren: './track-modal/track-modal.module#TrackModalPageModule' },
=======
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
>>>>>>> db57338de12737570468a49a99d45027ce030c7b

const routes: Routes = [
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'registration', loadChildren: './registration/registration.module#RegistrationPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'profile', loadChildren: './profile/profile.module#ProfilePageModule' },
  { path: 'popup', loadChildren: './popup/popup.module#PopupPageModule' },
  { path: 'reported-incident', loadChildren: './reported-incident/reported-incident.module#ReportedIncidentPageModule' },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
