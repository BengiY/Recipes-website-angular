import { Component, OnInit, Input } from '@angular/core';
import { recipe } from '../class/recipe';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
@Input()
myRecipeNow:recipe;

arr:recipe=new recipe();
flag:boolean;

flag1:boolean=true;
ThereIsUser:string;
constructor(public ser:RecipeService) { }


  ngOnInit() {
    
    this.ThereIsUser =sessionStorage.getItem("userNow");
   
    if(this.ThereIsUser==undefined)
    {
     this.flag1=false;
    }
    else
    this.flag1=true;
  }

}
