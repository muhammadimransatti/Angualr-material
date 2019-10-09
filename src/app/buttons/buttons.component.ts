import { Component, OnInit } from '@angular/core';

export interface Fruit {
  name: string;
}

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {
  centered = false;
  disabled = false;
  unbounded = false;

  radius: number;
  color: string;
  showSpinner=false;
  notifications =0;

  loadData(){
  this.showSpinner = true;
  setTimeout(() =>{
    this.showSpinner=false;
  },5000);
}

  constructor() { }

  ngOnInit() {
  }

}
