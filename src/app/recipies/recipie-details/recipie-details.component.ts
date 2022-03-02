import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipie-details',
  templateUrl: './recipie-details.component.html',
  styleUrls: ['./recipie-details.component.css']
})

export class RecipieDetailsComponent implements OnInit {
  
  cities = [];
  constructor() {
    this.cities = [
      {name: 'To shopping List', code: 'NY'},
      {name: 'Edit Recipe', code: 'RM'},
      {name: 'Delete Recipe', code: 'LDN'},
  ];
   }

  ngOnInit(): void {
  }

}
