import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AllRecipesComponent } from './all-recipes/all-recipes.component';
import { HttpClientModule } from '@angular/common/http';
import { MinitPipe } from './pipes/MinitsPipe';
import { RecipeItemComponent } from './recipe-item/recipe-item.component';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { EditRecipeComponent } from './edit-recipe/edit-recipe.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { difficultyPipe } from './pipes/difficultyPipe';
import { LogOutComponent } from './log-out/log-out.component';
import{ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AllRecipesComponent,
    MinitPipe,
    difficultyPipe,    
    RecipeItemComponent,
    AddRecipeComponent,
    EditRecipeComponent,
    RecipeDetailsComponent,
    LogOutComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
