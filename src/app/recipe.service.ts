
import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { User } from './class/User';
import { recipe } from './class/recipe';
@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  gettAllR()
  {
    return this.http.get<recipe[]>("http://localhost:54016//api/recipe/GettAllRecipe")
  }
  gettrecipeDetails(r:string)
  {
    return this.http.get<recipe>("http://localhost:54016/api/recipe/gettRecipeDetails?name="+r);
  }
  addRecipe(r:recipe)
  {
    return this.http.post<recipe>("http://localhost:54016//api/recipe/AddRecipe",r);
  }
  EditRecipe(r:recipe)
  {
    return this.http.post<recipe>("http://localhost:54016//api/recipe/editRecipe",r);
  }
  constructor(public http:HttpClient) { }
}
