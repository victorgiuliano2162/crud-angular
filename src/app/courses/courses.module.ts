import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesComponent } from './courses/courses.component';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    CoursesComponent,
  ],
  imports: [
    AppMaterialModule,
    CoursesRoutingModule,
    CommonModule,
    SharedModule,
  ]
})
export class CoursesModule { }
