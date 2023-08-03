import { Component } from '@angular/core';
import { StudentsService } from 'src/app/students.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent  {
  

  constructor(private student: StudentsService, private fb: FormBuilder){}
  alert : boolean = false;

  registerForm = this.fb.group({
    name : ['',[Validators.required]],
    address: ['', Validators.required],
    email: ['', Validators.required]
  })

  get stsName(){
    return this.registerForm.get('name');
  }
  get stsAddress(){
    return this.registerForm.get('address');
  }
  get stsEmail(){
    return this.registerForm.get('email');
  }

  onSubmit(){
    if(this.registerForm.valid){
    this.student.saveStudent(this.registerForm.value).subscribe((res)=> {
      this.alert = true;
      this.registerForm.reset({})
      console.warn(res)
    });
  }
  
  }
  closeMsg(){
    this.alert = false;
  }
}
