import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perent',
  templateUrl: './perent.component.html',
  styleUrls: ['./perent.component.css']
})
export class PerentComponent implements OnInit {
  currentItem = 'Television';
  citem= 'sofa';
  constructor() { }

  ngOnInit(): void {
  }

}
