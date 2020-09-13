using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApplication1
{
    public class Recipe
    {
        public string NameRecipe;
        public Category CategoryRecipe;
        public int Time;
        public int Difficulty;
        public DateTime DateAdd;
        public List<string> Ingredients;
        public List<string> Preparation;
        public string UserName;
        public string Image;
        public bool View;
    }
}