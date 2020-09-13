import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from './class/Category';

@Injectable({
  providedIn: 'root'
})
export class CategorysService {
  gettAllCategory()
  {
    return this.http.get<string[]>("http://localhost:54016//api/category/GettAllCategory")
  }
  findcategory(name:Category)
  {
    return this.http.post<Category>("http://localhost:54016//api/category/FindCategory",name);
  }
  constructor(public http:HttpClient) { }
}
