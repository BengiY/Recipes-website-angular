import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { recipe } from '../class/recipe';
import { CategorysService } from '../categorys.service';
import { Router, ActivatedRoute } from '@angular/router';
import { RecipeService } from '../recipe.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-recipe',
  templateUrl: './edit-recipe.component.html',
  styleUrls: ['./edit-recipe.component.css']
})
export class EditRecipeComponent implements OnInit {
  recipeToEdit:recipe=new recipe();
  arrCategory:string[]=[];
  constructor(public ser:CategorysService,public ser2:RecipeService,public router:Router,public active:ActivatedRoute) { }
// @Input()
// rE:recipe;
name;
v:boolean=false;
i:number=0;
r:recipe=new recipe();
im:string;
form;
ezerI:string[]=[]
ezerP:string[]=[]
productParents:HTMLCollection;
  ngOnInit() {
    
    this.ser.gettAllCategory().subscribe(suc=>{this.arrCategory=suc;},err=>{alert("errrrrror");console.log(err);});
   this.r.DateAdd=new Date(Date.now());
    this.active.params.subscribe(suc=>{
      this.name=suc["name"];
      this.funcgetrecipe(this.name); 
  
    })
    this.form=new FormGroup({
      time:new FormControl("",Validators.pattern('[0-9]*')),
      diff:new FormControl("",Validators.pattern('[0-9]*')),
      category:new FormControl("",Validators.required)
    });
    }
    funcgetrecipe(name:string)
    {this.ser2.gettrecipeDetails(this.name).subscribe(suc=>{this.r=suc;this.im=this.r.Image;})}

I()
{
  this.ezerI=[];
  for(let i=0;i<this.r.Ingredients.length;i++)
  {
    if(this.r.Ingredients[i]!="")
    {this.ezerI.push(this.r.Ingredients[i])}
  }
  this.r.Ingredients=this.ezerI;
  this.r.Ingredients.push("");
}
P()
{
  this.ezerP=[];
  for(let i=0;i<this.r.Preparation.length;i++)
  {
    if(this.r.Preparation[i]!="")
    {this.ezerP.push(this.r.Preparation[i])}
  }
  this.r.Preparation=this.ezerP;
  this.r.Preparation.push("");
}
editRecipe()
{
 if(this.form.valid){
  this.I();
  this.P();
  if(this.im!=this.r.Image)
  {this.r.Image =this.r.Image.slice(12);}
  console.log(this.r);
  this.ser2.EditRecipe(this.r).subscribe(suc=>alert(suc),err=>alert(err));
  this.router.navigate(['/all']);}
  else{this.v=true;}
}

addRowIngridience(i){
  if(this.r.Ingredients[i+1]==undefined)
   {this.r.Ingredients.push("");} 
   this.I();
  }
  addRowMaking(i){
    if(this.r.Preparation[i+1]==undefined)
   { this.r.Preparation.push("");}
   this.P();
  }
FindCategory()
{
  this.ser.findcategory(this.r.CategoryRecipe).subscribe(suc=>this.r.CategoryRecipe=suc,err=>alert(err));
}

trackByFn(index: any, item: any) {
  return index;
}
refresh()
{
  this.ngOnInit()
}
}