import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
   color:string="red"
   day=["sun","mon","tue","wed"];
   emp =[
     {Name:"John", code:50, salary:12000},
     {Name:"Rohan", code:75, salary:20000},
     {Name:"Ayush", code:95, salary:13000}
   ]
  constructor() { }

  ngOnInit(): void {
  }

}
