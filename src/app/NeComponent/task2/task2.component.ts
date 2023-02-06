import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task2',
  templateUrl: './task2.component.html',
  styleUrls: ['./task2.component.css']
})
export class Task2Component implements OnInit {


  data:string="hello world";
  va:Number=786;
  result:boolean=true;
  img:string="https://images.unsplash.com/photo-1665319545079-31f2c242bcf5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1935&q=80"
  
  constructor() {
    this.enable()
    
   }
  
  ngOnInit(): void {
  }
enable(){
  setTimeout(() => {
    this.result=false;
  }, 5000);
}
 display2(){
    this.img="https://images.unsplash.com/photo-1665522599210-6c9ab3da8716?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=423&q=80";
    setTimeout(() => {
      this.img="https://images.unsplash.com/photo-1665319545079-31f2c242bcf5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1935&q=80"
    }, 2000);
}
}
