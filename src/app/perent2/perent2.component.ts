import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perent2',
  templateUrl: './perent2.component.html',
  styleUrls: ['./perent2.component.css']
})
export class Perent2Component implements OnInit {

   storemsg:string|undefined;
   

  constructor() { }

  ngOnInit(): void {
  }

   store(data:any){

    this.storemsg =data;

   }

 

}
