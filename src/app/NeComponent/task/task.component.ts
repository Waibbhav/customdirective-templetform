import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  constructor() { 
    //this.display()
  
  }

  ngOnInit(): void {
  }
 display(){
  alert("button got clicked")
 }
}
