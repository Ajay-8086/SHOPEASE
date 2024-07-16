import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Product } from "../models/product.interface";

@Injectable({
    providedIn:'root'
})
export class ApiServices{
    constructor(private http:HttpClient){}
    api = environment.url
    // getting all categories function
    getCategories():Observable<string[]> {
        const url = `${this.api}/products/categories`
        return this.http.get<string[]>(url)
    }
    // getting all the products
    getProductsByCategories(category:string):Observable<Product[]>{
        const url = `${this.api}/products/category/${category}`
        return this.http.get<Product[]>(url)
    }
    // getting all the products 
    getAllProducts():Observable<Product[]>{
        const url = `${this.api}/products`
        return this.http.get<Product[]>(url)
    }
}