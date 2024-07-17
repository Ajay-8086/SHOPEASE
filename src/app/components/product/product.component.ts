import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product.interface';
import { ApiServices } from 'src/app/services/api.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  productDetails!: Product;
  quantity = 1;

  constructor(private apiService: ApiServices, private route: ActivatedRoute) {}

  ngOnInit() {
    const productId = this.route.snapshot.params['id'];
    this.apiService.getProductById(productId).subscribe(product => {
      this.productDetails = product;
    });
  }



}
