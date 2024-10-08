import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Course } from '../model/course';
import { Observable } from 'rxjs';
import { delay, first, tap } from 'rxjs/operators';

//this annotation indicate that we want a instance of this class automatic
@Injectable({
  providedIn: 'root',
  //define the acessebilty os this instance, root
})
export class CoursesService {
  private readonly API = 'api/courses';

  //dependecy injection
  constructor(private httpClient: HttpClient) {
    //we need to import HttpModule, however, we usually do this in the app.module.ts, so the http is available globally
  }

  list(): Observable<Course[]> {
    return this.httpClient.get<Course[]>(this.API).pipe(
      first(), //obtém a primeira resposta do servidor e finalizar a incrição
      //take(1), consulta um determinado número de vezes
      delay(500), //o valor é passado em ms
      tap((courses) => console.log(courses))
    );
    //o pipe habilita a manipulação da resposta
  }

  loadById(id: string) {
    return this.httpClient.get<Course>(`${this.API}/${id}`);
  }

  save(record: Partial<Course>) {
    if (record._id) {
      return this.update(record);
    }
    console.log("creou")
    return this.create(record);
  }
  //Partial tag allow few fields of a object

  private create(record: Partial<Course>) {
    return this.httpClient.post<Course>(this.API, record).pipe(first());
  }

  private update(record: Partial<Course>) {
    return this.httpClient
      .put<Course>(`${this.API}/${record._id}`, record)
      .pipe(first());
  }
}
