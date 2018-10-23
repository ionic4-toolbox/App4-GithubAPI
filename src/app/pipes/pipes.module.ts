import { ProjectFilterPipe } from './project-filter.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ProjectFilterPipe],
  exports: [ProjectFilterPipe]
})
export class PipesModule { }
