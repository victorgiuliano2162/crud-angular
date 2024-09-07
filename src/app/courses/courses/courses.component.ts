import { Component, OnInit } from '@angular/core';
import { Course } from '../model/course';
import { CoursesService } from '../services/courses.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  courses: Observable<Course[]>;
  displayedColumns = ['name', 'category'];

  //coursesService: CoursesService;


  constructor(private coursesService: CoursesService) {
    //this.courses = [];
    //é possível inicializar a variável tanto no construtor quanto no ngOnInit ou na declaração e não há diferença
    //this.coursesService = new CoursesService();
    this.courses = this.coursesService.list();
  }

  ngOnInit(): void {
    //renderiza somente quando o componente é renderizado
    this.courses = this.coursesService.list();
  }

}
