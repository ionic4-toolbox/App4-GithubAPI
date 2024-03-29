import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '', loadChildren: './pages/home/home.module#HomePageModule' },
  { path: 'resume', loadChildren: './pages/resume/resume.module#ResumePageModule' },
  { path: 'projects', loadChildren: './pages/projects/projects.module#ProjectsPageModule' },
  { path: 'imprint', loadChildren: './pages/impressum/impressum.module#ImpressumPageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
