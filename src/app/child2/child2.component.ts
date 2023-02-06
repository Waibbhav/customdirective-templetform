import { Component, OnInit ,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {
  msg :string ='good afternoon'; 
  constructor() { }
 @Output() sendmsg =new EventEmitter ;
  ngOnInit(): void {
  }
  myfunc(){
    console.log("buttonclicked");
    this.sendmsg.emit(this.msg)
    
  }

}
