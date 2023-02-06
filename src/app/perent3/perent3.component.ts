import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perent3',
  templateUrl: './perent3.component.html',
  styleUrls: ['./perent3.component.css']
})
export class Perent3Component implements OnInit {
arr:any=[];
  constructor() { }

  ngOnInit(): void {
  }
submit(e:any){
  this.arr.push(e);
  console.log(this.arr);
}
}
