import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStudentComponent } from './components/add-student/add-student.component';
import { EditComponent } from './components/edit/edit.component';
import { ListComponent } from './components/list/list.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { ParentComponent } from './components/parent/parent.component';

const routes: Routes = [
  {
    path:'add',
    component: AddStudentComponent
  },
  {
    path:'edit/:id',
    component: EditComponent
  },
  {
    path:'list',
    component: ListComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'register',
    component: RegistrationComponent
  },
  {
    path:'parent',
    component: ParentComponent
  },
  {
    path: 'student',
    loadChildren: () => import('./student/student.module').then(m => m.StudentModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
