import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { RecipieService } from '../recipies.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
id;
editMode = false;
recipeForm : FormGroup;
  constructor(private route : ActivatedRoute, private RecipieService:RecipieService ) { }

  ngOnInit(): void {
    this.route.params
    .subscribe(
      (params : Params)=>{
        this.id = +params["id"];
        this.editMode = params["id"] != null;
        this.initForm();
      }
    );
  }

  private initForm(){
    let recipeName ="";
    let imagePath ="";
    let recDescription = "";

    if(this.editMode){
     const currentRecipe = this.RecipieService.getRecipe(this.id);
     recipeName = currentRecipe.name;
     imagePath = currentRecipe.imagePath;
     recDescription = currentRecipe.description;
    }

    this.recipeForm = new FormGroup({
      name : new FormControl(recipeName),
      imagepath: new FormControl(imagePath),
      description : new FormControl(recDescription),

    });
  }

  onSubmit(){
    console.log(this.recipeForm);
  }


}
