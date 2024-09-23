import { Component, OnInit } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CoursesService } from '../../services/courses.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Location } from '@angular/common';
import { Course } from '../../model/course';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss'],
})
export class CourseFormComponent implements OnInit {
  form = this.formBuilder.group({
    _id: [''],
    name: [''],
    category: [''],
  });

  constructor(
    private formBuilder: NonNullableFormBuilder,
    private service: CoursesService,
    private router: Router,
    private snackBar: MatSnackBar,
    private localtion: Location,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const course: Course = this.route.snapshot.data['course']; //same name as used in resolver
    this.form.setValue({
      _id: course._id,
      name: course.name,
      category: course.category
    });
  }


  onSubmit() {
    this.service.save(this.form.value).subscribe(
      (result) => this.onSucess(),
      (error) => this.onError()
    );
    //console.log(this.form.value);
  }

  onCancel() {
    console.log('Concelou course form');
    this.localtion.back();
  }

  private onError() {
    this.snackBar.open('Erro ao salvar curso', 'Fechar', { duration: 2500 });
  }

  private onSucess() {
    this.snackBar.open('Curso salvo com sucesso', '', { duration: 2500 });
    this.onCancel();
  }
}
