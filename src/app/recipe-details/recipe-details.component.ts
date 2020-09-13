import { Component, OnInit, Input } from '@angular/core';
import { recipe } from '../class/recipe';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
r:recipe=new recipe();
userNow:string;
flag:boolean=false;
 u:string;
constructor(public ser:RecipeService,public active:ActivatedRoute,public roter:Router) { }
name;
navigateToEdit()
{
  this.roter.navigate(['/editrecipe']);
}
ngOnInit() {
  this.active.params.subscribe(suc=>{
    this.name=suc["name"];
    //this.funcgetrecipe(this.name); 
    this.ser.gettrecipeDetails(this.name).subscribe(suc=>{this.r=suc; this.checkToEdit();    this.u =sessionStorage.getItem("userNow");
    if(this.u==null) 
    {
      this.u=":(Not yet connected"
    };console.log(this.r)});

  })
 
} 
checkToEdit(){
  this.userNow= sessionStorage.getItem("userNow");
  if( this.userNow==this.r.UserName)
    {
       this.flag=true;
    }
  }
  //funcgetrecipe(name:string){this.ser.gettrecipeDetails(this.name).subscribe(suc=>{this.r=suc;this.checkToEdit()})}
}
