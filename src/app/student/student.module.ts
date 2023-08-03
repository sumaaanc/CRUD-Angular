import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { DetailsComponent } from './details/details.component';
import { MarksComponent } from './marks/marks.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DetailsComponent,
    MarksComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    ReactiveFormsModule
  ]
})
export class StudentModule { 
  constructor(){
    console.log('student loaded')
  }
}
