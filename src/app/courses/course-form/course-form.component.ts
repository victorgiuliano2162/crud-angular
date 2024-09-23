import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CoursesService } from '../services/courses.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Location } from '@angular/common';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss'],
})
export class CourseFormComponent implements OnInit {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private service: CoursesService,
    private router: Router,
    private snackBar: MatSnackBar,
    private localtion: Location
  ) {
    this.form = this.formBuilder.group({
      name: [null],
      category: [null],
    });
  }

  ngOnInit(): void {}

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
