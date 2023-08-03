import { Component, OnInit } from '@angular/core';
import { StudentsService } from 'src/app/students.service';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-student',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  constructor(private student: StudentsService, private fb: FormBuilder,
     private router: ActivatedRoute,
     private http: HttpClient){}

  alert : boolean = false;
  editForm = this.fb.group({
    name : ['',[Validators.required]],
    address: ['', Validators.required],
    email: ['', Validators.required]
  })

  ngOnInit(): void {
    //console.warn(this.router.snapshot.params['id'])
    this.student.getStudentById(this.router.snapshot.params['id']).subscribe((res: any)=>{
      this.editForm = this.fb.group({
        name : [res['name'], Validators.required],
        address: [res['address'], Validators.required],
        email: [res['email'], Validators.required]
      })
    })
  }
  get stsName(){
    return this.editForm.get('name');
  }
  get stsAddress(){
    return this.editForm.get('address');
  }
  get stsEmail(){
    return this.editForm.get('email');
  }
  onSubmit(){
    if(this.editForm.valid){
    this.student.updateStudentById(this.router.snapshot.params['id'], this.editForm.value).subscribe((res)=>{
      console.warn(res)
      this.alert = true;
      this.editForm.reset({})
    })
    }
  }
  closeMsg(){
    this.alert = false;
  }
}

