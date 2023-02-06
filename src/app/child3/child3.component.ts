import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { Users } from '../Model/new'
import { NgForm } from '@angular/forms'
@Component({
  selector: 'app-child3',
  templateUrl: './child3.component.html',
  styleUrls: ['./child3.component.css']
})
export class Child3Component implements OnInit {
  @Output() send =new EventEmitter ;
user :any |undefined;

  constructor() { }

  ngOnInit(): void {
  }
submitData(formdata:NgForm){

let data=formdata.value;
this.user= new Users (data.Fname,data.Lname,data.Email,data.password)
//console.log(this.user);
this.send.emit(this.user)

}


}
