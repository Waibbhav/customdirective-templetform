import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
import { User } from '../Model/new';
@Component({
  selector: 'app-tempform',
  templateUrl: './tempform.component.html',
  styleUrls: ['./tempform.component.css']
})
export class TempformComponent implements OnInit {
 
  click: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  dis() { this.click = true }
  user1: User | undefined;
  Hobby: string[] = ["paint", "dance", "singing"]
  gender: string[] = ["male", "female", "others"]
  city: string[] = ["kolkata", "mumbai", "bangaluru", "delhi"]
  selecthobby: string[] = []

 

  changeSelect(i: any) {
    if (this.selecthobby.length > 0) {

      let hobbyI = this.selecthobby.findIndex(  // findindex method loops through every element of an array and chakes the condition given by the function in it )
        (x) => x === i.target.value  // hobbyI is getting the value which is inside the value attribute of the html
      );
      if (hobbyI != -1) {        //when the find index function do not get any similar value it returns -1
        this.selecthobby.splice(hobbyI, 1);
      }
      else {
        this.selecthobby.push(i.target.value);
      }

    }
    else {
      this.selecthobby.push(i.target.value);
    }

    // console.log(this.selecthobby);


  }

  submitData(formData: NgForm) {
    
     let data = formData.value;
     this.user1= new User(data.Fname,data.Lname,data.gender,this.selecthobby,data.city,data.Email,data.password);
      
    console.log(this.user1);
    
        // console.log(formData.value);
        
    }
    
    
    }





