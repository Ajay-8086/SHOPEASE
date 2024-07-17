import { Component } from '@angular/core';
import { Cart, CartProducts } from 'src/app/models/cart.interface';
import { Product } from 'src/app/models/product.interface';
import { ApiServices } from 'src/app/services/api.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  cartProducts:CartProducts[] =[] 
  allProducts:Product[] = []
  constructor(private apiService:ApiServices){}
  ngOnInit() {
    this.apiService.getAllProducts().subscribe(products => {
      this.allProducts = products;
      this.loadCart();
    });
    
  }

  loadCart() {
    this.apiService.getCart().subscribe((cart: Cart) => {
      this.cartProducts = cart.products.map((cartProduct:any) => {
        const productDetails = this.allProducts.find(product => product.id === cartProduct.productId);
        if (productDetails) {
          return {
            ...cartProduct,
            ...productDetails
          };
        } else {
          return cartProduct;
        }
        
      });
    });

  }
  // decrement the cart product quantity
  decrement(product: CartProducts) {
    if (product.quantity > 1) {
      product.quantity--;
    }
  }
// increment the cart product quantity
  increment(product: CartProducts) {
    product.quantity++;
  }

  // delete the product from the cart 
  deleteProduct(id:number){
   this.cartProducts =  this.cartProducts.filter(product=>product.id !== id)
   this.apiService.removeFromCart()
  }
}
