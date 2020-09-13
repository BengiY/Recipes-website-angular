import { Category } from './Category';

export class recipe{
    constructor(public NameRecipe?:string,public CategoryRecipe?:Category,public Time?:number, public Difficulty?:number,public DateAdd?:Date,
        public  Ingredients?:string[],public Preparation?:string[],public UserName?:string,public Image?:string,public View?:boolean
        )
     {}
}
