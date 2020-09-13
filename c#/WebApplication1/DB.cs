using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApplication1
{
    public class DB
    {
        public static List<User> userList { get; set; }
        public static List<Recipe> recipeList { get; set; }
        public static List<Category> categoryList { get; set; }
        static DB()
        {
            userList = new List<User>()
            {
                new User(){UserName="yael",Password=123,Adress="bney brak",Email="hfjdg@fhjg",Phone=054854 },
                 new User(){UserName="bbbb",Password=567,Adress="herzelia",Email="hhjg@fhjg",Phone=05454687},
                  new User(){UserName="cccc",Password=689,Adress="kfar saba",Email="dsrtdg@fhjg",Phone=052788}
            };
            categoryList = new List<Category>()
            {
                new Category(){CategoryCode=1,CategoryName="בשרי",CategoryIcon="hamburger.jpg"},
                 new Category(){CategoryCode=2,CategoryName="חלבי",CategoryIcon="pizza_slice.jpg"},
                new Category(){CategoryCode=3,CategoryName="פרווה",CategoryIcon="fruit.png"}

            };

            recipeList = new List<Recipe>()
            {
                new Recipe(){NameRecipe="מרק דלעת",CategoryRecipe=categoryList[2],Time=200,Difficulty=3,DateAdd=DateTime.Now,Ingredients=new List<string>(){"סוכר","מלח","קמח"},Preparation=new List<string>(){"לפתוח את האריזות","לשפוך לקערה את כל המרכיבים","לערבב","להעביר לתבנחת","להכניס לתנור",":) בתאבון"},UserName="yael",Image="soup.jpg",View=true },
                new Recipe(){NameRecipe="עוגת יום הולדת",CategoryRecipe=categoryList[1],Time=210,Difficulty=2,DateAdd=DateTime.Now,Ingredients=new List<string>(){"סוכר","מלח","קמח"},Preparation=new List<string>(){"לפתוח את האריזות","לשפוך לקערה את כל המרכיבים","לערבב","להעביר לתבנחת","להכניס לתנור",":) בתאבון"},UserName="nechama",Image="cake.jpg",View=true },
                 new Recipe(){NameRecipe="פסטה",CategoryRecipe=categoryList[2],Time=100,Difficulty=1,DateAdd=DateTime.Now,Ingredients=new List<string>(){"סוכר","מלח","קמח"},Preparation=new List<string>(){"לפתוח את האריזות","לשפוך לקערה את כל המרכיבים","לערבב","להעביר לתבנחת","להכניס לתנור",":) בתאבון"},UserName="lea",Image="pa.jpg",View=true },
                  new Recipe(){NameRecipe="טשולנט",CategoryRecipe=categoryList[0],Time=300,Difficulty=4,DateAdd=DateTime.Now,Ingredients=new List<string>(){"סוכר","מלח","קמח"},Preparation=new List<string>(){"לפתוח את האריזות","לשפוך לקערה את כל המרכיבים","לערבב","להעביר לתבנחת","להכניס לתנור",":) בתאבון"},UserName="zipora",Image="IMG_8128-1.jpg",View=true },
                   new Recipe(){NameRecipe="פנקייק",CategoryRecipe=categoryList[2],Time=60,Difficulty=3,DateAdd=DateTime.Now,Ingredients=new List<string>(){"סוכר","מלח","קמח"},Preparation=new List<string>(){"לפתוח את האריזות","לשפוך לקערה את כל המרכיבים","לערבב","להעביר לתבנחת","להכניס לתנור",":) בתאבון"},UserName="esther",Image="p.jpg",View=true },
                      new Recipe(){NameRecipe="מאפה",CategoryRecipe=categoryList[1],Time=210,Difficulty=5,DateAdd=DateTime.Now,Ingredients=new List<string>(){"סוכר","מלח","קמח"},Preparation=new List<string>(){"לפתוח את האריזות","לשפוך לקערה את כל המרכיבים","לערבב","להעביר לתבנחת","להכניס לתנור",":) בתאבון"},UserName="tova",Image="IMG_0149-150x150.jpg",View=true },
                     new Recipe(){NameRecipe="מרק דלעת",CategoryRecipe=categoryList[2],Time=200,Difficulty=3,DateAdd=DateTime.Now,Ingredients=new List<string>(){"סוכר","מלח","קמח"},Preparation=new List<string>(){"לפתוח את האריזות","לשפוך לקערה את כל המרכיבים","לערבב","להעביר לתבנחת","להכניס לתנור",":) בתאבון"},UserName="yael",Image="soup.jpg",View=true },
                      new Recipe(){NameRecipe="מאפה",CategoryRecipe=categoryList[2],Time=210,Difficulty=5,DateAdd=DateTime.Now,Ingredients=new List<string>(){"סוכר","מלח","קמח"},Preparation=new List<string>(){"לפתוח את האריזות","לשפוך לקערה את כל המרכיבים","לערבב","להעביר לתבנחת","להכניס לתנור",":) בתאבון"},UserName="tova",Image="IMG_0149-150x150.jpg",View=true },
                       new Recipe(){NameRecipe="מרק דלעת",CategoryRecipe=categoryList[2],Time=200,Difficulty=3,DateAdd=DateTime.Now,Ingredients=new List<string>(){"סוכר","מלח","קמח"},Preparation=new List<string>(){"לפתוח את האריזות","לשפוך לקערה את כל המרכיבים","לערבב","להעביר לתבנחת","להכניס לתנור",":) בתאבון"},UserName="yael",Image="soup.jpg",View=true },
                        new Recipe(){NameRecipe="טשולנט",CategoryRecipe=categoryList[0],Time=300,Difficulty=4,DateAdd=DateTime.Now,Ingredients=new List<string>(){"סוכר","מלח","קמח"},Preparation=new List<string>(){"לפתוח את האריזות","לשפוך לקערה את כל המרכיבים","לערבב","להעביר לתבנחת","להכניס לתנור",":) בתאבון"},UserName="zipora",Image="IMG_8128-1.jpg",View=true },
                         new Recipe(){NameRecipe="מרק דלעת",CategoryRecipe=categoryList[2],Time=200,Difficulty=3,DateAdd=DateTime.Now,Ingredients=new List<string>(){"סוכר","מלח","קמח"},Preparation=new List<string>(){"לפתוח את האריזות","לשפוך לקערה את כל המרכיבים","לערבב","להעביר לתבנחת","להכניס לתנור",":) בתאבון"},UserName="yael",Image="soup.jpg",View=true },
                           new Recipe(){NameRecipe="מרק דלעת",CategoryRecipe=categoryList[2],Time=200,Difficulty=3,DateAdd=DateTime.Now,Ingredients=new List<string>(){"סוכר","מלח","קמח"},Preparation=new List<string>(){"לפתוח את האריזות","לשפוך לקערה את כל המרכיבים","לערבב","להעביר לתבנחת","להכניס לתנור",":) בתאבון"},UserName="yael",Image="soup.jpg",View=true },
                        new Recipe(){NameRecipe="טשולנט",CategoryRecipe=categoryList[0],Time=300,Difficulty=4,DateAdd=DateTime.Now,Ingredients=new List<string>(){"סוכר","מלח","קמח"},Preparation=new List<string>(){"לפתוח את האריזות","לשפוך לקערה את כל המרכיבים","לערבב","להעביר לתבנחת","להכניס לתנור",":) בתאבון"},UserName="zipora",Image="IMG_8128-1.jpg",View=true },
                         new Recipe(){NameRecipe="מרק דלעת",CategoryRecipe=categoryList[2],Time=200,Difficulty=3,DateAdd=DateTime.Now,Ingredients=new List<string>(){"סוכר","מלח","קמח"},Preparation=new List<string>(){"לפתוח את האריזות","לשפוך לקערה את כל המרכיבים","לערבב","להעביר לתבנחת","להכניס לתנור",":) בתאבון"},UserName="yael",Image="soup.jpg",View=true }


            };
        }
    }
}