import { Injectable } from '@angular/core';
import { Student } from '../entities/student';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  baseUrl="http://localhost:9690/v1/api/student"

  constructor(private http:HttpClient) { }

  getAllStudents() : Observable<Student[]>{
    return this.http.get<Student[]>(`${this.baseUrl}/all`);
  }

  createStudent(student:Student):Observable<any>{
    return this.http.post(`${this.baseUrl}/create`,student,{ responseType: 'text'});
  }

  deleteStudent(id:number):Observable<any>{
    return this.http.delete(`${this.baseUrl}/remove/${id}`,{responseType: 'text'});
  }

  getOneStudent(id:number):Observable<Student>{
    return this.http.get<Student>(`${this.baseUrl}/find/${id}`);
  }

  updateStudent(student:Student):Observable<any>{
    return this.http.put(`${this.baseUrl}/modify`,student,{responseType:'text'});
  }
  
}
