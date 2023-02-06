import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-twoway',
  templateUrl: './twoway.component.html',
  styleUrls: ['./twoway.component.css']
})
export class TwowayComponent implements OnInit {
fname:string="Webskitters"
Firstname:string="SDE"
  constructor() { }

  ngOnInit(): void {
  }
   change (e:any) {

    this.fname=e.target.value
  }

}
