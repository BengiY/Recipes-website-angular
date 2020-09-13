import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { recipe } from '../class/recipe';
import { RecipeService } from '../recipe.service';
import { Router } from '@angular/router';
import { CategorysService } from '../categorys.service';
import { Category } from '../class/Category';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-all-recipes',
  templateUrl: './all-recipes.component.html',
  styleUrls: ['./all-recipes.component.css']
})
export class AllRecipesComponent implements OnInit {
  us: string;
  p: string;
  S = new recipe();
  u: string;
  arrCategory: string[] = [];
  arrEzer: recipe[] = [];
  constructor(public ser: RecipeService, public ser1: CategorysService, public router: Router) { }
  arr: recipe[] = [];
  flag: boolean = false;
  flag1: boolean = false;
  view: boolean = false;
  ngOnInit() {
    this.us = sessionStorage.getItem("userName");
    this.p = sessionStorage.getItem("password");
    if (this.us != null || this.p != null) {
      sessionStorage.removeItem("userName");
      sessionStorage.removeItem("password");
    }
    this.S.CategoryRecipe = new Category();
    this.ser.gettAllR().subscribe(suc => { this.arr = suc; }, err => { alert("errrrrror"); console.log(err); });
    this.ser1.gettAllCategory().subscribe(suc => { this.arrCategory = suc; }, err => { alert("errrrrror"); console.log(err); });
    console.log(this.arrCategory)
    this.u = sessionStorage.getItem("userNow");
    if (this.u == null) {
      this.u = "😐אף אחד לא מחובר";
      this.flag1 = true;
    }

  }
  // addRecipe(){this.router.navigate(["addrecipe"])}
  FindCategory() {
    this.ser1.findcategory(this.S.CategoryRecipe).subscribe(suc => this.S.CategoryRecipe = suc, err => alert(err));
  }
  onclick() {
    this.flag = false;
    this.ser.gettAllR().subscribe(suc => {
      this.arr = suc;

      for (let x of this.arr) {
        if ((this.S.NameRecipe == undefined || x.NameRecipe.indexOf(this.S.NameRecipe) > -1) &&
          (this.S.CategoryRecipe.CategoryName == undefined || x.CategoryRecipe.CategoryName == this.S.CategoryRecipe.CategoryName) &&
          (this.S.Time == null || x.Time <= this.S.Time)) 
          {
          this.arrEzer.push(x);
          this.flag = true;
         }
      }
      this.arr = this.arrEzer;
      if (this.flag == false) {
        this.view = true;
      }
      this.arr = this.arrEzer;
      this.arrEzer = [];
      console.log(this.arrEzer);

    }, err => { alert("errrrrror"); console.log(err); });
  }
  onclickB() {
    this.view = false;
    this.flag1 = false;
    this.S.Time = null;
    this.S.NameRecipe = null;
    this.S.CategoryRecipe = new Category();
    this.ser1.gettAllCategory().subscribe(suc => { this.arrCategory = suc; }, err => { alert("errrrrror"); console.log(err); });
    this.ser.gettAllR().subscribe(suc => { this.arr = suc; }, err => { alert("errrrrror"); console.log(err); });
  }

}


