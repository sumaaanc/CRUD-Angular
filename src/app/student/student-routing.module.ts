import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { MarksComponent } from './marks/marks.component';

const routes: Routes = [
  {path:'details', component: DetailsComponent },
  {path:'marks', component: MarksComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }



