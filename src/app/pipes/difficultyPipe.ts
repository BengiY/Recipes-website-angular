import{Pipe,PipeTransform} from"@angular/core"
@Pipe({
    name:"difficulty"
})
export class difficultyPipe implements PipeTransform{
transform(value:number):string
{
    let ReturnValue:string="";
   for(let i=0;i<value;i++)
   {
    ReturnValue+="*";
   }
  
   return ReturnValue;
}
}