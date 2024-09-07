import { Component, OnInit } from '@angular/core';
import { Course } from '../model/course';
import { CoursesService } from '../services/courses.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  courses$: Observable<Course[]>;
  //dolar sign indica
  displayedColumns = ['name', 'category'];

  //coursesService: CoursesService;


  constructor(private coursesService: CoursesService) {
    //this.courses = [];
    //é possível inicializar a variável tanto no construtor quanto no ngOnInit ou na declaração e não há diferença
    //this.coursesService = new CoursesService();
    this.courses$ = this.coursesService.list()
    .pipe(
      catchError(error => {
        console.log(error)
        return of([])
      })
      //catchError must return an observable
      //the 'of' automatic create an observable
    );
  }

  ngOnInit(): void {
    //renderiza somente quando o componente é renderizado
  }

}
