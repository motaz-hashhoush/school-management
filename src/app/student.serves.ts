import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { HttpClient } from '@angular/common/http'

export interface Student {
  name: string,
  id: number,
  gpa: number,
  date: Date,
  regester: Date
}

@Injectable()
export class StudentServes {
  constructor(private http: HttpClient) { }

  getAllStudents(): Observable<Student[]> {
    return this.http.get<Student[]>('http://localhost:3000/api/students/');
  }


  insertStudent(std: Student) {
    return this.http.post('http://localhost:3000/api/students', std)
  }


}