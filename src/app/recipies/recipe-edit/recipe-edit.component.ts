import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipieService } from '../recipies.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  id:number;
  editMode = false;
  recipeForm : FormGroup;
  constructor(private route : ActivatedRoute, private RecipieService:RecipieService , private router : Router) { }

  ngOnInit() {
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
    let recipeIngredients = new FormArray([]);

    // Form initialization
    this.recipeForm = new FormGroup({
      name : new FormControl(recipeName, Validators.required),
      imagepath: new FormControl(imagePath, Validators.required),
      description : new FormControl(recDescription, Validators.required),
      ingredients : recipeIngredients,
    });


    if(this.editMode){
     const currentRecipe = this.RecipieService.getRecipe(this.id);
     recipeName = currentRecipe.name;
     imagePath = currentRecipe.imagePath;
     recDescription = currentRecipe.description;
      if(currentRecipe.ingredients){
        currentRecipe.ingredients.forEach(recItem => {
          recipeIngredients.push(
            new FormGroup({
              name: new FormControl(recItem.name, Validators.required),
              amount : new FormControl(recItem.amount, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
            })
          );
        });
      } 
    }


}

get controlss() { // a getter!
  return (<FormArray>this.recipeForm.get('ingredients')).controls;
}

  onSubmit(){
    const newRecipe = new Recipe(
      this.recipeForm.value.name,
      this.recipeForm.value.description,
      this.recipeForm.value.imagepath,
      this.recipeForm.value.ingredients

    );
   if(this.editMode){
     this.RecipieService.updateRecipe(this.id, newRecipe);
   }else{
     this.RecipieService.addRecepies(newRecipe);
   }

   this.onCancel();
  }

  onAddIngredient(){
    (<FormArray>this.recipeForm.get('ingredients')).push(
      new FormGroup({
        name: new FormControl(null, Validators.required),
        amount : new FormControl([Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
      })
    )

  }""

  onCancel(){
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  onDeleteIngred(index: number){
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(index);
  }


}
