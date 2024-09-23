import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './containers/courses/courses.component';
import { CourseFormComponent } from './containers/course-form/course-form.component';
import { CourseResolver } from './guards/course.resolver';

const routes: Routes = [
  {
    path: '',
    component: CoursesComponent,
  },
  {
    path: 'new',
    component: CourseFormComponent, resolve: { course: CourseResolver }
  },
  {
    path: 'edit/:id', //os 2 pontos são usados para indicar o parâmetro da url
    component: CourseFormComponent, resolve: { course: CourseResolver }
    //resolve implementation sets a resolver to solve the route
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoursesRoutingModule {}
