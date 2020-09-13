import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AllRecipesComponent } from './all-recipes/all-recipes.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { EditRecipeComponent } from './edit-recipe/edit-recipe.component';
import { LogOutComponent } from './log-out/log-out.component';


const routes: Routes = [
  {path:"register",component:RegisterComponent},
  {path:"login",component:LoginComponent},
  {path:"all",component:AllRecipesComponent},
  {path:"recipeDetails/:name",component:RecipeDetailsComponent},
  {path:"addrecipe",component:AddRecipeComponent},
  {path:"editrecipe/:name",component:EditRecipeComponent},
  {path:"logout",component:LogOutComponent},
  {path:"",redirectTo:"/login",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
