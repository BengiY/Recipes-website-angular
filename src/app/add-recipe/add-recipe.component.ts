import { Component, OnInit } from '@angular/core';
import { recipe } from '../class/recipe';
import { CategorysService } from '../categorys.service';
import { Router } from '@angular/router';
import { RecipeService } from '../recipe.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Category } from '../class/Category';


@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css']
})
export class AddRecipeComponent implements OnInit {
  add;
  v: boolean = false;
  go: boolean = false;
  Go: boolean = false;
  u: string;
  flag: boolean = true;
  constructor(public ser: CategorysService, public ser1: RecipeService, public router: Router) { }
  recipeToAdd: recipe = new recipe();
  arrCategory: string[] = [];
  returnValue: recipe;
  ezerI: string[] = [];
  ezerP: string[] = [];
  arrRecipe: recipe[] = [];
  ngOnInit() {
    this.ser.gettAllCategory().subscribe(suc => { this.arrCategory = suc; }, err => { alert("errrrrror"); console.log(err); });
    this.ser1.gettAllR().subscribe(suc => { this.arrRecipe = suc; }, err => { alert("errrrrror"); console.log(err); });
    this.add = new FormGroup({
      fname: new FormControl("", Validators.compose([Validators.required, Validators.pattern('[a-zA-Zא-ת ]*')])),
      time: new FormControl("", Validators.pattern('[0-9]*')),
      diff: new FormControl("", Validators.pattern('[0-9]*')),
      category: new FormControl("", Validators.required)
    });
    this.recipeToAdd.CategoryRecipe = new Category(2, "פרווה", "fruit.png");
    this.recipeToAdd.DateAdd = new Date(Date.now());
    this.u = sessionStorage.getItem("userNow");
    if (this.u == null) {
      this.u = "😐אף אחד לא מחובר";
      this.flag = false;
    }
    this.recipeToAdd.Ingredients = [""];
    this.recipeToAdd.Preparation = [""];
  }

  addRowIngridience(i) {
    if (this.recipeToAdd.Ingredients[i + 1] == undefined)
      {this.recipeToAdd.Ingredients.push("");}
      this.I();
  }
  addRowMaking(i) {
    if (this.recipeToAdd.Preparation[i + 1] == undefined) 
    {
      this.recipeToAdd.Preparation.push("");
    }
    this.P();
  }

  trackByFn(index: any, item: any) {
    return index;
  }
  FindCategory() {
    this.ser.findcategory(this.recipeToAdd.CategoryRecipe).subscribe(suc => this.recipeToAdd.CategoryRecipe = suc, err => alert(err));
    console.log(this.recipeToAdd.CategoryRecipe)
  }
  I() {
    this.ezerI=[];
    for (let i = 0; i < this.recipeToAdd.Ingredients.length; i++) {
      if (this.recipeToAdd.Ingredients[i] != "") { this.ezerI.push(this.recipeToAdd.Ingredients[i]) }
    }

    this.recipeToAdd.Ingredients = this.ezerI;
    this.recipeToAdd.Ingredients.push("");
  }
  P() {
    this.ezerP=[];
    for (let i = 0; i < this.recipeToAdd.Preparation.length; i++) {
      if (this.recipeToAdd.Preparation[i] != "") { this.ezerP.push(this.recipeToAdd.Preparation[i]) }
    }
    this.recipeToAdd.Preparation = this.ezerP;
    this.recipeToAdd.Preparation.push("");
  }
  AddRecipe() {
    if (this.add.valid) {
      this.go = false;
      for (let x of this.arrRecipe) {
        if (this.recipeToAdd.NameRecipe == x.NameRecipe) {
          alert("שם המתכון קיים , אנא החלף שם מתכון")
          this.go = true;
          this.recipeToAdd.NameRecipe = "";
          break;
        }
      }

      if (this.go != true) {

        if (this.recipeToAdd.Image == undefined) {
          this.recipeToAdd.Image = "no-image-available-sign-internet-260nw-261719003.jpg";
        }
        else { this.recipeToAdd.Image = this.recipeToAdd.Image.slice(12); }
        this.I();
        this.P();
        this.recipeToAdd.UserName = this.u;
        console.log(this.recipeToAdd)
        this.ser1.addRecipe(this.recipeToAdd).subscribe(suc => { this.returnValue = suc; alert(" המתכון " + this.returnValue + " נקלט בהצלחה "); this.router.navigate(['/all']); }, err => { alert("errrrrror"); console.log(err); });
        this.router.navigate(['/all']);
      }
    }
    else {
      this.v = true;
    }
  }
}



