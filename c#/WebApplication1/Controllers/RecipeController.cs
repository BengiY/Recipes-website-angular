using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Http.Cors;


namespace WebApplication1.Controllers
{
    [EnableCors(methods: "*", headers: "*", origins: "*")]
    public class RecipeController : ApiController
    {[HttpGet]
        public IHttpActionResult GettAllRecipe()
        {
            return Ok(DB.recipeList);
        }
        [HttpGet]
        public IHttpActionResult gettRecipeDetails(string name)
        {
            foreach(var i in DB.recipeList)
            {
                if (name == i.NameRecipe)
                    return Ok(i);
            }
            return Ok(false);
        }
        [HttpPost]
        public IHttpActionResult AddRecipe(Recipe r)
        {
            DB.recipeList.Add(new Recipe {NameRecipe=r.NameRecipe,CategoryRecipe=r.CategoryRecipe,Time=r.Time,Difficulty=r.Difficulty,DateAdd=r.DateAdd, Ingredients =r.Ingredients, Preparation =r.Preparation, UserName =r.UserName,Image=r.Image});
            return Ok(r.NameRecipe);
        }
        public IHttpActionResult editRecipe(Recipe newR)
        {
            foreach (Recipe r in DB.recipeList)
                if (r.NameRecipe == newR.NameRecipe)
                {
                    r.CategoryRecipe = newR.CategoryRecipe;
                    r.Ingredients= newR.Ingredients;
                    r.Time = newR.Time;
                    r.Preparation = newR.Preparation;
                    r.Difficulty = newR.Difficulty;
                    r.Image = newR.Image;
                    return Ok("בוצע בהצלחה");
                }
            return Ok("נכשל");
        }

    }
}