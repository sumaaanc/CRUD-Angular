import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  url ="http://localhost:3000/students"
  urls ="http://localhost:3000/registered"
  
  constructor(private http: HttpClient) { }
  getAllStudents(){
    return this.http.get(this.url)
  }
  saveStudent(data: any){
    console.warn(data)
    return this.http.post(this.url, data);
  }
  deleteStudent(id: number){
    return this.http.delete(`${this.url}/${id}`) 
  }
  getStudentById(id: number){
    return this.http.get(`${this.url}/${id}`)
  }
  updateStudentById(id: number, data: any){
    return this.http.put(`${this.url}/${id}`, data )
  }
  registerStudent(data: any){
    console.log(data)
    return this.http.post(this.urls, data);
  }
}
