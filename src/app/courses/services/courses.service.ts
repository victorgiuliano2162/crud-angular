import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Course } from '../model/course';
import { Observable } from 'rxjs';
import { first, take, tap } from 'rxjs/operators';

//this annotation indicate that we want a instance of this class automatic
@Injectable({
  providedIn: 'root',
  //define the acessebilty os this instance, root
})
export class CoursesService {
  private readonly API = '/assets/cursos.json';

  //dependecy injection
  constructor(private httpClient: HttpClient) {
    //we need to import HttpModule, however, we usually do this in the app.module.ts, so the http is available globally
  }

  list(): Observable<Course[]> {
    return this.httpClient.get<Course[]>(this.API).pipe(
      //first(), obtem a primeira resposta do servidor e finalizar a incrição
      //consulta um determinado número de vezes take(1),
      tap(courses => console.log(courses))
    );
    //o pipe habilita a manipulação da resposta
  }
}
