import { FivethreeCoreModule } from '@fivethree/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ResumePage } from './resume.page';
import { MarkdownModule } from 'ngx-markdown';

const routes: Routes = [
  {
    path: '',
    component: ResumePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    MarkdownModule.forChild(),
    FivethreeCoreModule
  ],
  declarations: [ResumePage]
})
export class ResumePageModule {}
