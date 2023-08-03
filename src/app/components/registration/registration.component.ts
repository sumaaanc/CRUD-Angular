import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormArray, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { StudentsService } from 'src/app/students.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent  {
  @ViewChild("btnbtn")buttomm!: ElementRef<any>;
  
  constructor(private fb: FormBuilder, private register: StudentsService){}

  registerForm = this.fb.group({
    fullName:['',Validators.required],
    phoneNum: this.fb.array([
      this.fb.control('', Validators.required)
    ]),
    address: this.fb.group({
      pradesh: ['', Validators.required],
      district:['', Validators.required],
      municipality:['', Validators.required]
    }),
    enrolledCourses: this.fb.array([this.createEnrolledCourse()])
  })
  createEnrolledCourse(): FormGroup {
    return this.fb.group({
      courseName: ['', Validators.required],
      instructor: ['', Validators.required],
      duration: ['', Validators.required]
    });
  }
  addEnrolledCourse() {
    const enrolledCoursesArray = this.registerForm.get('enrolledCourses') as FormArray;
    enrolledCoursesArray.push(this.createEnrolledCourse());
  }

  get fullName(){
    return this.registerForm.get('fullName')
  }
  get phoneNumber(){
    return this.registerForm.get('phoneNum') as FormArray;
  }
  get addressSts(){
    return this.registerForm.get('address') as FormGroup;
  }
  get pradeshSts(){
    return this.registerForm.get('address.pradesh');
  }
  get districtSts(){
    return this.registerForm.get('address.district');
  }
  get municipalSts(){
    return this.registerForm.get('address.municipality');
  }
  get courses(){
    return this.registerForm.get('enrolledCourses') as FormArray;
  }
  addPhoneNum(){
    this.phoneNumber.push(this.fb.control(''))
  }
  registerStudent(){
    this.register.registerStudent(this.registerForm.value).subscribe((res)=>{
      console.warn(res)
      this.registerForm.reset({})
    })
  }
}
