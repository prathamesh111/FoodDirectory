import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipies-list',
  templateUrl: './recipies-list.component.html',
  styleUrls: ['./recipies-list.component.css']
})
export class RecipiesListComponent implements OnInit {

  recipies : Recipe[] = [
    new Recipe('prathamehsh', 'tet', 'https://2.bp.blogspot.com/-GAyJEu7QA_Q/WGIbZMqbaWI/AAAAAAAAADw/DTQKC47jlyMs0PIsepvCzhFFjxJiXSNQwCLcB/s1600/veg-maharaja-mac_McDonaldsIndia_071216-.jpg'),
    new Recipe('prathamehsh', 'tet', 'https://2.bp.blogspot.com/-GAyJEu7QA_Q/WGIbZMqbaWI/AAAAAAAAADw/DTQKC47jlyMs0PIsepvCzhFFjxJiXSNQwCLcB/s1600/veg-maharaja-mac_McDonaldsIndia_071216-.jpg'),
    
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
