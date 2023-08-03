import { Component, OnInit } from '@angular/core';
import { StudentsService } from 'src/app/students.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit{

  constructor(private student: StudentsService){}
  students: any[] | undefined;

  ngOnInit(): void {
    this.student.getAllStudents().subscribe((data: any)=> {
      this.students = data;
      console.warn(data)
    })
  }
  deleteSts(id: number){
    this.student.deleteStudent(id).subscribe((res)=>{
      this.ngOnInit();
      console.warn(res);
    }) 
  }
}
