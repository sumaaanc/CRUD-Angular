import { Component, EventEmitter, Input, Output , OnInit} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() parentValue = '';
  @Output() getValChild: EventEmitter<any> = new EventEmitter()

  name = 'bravooooo'

  constructor(){} 
  ngOnInit(): void {
    this.getValChild.emit(this.name)
  }

}
