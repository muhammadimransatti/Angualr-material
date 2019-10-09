import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  opened= false;
  log(state){
    console.log(state)
  }
  constructor() { }

  ngOnInit() {
  }

}
