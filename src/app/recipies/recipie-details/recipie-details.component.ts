import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipie-details',
  templateUrl: './recipie-details.component.html',
  styleUrls: ['./recipie-details.component.css']
})

export class RecipieDetailsComponent implements OnInit {
  name='';
  cities = [];
  @Input() recipe : Recipe;
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
