import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style',
  templateUrl: './style.component.html',
  styleUrls: ['./style.component.css']
})
export class StyleComponent implements OnInit {
  person =[
    {Name:"John", code:1, salary:12000, city:"kolkata"},
    {Name:"Rohan", code:2, salary:20000, city:"nagpur"},
    {Name:"Ayush", code:3, salary:13000, city:"bangaluru"},
    {Name:"waibbhav",code:4,salary:15000, city:"chenai"},
    {Name:"Athistha",code:5,salary:50000, city:"bangaluru"}
  ]
  constructor() { }

  ngOnInit(): void {
  }
  changecolor (pcode:number) {
      //return pcode%2===0?'red':'blue';
      switch(pcode){
        case 2: return 'red';
        case 1: return 'blue';
        case 3: return 'green';
        case 4: return 'yellow';
        case 5: return 'black';
        default : return 'grey';

      }
  }

}
