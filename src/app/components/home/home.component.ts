import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.interface';
import { ApiServices } from 'src/app/services/api.service';


@Component({
  selector: 'app-products',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  categories: string[] = [];
  products: Product[] = [];
  selectedCategory: string = '';
  isLoading: boolean = false;

  constructor(private apiServices: ApiServices) {}

  ngOnInit(): void {
    this.loadCategories();
  }
  // getting the categories 
  loadCategories(): void {
    this.isLoading = true;
    this.apiServices.getCategories().subscribe(categories => {
      this.categories = categories;
      if (categories.length > 0) {
        this.selectedCategory = categories[0];
        this.loadProducts();
      }
      this.isLoading = false;
    }, error => {
      console.error(error);
      this.isLoading = false;
    });
  }
  // getting all the products
  loadProducts(): void {
    this.isLoading = true;
    this.apiServices.getProductsByCategories(this.selectedCategory)
      .subscribe(products => {
        console.log(products);
        
        this.products = products;
        this.isLoading = false;
      }, error => {
        console.error(error);
        this.isLoading = false;
      });
  }
  // assigning the selected category 
  selectCategory(category: string): void {
    this.selectedCategory = category;
    this.loadProducts();
  }
}
