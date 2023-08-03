import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent{

  title = "This is parent component";
  value: string = ''
  fromChild = ''
  constructor(){}
  submitVal(val: string){
    this.value = val
  }
  getValChild(data: any){
    this.fromChild = data
    console.log(data)
  }
  
}
