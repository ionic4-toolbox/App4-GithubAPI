import { ProjectFilterPipe } from './project-filter.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PinnedPipe } from './pinned.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ProjectFilterPipe, PinnedPipe],
  exports: [ProjectFilterPipe, PinnedPipe]
})
export class PipesModule { }
