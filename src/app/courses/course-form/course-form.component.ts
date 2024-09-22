import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss']
})
export class CourseFormComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private service: CoursesService,
    private router: Router
  ) {
    this.form = this.formBuilder.group({
      name:[null],
      category: [null],
    });
   }

  ngOnInit(): void {
  }

  onSubmit() {
    this.service.save(this.form.value).subscribe(data => console.log(data));
    //console.log(this.form.value);
  }

  onCancel() {
    console.log("Concelou course form");
    this.router.navigate([''])
  }

}
